package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pe.edu.upc.llamapaytf.entities.Transaccion;

import java.math.BigDecimal;
import java.util.List;

public interface ITransaccionRepository extends JpaRepository<Transaccion, Integer> {

    // 1. Buscar transacciones por tipo
    @Query("SELECT t FROM Transaccion t WHERE t.tipoTransaccion = :tipo")
    List<Transaccion> findByTipoTransaccion(@Param("tipo") String tipo);

    // 2. Buscar transacciones con monto mayor a un valor
    @Query("SELECT t FROM Transaccion t WHERE t.monto > :monto")
    List<Transaccion> findByMontoMayor(@Param("monto") BigDecimal monto);
}
