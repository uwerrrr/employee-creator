package employeecreator.employeecreatorbackend.employee;

import java.time.LocalDate;

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
	private String firstName;
	
	@Column(nullable = true) // optional
	private String middleName;
	
	@Column
	private String lastName;
	
	@Column(unique = true, nullable = false)
	private String email;
	
	@Column(unique = true, nullable = false)
	private Long phone;
	
	@Column
	private String address;
	
	@Column
	private String cotractType;
	
	@Column
	private LocalDate startDate;
	
	@Column(nullable = true)
	private LocalDate finishDate;
	
	@Column
	private String employmentType;
	
	@Column
	private Float hoursPerWeek;
	
	
	//// Constructors
	public Employee() {}
	
	public Employee(String firstName, String middleName, String lastName, String email, Long phone, String address,
			String cotractType, LocalDate startDate, LocalDate finishDate, String employmentType, Float hoursPerWeek) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.cotractType = cotractType;
		this.startDate = startDate;
		this.finishDate = finishDate;
		this.employmentType = employmentType;
		this.hoursPerWeek = hoursPerWeek;
	}


	//// Getter & Setter
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCotractType() {
		return cotractType;
	}

	public void setCotractType(String cotractType) {
		this.cotractType = cotractType;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getFinishDate() {
		return finishDate;
	}

	public void setFinishDate(LocalDate finishDate) {
		this.finishDate = finishDate;
	}

	public String getEmploymentType() {
		return employmentType;
	}

	public void setEmploymentType(String employmentType) {
		this.employmentType = employmentType;
	}

	public Float getHoursPerWeek() {
		return hoursPerWeek;
	}

	public void setHoursPerWeek(Float hoursPerWeek) {
		this.hoursPerWeek = hoursPerWeek;
	}

	public Long getId() {
		return id;
	}
	
	
}
