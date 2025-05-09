package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pe.edu.upc.llamapaytf.entities.Transaccion;

import java.math.BigDecimal;
import java.util.List;

public interface ITransaccionRepository extends JpaRepository<Transaccion, Integer> {

    //Buscar transacciones con monto mayor a un valor y por mes
    @Query(value = "SELECT * FROM transaccion WHERE monto > :monto AND EXTRACT(MONTH FROM fecha_transaccion) = :mes", nativeQuery = true)
    List<Transaccion> findByMontoMayorAndMes(@Param("monto") BigDecimal monto, @Param("mes") int mes);

    //Buscar transacciones por descripción parcial y mes
    @Query(value = "SELECT * FROM transaccion WHERE LOWER(descripcion) LIKE LOWER(CONCAT('%', :descripcion, '%')) AND EXTRACT(MONTH FROM fecha_transaccion) = :mes", nativeQuery = true)
    List<Transaccion> findByDescripcionAndMes(@Param("descripcion") String descripcion, @Param("mes") int mes);

    //Busqueda simple: Buscar transacciones solo por descripción parcial (sin mes)
    @Query(value = "SELECT * FROM transaccion WHERE LOWER(descripcion) LIKE LOWER(CONCAT('%', :descripcion, '%'))", nativeQuery = true)
    List<Transaccion> findByDescripcion(@Param("descripcion") String descripcion);
}
