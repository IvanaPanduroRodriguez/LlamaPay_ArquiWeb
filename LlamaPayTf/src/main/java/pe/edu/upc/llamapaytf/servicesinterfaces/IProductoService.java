package pe.edu.upc.llamapaytf.servicesinterfaces;

import pe.edu.upc.llamapaytf.entities.Producto;


import java.util.List;

public interface IProductoService {
    public List<Producto> list();
    public void insertar(Producto p);
    public Producto listarId(int Producto_id);
    public void modificar(Producto p);
    public elimiar(int id);
    public List<String[]> productosandpriceandunit();
    public List<String[]> productosandtienda();
}


