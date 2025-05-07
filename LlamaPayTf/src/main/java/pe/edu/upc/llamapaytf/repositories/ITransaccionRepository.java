package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.llamapaytf.entities.Transaccion;

import java.util.List;

@Repository
public interface ITransaccionRepository extends JpaRepository<Transaccion,Integer> {
    @Query("SELECT t.fechaTransaccion, COUNT(t) FROM Transaccion t GROUP BY t.fechaTransaccion")
    List<String[]> contarTransaccionesPorFecha();

    @Query("SELECT t.fechaTransaccion, SUM(t.montoTransaccion) FROM Transaccion t GROUP BY t.fechaTransaccion")
    List<String[]> sumarMontosPorFecha();
}
