package employeecreator.employeecreatorbackend.employee;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "employee")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // ~ AUTO_INCREMENT from 1
	private Long id;
	
	@Column
	private String FirstName;
	
	@Column
	private String LastName;
	
}
