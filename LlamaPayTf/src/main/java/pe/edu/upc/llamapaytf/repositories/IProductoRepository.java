package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.llamapaytf.entities.Producto;

@Repository
public interface IProductoRepository extends JpaRepository<Producto,Integer> {
    //query
}
