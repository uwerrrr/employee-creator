package employeecreator.employeecreatorbackend.employee;

import java.util.List;
import java.util.Optional;

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
	
	// check existing email
	protected boolean isExistedEmail(String email) {
		return this.employeeRepository.existsByEmail(email);
	}

	// check existing phone
	protected boolean isExistedPhone(Long phone) {
		return this.employeeRepository.existsByPhone(phone);
	}
	
	
	// ----- FIND -----
	
	// find all
	public List<Employee> findAll(){
		return this.employeeRepository.findAll();
		// .findAll(): Returns all instances of the type.
			// returns empty array if none is found
	}
	
	// find id
	public Optional<Employee> findById(Long id){
		Optional<Employee> maybeEmployee = this.employeeRepository.findById(id);
		
		return maybeEmployee;
	}
	
	
	
	// ----- CREATE -----
	public Employee create(CreateEmployeeDTO data) {
		Employee newEmployee = modelMapper.map(data, Employee.class);
		Employee createdEmployee = this.employeeRepository.save(newEmployee);
		
		return createdEmployee;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
