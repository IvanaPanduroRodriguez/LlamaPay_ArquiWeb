package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.llamapaytf.entities.Category;


public interface ICategoryRepository extends JpaRepository<Category, Integer> {
}
