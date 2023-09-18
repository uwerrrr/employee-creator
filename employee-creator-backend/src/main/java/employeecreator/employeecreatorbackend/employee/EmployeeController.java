package employeecreator.employeecreatorbackend.employee;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
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
		String enteredPhone = data.getPhone();
		
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
	
	// ----- DELETE -----	
	@DeleteMapping("/{id}")
	public ResponseEntity<Employee> deleteById(@PathVariable Long id){
		boolean isEmployeeDeleted = this.employeeService.deleteById(id);
		
		if (!isEmployeeDeleted) {
			throw new NotFoundException(String.format("Employee with id %s not found, could not be deleted", id));
		}
		
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}
	
	// ----- PATCH -----	
	@PatchMapping("/{id}")
	public ResponseEntity<Employee> updateById(@PathVariable Long id, @Valid @RequestBody UpdateEmployeeDTO data){
		
		Optional<Employee> maybeEmployeeUpdated = this.employeeService.updateById(id, data);
		if(maybeEmployeeUpdated.isEmpty()) {
			throw new NotFoundException(String.format("Employee with id %s not found, could not be updated", id));
		}
		
		return new ResponseEntity<Employee>(maybeEmployeeUpdated.get(), HttpStatus.OK);
	}
	
	// ----- TEST connection -----
	@GetMapping("/test")
	public String test(){
		return "Connection is good";
	}
}
