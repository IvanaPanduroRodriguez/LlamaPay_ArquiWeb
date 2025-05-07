package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.llamapaytf.entities.ObjetivoAhorro;

import java.util.List;

@Repository
public interface IObjetivoAhorroRepository extends JpaRepository<ObjetivoAhorro,Integer> {
    List<ObjetivoAhorro> findByUser_IdUser(int userId);

    @Query(value = "SELECT u.name_user AS nombreUsuario, SUM(o.monto_ahorrado) AS montoTotalAhorrado " +
            "FROM objetivo_ahorro o " +
            "INNER JOIN usuario u ON o.id_user = u.id_user " +
            "GROUP BY u.name_user", nativeQuery = true)
    List<String[]> amountTotalByUser();

    @Query(value = "SELECT TO_CHAR(o.fecha_creacion, 'Month') AS mes, COUNT(*) " +
            "FROM objetivo_ahorro o " +
            "GROUP BY mes " +
            "ORDER BY MIN(o.fecha_creacion)", nativeQuery = true)
    List<String[]> contarObjetivosPorMes();

}
