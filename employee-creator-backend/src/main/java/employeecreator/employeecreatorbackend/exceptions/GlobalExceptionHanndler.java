package employeecreator.employeecreatorbackend.exceptions;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class GlobalExceptionHanndler {
	
	private static class ExMess {
        private String message;
        
        public ExMess(String message) {
            this.message = message;
        }
        
        public String getMessage() {
            return message;
        }
    }
	
	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<ExMess>  handleIllegalArgumentException(DataIntegrityViolationException ex){
		return new ResponseEntity<ExMess>(new ExMess(ex.getMessage()), HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<ExMess> handleNotFoundException(NotFoundException ex){
		return new ResponseEntity<ExMess>(new ExMess(ex.getMessage()), HttpStatus.NOT_FOUND);
		
	}
	
}
