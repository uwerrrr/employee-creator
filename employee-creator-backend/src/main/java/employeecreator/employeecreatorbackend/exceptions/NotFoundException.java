package employeecreator.employeecreatorbackend.exceptions;

public class NotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	private String message;
	
	public NotFoundException(String message) {
		super();
		this.message = message;
	}
	
	public String getMessage() {
		return this.message;
	} 

}
