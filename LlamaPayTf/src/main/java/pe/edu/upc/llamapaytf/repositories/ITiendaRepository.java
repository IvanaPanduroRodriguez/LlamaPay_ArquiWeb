package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.llamapaytf.entities.Producto;
import pe.edu.upc.llamapaytf.entities.Tienda;

import java.util.List;

@Repository
public interface ITiendaRepository extends JpaRepository<Tienda,Integer> {
    @Query("SELECT t FROM Tienda t WHERE t.nombretienda LIKE %:ntienda%")
    List<Tienda> buscarPorTienda(@Param("ntienda") String ntienda);

}
