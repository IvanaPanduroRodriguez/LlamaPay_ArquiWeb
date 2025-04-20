package pe.edu.upc.llamapaytf.servicesinterfaces;
import pe.edu.upc.llamapaytf.entities.Tienda;
import java.util.List;

public interface TiendaService {
    public void insertar(Tienda t);
    public List<Tienda> list();
    public Tienda listarId(int Tienda_id);
    public void modificar(Tienda t);
    public void eliminar(int id);
}
