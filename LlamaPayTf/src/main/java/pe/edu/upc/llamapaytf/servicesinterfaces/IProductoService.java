package pe.edu.upc.llamapaytf.servicesinterfaces;

import pe.edu.upc.llamapaytf.entities.Producto;


import java.util.List;

public interface IProductoService {
    public List<Producto> list();
    public void insert(Producto p);
    public void delete(int Producto_id);
    public Producto listId(int Producto_id);
    public List<Producto> findByName(String Nombre_Producto);
}


