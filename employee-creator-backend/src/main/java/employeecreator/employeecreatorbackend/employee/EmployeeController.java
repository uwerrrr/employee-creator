package employeecreator.employeecreatorbackend.employee;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import employeecreator.employeecreatorbackend.exceptions.NotFoundException;
import jakarta.validation.Valid;


@RestController
@RequestMapping("/employee")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	
	// ----- GET -----
	// get all
	@GetMapping
	public ResponseEntity<List<Employee>> getAll(){
		List<Employee> allEmployees = this.employeeService.findAll();
		return new ResponseEntity<>(allEmployees, HttpStatus.OK);
	}
	
	// get by id
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getById(@PathVariable Long id){
		Optional<Employee> foundEmployee = this.employeeService.findById(id);
		
		if (foundEmployee.isEmpty()) {
			throw new NotFoundException(String.format("Employee with id %s not found", id));
		}
		return new ResponseEntity<>(foundEmployee.get(), HttpStatus.OK);
	}
	
	
	// ----- POST -----	
	@PostMapping
	public ResponseEntity <Employee> createEmployee(@Valid @RequestBody CreateEmployeeDTO data){
		
		String enteredEmail = data.getEmail();
		Long enteredPhone = data.getPhone();
		
		boolean isExistedPhone = this.employeeService.isExistedPhone(enteredPhone);
		boolean isExistedEmail = this.employeeService.isExistedEmail(enteredEmail);
		
		if(isExistedPhone && isExistedEmail) {
			throw new DataIntegrityViolationException("Employee with phone " + enteredPhone + " and email " + enteredEmail + " already exists.");
		} 
		else if (isExistedPhone) {
			throw new DataIntegrityViolationException("Employee with phone " + enteredPhone + " already exists.");
		
		}
		else if (isExistedEmail) {
			throw new DataIntegrityViolationException("Employee with email " + enteredEmail + " already exists.");
		
		}
		
		Employee createdEmployee = this.employeeService.create(data);

		return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
	}
	
	
	
	
}
