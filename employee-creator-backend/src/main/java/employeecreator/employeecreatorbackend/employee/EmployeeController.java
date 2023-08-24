package employeecreator.employeecreatorbackend.employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


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
	
}
