package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.llamapaytf.entities.Producto;

public interface IProductoRepository extends JpaRepository<Producto,Integer> {
    //query
}
