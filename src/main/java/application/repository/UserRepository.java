package application.repository;

import java.util.List;

import application.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long>{

    List<User> findByLastName(String lastName);
}
