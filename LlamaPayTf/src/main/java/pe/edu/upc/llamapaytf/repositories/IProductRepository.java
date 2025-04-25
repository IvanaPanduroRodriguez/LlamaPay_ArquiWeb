package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.llamapaytf.entities.Product;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value="Select p.Unidad_medida, p.Precio_producto\n" +
            "FROM Producto p \n" +
            "WHERE Nombre_producto = 'NombreDelProducto'",nativeQuery = true)
    public List<App>productosandpriceandunit();

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
    public List<App>productosandtienda();
}