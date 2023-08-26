package employeecreator.employeecreatorbackend.employee;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;

public class UpdateEmployeeDTO {
	@Pattern(regexp = "^(?=\\S).*$", message="Content cannot be an empty string") // should not content only white space
	String firstName;
	
	@Pattern(regexp = "^(?=\\S).*$", message="Content cannot be an empty string") // should not content only white space
	String middleName;
	
	@Pattern(regexp = "^(?=\\S).*$", message="Content cannot be an empty string") // should not content only white space
	String lastName;
	
	@Pattern(regexp = "^(?=\\S).*$", message="Content cannot be an empty string") // should not content only white space
	String email;
	
	@Positive
	Long phone;
	
	@Pattern(regexp = "^(?=\\S).*$", message="Content cannot be an empty string") // should not content only white space
	String address;

	@Pattern(regexp = "^(?=\\S).*$", message="Content cannot be an empty string") // should not content only white space
	String contractType;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	LocalDate startDate;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	LocalDate finishDate;
	
	@Pattern(regexp = "^(?=\\S).*$", message="Content cannot be an empty string") // should not content only white space
	String employmentType;
	
	@Positive
	Float hoursPerWeek;

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
