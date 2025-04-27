package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.llamapaytf.entities.Transaccion;

@Repository
public interface ITransaccionRepository extends JpaRepository<Transaccion,Integer> {
}
