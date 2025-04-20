package pe.edu.upc.llamapaytf.servicesinterfaces;
import pe.edu.upc.llamapaytf.entities.Recordatorio;
import java.util.List;

public interface IRecordatorioService {
    public List<Recordatorio> list();
    public void insertar(Recordatorio r);
    public Recordatorio listarId(int Recordatorio_id);
    public void modificar(Recordatorio r);
    public void eliminar(int id);
}