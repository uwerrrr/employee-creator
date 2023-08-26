package employeecreator.employeecreatorbackend.employee;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;


public class CreateEmployeeDTO {
	@NotBlank(message = "First name is mandatory")
	String firstName;
	
	String middleName;
	
	@NotBlank(message = "Last name is mandatory")
	String lastName;
	
	@NotBlank(message = "Email is mandatory")
	String email;
	
	@NotNull(message = "Phone is mandatory")
	Long phone;
	
	@NotBlank(message = "Address is mandatory")
	String address;

	@NotBlank(message = "Contract type is mandatory")
	String contractType;
	
	@NotNull(message = "Start date is mandatory")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
//	@JsonFormat(pattern = "YYYY-MM-DD")
	LocalDate startDate;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	LocalDate finishDate;
	
	@NotBlank(message = "Employment type is mandatory")
	String employmentType;
	
	@NotNull(message = "Working hour is mandatory")
	@Positive
	Float hoursPerWeek;
	
	//// Constructors
	//	public CreateEmployeeDTO() {}
	
	public CreateEmployeeDTO(
	        String firstName,
	        String middleName,
	        String lastName,
	        String email,
	        Long phone,
	        String address,
	        String contractType,
	        LocalDate startDate,
	        LocalDate finishDate,
	        String employmentType,
	        Float hoursPerWeek) {
	    this.firstName = firstName;
	    this.middleName = middleName;
	    this.lastName = lastName;
	    this.email = email;
	    this.phone = phone;
	    this.address = address;
	    this.contractType = contractType;
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

	public String getContractType() {
		return contractType;
	}

	public void setContractType(String contractType) {
		this.contractType = contractType;
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
}
