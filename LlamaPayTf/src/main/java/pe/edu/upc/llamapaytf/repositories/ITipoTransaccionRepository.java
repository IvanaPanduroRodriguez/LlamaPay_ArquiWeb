package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.llamapaytf.entities.TipoTransaccion;

public interface ITipoTransaccionRepository extends JpaRepository<TipoTransaccion, Integer> {
}
