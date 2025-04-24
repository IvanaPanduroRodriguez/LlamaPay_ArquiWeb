package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.llamapaytf.entities.Cuenta;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface ICuentaRepository extends JpaRepository<Cuenta, Integer> {

    @Query("SELECT c FROM Cuenta c WHERE c.usuario.idUser = :usuarioId")
    List<Cuenta> findByUserId(int usuarioId);

    @Query("SELECT SUM(c.saldo) FROM Cuenta c WHERE c.usuario.idUser = :usuarioId")
    BigDecimal findTotalSaldoByUserId(int usuarioId);
}