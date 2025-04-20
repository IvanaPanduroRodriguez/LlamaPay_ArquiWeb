package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.llamapaytf.entities.Product;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
// Queries van aca
}