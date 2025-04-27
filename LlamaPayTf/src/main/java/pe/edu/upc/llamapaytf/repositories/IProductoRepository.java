package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.llamapaytf.entities.Producto;

import java.util.List;

@Repository
public interface IProductoRepository extends JpaRepository<Producto,Integer> {
    @Query(value="Select p.Unidad_medida, p.Precio_producto\n" +
            "FROM Producto p \n" +
            "WHERE Nombre_producto = 'NombreDelProducto'",nativeQuery = true)
    public List<String[]>productosandpriceandunit();

    @Query(value="Select \n" +
            "    p.Nombre_producto, \n" +
            "    p.Unidad_medida, \n" +
            "    p.Precio_producto, \n" +
            "    t.Nombre_tienda\n" +
            "FROM \n" +
            "    Producto p inner join Tienda t\n" +
            "    On p.Tienda_id = t.Tienda_id\n" +
            "WHERE \n" +
            "    p.Nombre_producto = 'NombreDelProducto';",nativeQuery = true)
    public List<String[]> productosandtienda();
}
