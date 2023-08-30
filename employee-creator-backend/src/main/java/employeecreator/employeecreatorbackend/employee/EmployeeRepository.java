package employeecreator.employeecreatorbackend.employee;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	// JpaRepository<data type, id type>
	
	
	boolean existsByEmail(String email);
	boolean existsByPhone(String phone);
	
}
