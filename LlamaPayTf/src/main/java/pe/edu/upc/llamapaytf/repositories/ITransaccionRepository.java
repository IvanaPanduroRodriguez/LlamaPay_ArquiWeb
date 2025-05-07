package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pe.edu.upc.llamapaytf.entities.Transaccion;

import java.math.BigDecimal;
import java.util.List;

public interface ITransaccionRepository extends JpaRepository<Transaccion, Integer> {

    // Buscar transacciones con monto mayor a un valor Y filtradas por mes.
    @Query("SELECT t FROM Transaccion t WHERE t.monto > :monto AND FUNCTION('MONTH', t.fechaTransaccion) = :mes")
    List<Transaccion> findByMontoMayorAndMes(@Param("monto") BigDecimal monto, @Param("mes") int mes);

    // Buscar transacciones por descripción parcial y mes.
    @Query("SELECT t FROM Transaccion t WHERE LOWER(t.descripcion) LIKE LOWER(CONCAT('%', :descripcion, '%')) AND FUNCTION('MONTH', t.fechaTransaccion) = :mes")
    List<Transaccion> findByDescripcionAndMes(@Param("descripcion") String descripcion, @Param("mes") int mes);
}
