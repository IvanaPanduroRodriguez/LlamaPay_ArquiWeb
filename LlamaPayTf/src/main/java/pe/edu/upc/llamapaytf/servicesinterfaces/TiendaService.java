package pe.edu.upc.llamapaytf.servicesinterfaces;
import pe.edu.upc.llamapaytf.entities.Tienda;
import java.util.List;

public interface TiendaService {
    public void insert(Tienda t);
    public List<Tienda> list();
    public void delete(int Tienda_id);
    public Tienda listId(int Tienda_id);
    public List<Tienda> findByName(String Nombre_tienda);
}
