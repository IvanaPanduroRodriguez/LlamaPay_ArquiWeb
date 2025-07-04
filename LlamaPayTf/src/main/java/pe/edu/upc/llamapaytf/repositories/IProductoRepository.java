package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.llamapaytf.entities.Producto;

import java.util.List;

@Repository
public interface IProductoRepository extends JpaRepository<Producto,Integer> {

    @Query(value="SELECT \n" +
            "  p.nombreproducto, \n" +
            "  COUNT(*) AS Total_Unidades, \n" +
            "  p.precioproducto, \n" +
            "  t.nombretienda\n" +
            "FROM Producto p\n" +
            "INNER JOIN Tienda t ON p.idtienda = t.idtienda\n" +
            "GROUP BY \n" +
            "  p.nombreproducto, \n" +
            "  p.precioproducto, \n" +
            "  t.nombretienda\n" +
            "ORDER BY \n" +
            "  p.nombreproducto;",nativeQuery = true)
    public List<String[]>productosandpriceandunit();

    @Query(value="SELECT \n" +
            "    u.username AS Nombre_del_Usuario, \n" +
            "    SUM(p.precioproducto) AS MontoProductos, \n" +
            "    oa.monto_meta AS MontoMeta\n" +
            "FROM \n" +
            "    Users u\n" +
            "INNER JOIN \n" +
            "    objetivo_ahorro oa ON  oa.user_id = u.user_id\n" +
            "INNER JOIN \n" +
            "    Producto p ON u.user_id = p.user_id\n" +
            "GROUP BY \n" +
            "    u.username, oa.monto_meta\n" +
            "ORDER BY \n" +
            "    u.username;",nativeQuery = true)
    public List<String[]> montosobjetivo();

    @Query("SELECT p FROM Producto p WHERE p.nombreproducto LIKE %:nproducto%")
    List<Producto> buscarPorProducto(@Param("nproducto") String nproducto);

    List<Producto> findByUserUserId(int id);
}
