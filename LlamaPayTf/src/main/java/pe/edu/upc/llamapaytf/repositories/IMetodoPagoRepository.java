package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.llamapaytf.entities.MetodoPago;

import java.util.List;

@Repository
public interface IMetodoPagoRepository extends JpaRepository<MetodoPago,Integer> {

    @Query (value="SELECT DISTINCT \n" +
            "    mp.metodo_pago_id AS Id, \n" +
            "    mp.nombre_metodo_pago AS nombre, \n" +
            "    mp.tipo_metodo_pago AS tipo, \n" +
            "    mp.descripcion AS descripcion \n" +
            "FROM transaccion t \n" +
            "JOIN metodo_pago mp ON t.metodo_pago_id = mp.metodo_pago_id \n" +
            "JOIN tipo_cuenta tc ON t.id_tipo_cuenta = tc.id_tipo_cuenta \n" +
            "WHERE tc.id_user = :userId \n" +
            "ORDER BY mp.nombre_metodo_pago ASC; \n", nativeQuery = true)
    public List<String[]> obtenerMetodosPagoPorUserId(@Param("userId") int userId);
}
