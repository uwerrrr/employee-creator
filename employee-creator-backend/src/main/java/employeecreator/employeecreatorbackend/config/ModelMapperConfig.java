package employeecreator.employeecreatorbackend.config;

import org.modelmapper.ModelMapper;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import employeecreator.employeecreatorbackend.converters.StringTrimConverter;

@Configuration
public class ModelMapperConfig {
	
	@Bean //Indicates that a method produces a bean to be managed by the Spring container.
	public ModelMapper modelMapper() {
		
		
		ModelMapper mapper = new ModelMapper();		
		
		//*** set up rules for mapper here ***//
		
		// when mapping String to String -> trim it -> return trimmed String
		mapper.typeMap(String.class, String.class).setConverter(new StringTrimConverter());
			// .typeMap(Class<String> sourceType, Class<String> destinationType)
		
		// skip null values when mapping
		mapper.getConfiguration().setSkipNullEnabled(true);
		
		
		
		return mapper;
	}
}
