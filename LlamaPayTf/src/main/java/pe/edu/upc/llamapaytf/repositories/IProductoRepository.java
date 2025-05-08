package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.llamapaytf.entities.Producto;

import java.util.List;

@Repository
public interface IProductoRepository extends JpaRepository<Producto,Integer> {
    @Query(value="SELECT \n" +
            "    u.name_user AS Nombre_Usuario, \n" +
            "    SUM(p.precio_producto) AS MontoProductos, \n" +
            "    oa.monto_meta AS MontoMeta\n" +
            "FROM \n" +
            "    Users u\n" +
            "INNER JOIN \n" +
            "    objetivo_ahorro oa ON  oa.usuario_id = u.id_user\n" +
            "INNER JOIN \n" +
            "    Producto p ON u.id_user = p.usuario_id\n" +
            "GROUP BY \n" +
            "    u.name_user, oa.monto_meta\n" +
            "ORDER BY \n" +
            "    u.name_user;",nativeQuery = true)
    public List<String[]>productosandpriceandunit();

    @Query(value="SELECT \n" +
            "    u.name_user AS Nombre_Usuario, \n" +
            "    SUM(p.precio_producto) AS MontoProductos, \n" +
            "    oa.monto_meta AS MontoMeta\n" +
            "FROM \n" +
            "    Users u\n" +
            "INNER JOIN \n" +
            "    objetivo_ahorro oa ON  oa.usuario_id = u.id_user\n" +
            "INNER JOIN \n" +
            "    Producto p ON u.id_user = p.usuario_id\n" +
            "GROUP BY \n" +
            "    u.name_user, oa.monto_meta\n" +
            "ORDER BY \n" +
            "    u.name_user;",nativeQuery = true)
    public List<String[]> productosandtienda();
    //@Param(nombreProducto) String nombreProducto

}
