package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.llamapaytf.entities.Tienda;

public interface ITiendaRepository extends JpaRepository<Tienda,Integer> {
}
