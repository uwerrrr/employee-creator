package employeecreator.employeecreatorbackend.employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/employee")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	
	// ----- GET -----
	@GetMapping
	public ResponseEntity<List<Employee>> getAll(){
		List<Employee> allEmployees = this.employeeService.findAll();
		return new ResponseEntity<>(allEmployees, HttpStatus.OK);
	}
	
	
	// ----- POST -----	
	@PostMapping
	public ResponseEntity <Employee> createEmployee(@Valid @RequestBody CreateEmployeeDTO data){
		
		String enteredEmail = data.getEmail();
		
		if (this.employeeService.isExistedEmail(enteredEmail)) {
			throw new DataIntegrityViolationException("Employee with email " + enteredEmail + " already exists.");
		
		}

		Employee createdEmployee = this.employeeService.create(data);

		return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
	}
	
	
	
}
