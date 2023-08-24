package employeecreator.employeecreatorbackend.employee;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service // identyify this is service layer
@Transactional // each database updating request is a transaction
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	

	
	// ----- FIND -----
	
	// find all
	public List<Employee> findAll(){
		return this.employeeRepository.findAll();
		// .findAll(): Returns all instances of the type.
			// returns empty array if none is found
	}
}
