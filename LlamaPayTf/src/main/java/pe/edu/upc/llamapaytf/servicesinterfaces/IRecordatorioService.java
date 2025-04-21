package pe.edu.upc.llamapaytf.servicesinterfaces;

import pe.edu.upc.llamapaytf.entities.Recordatorio;

import java.util.List;

public interface IRecordatorioService {
    public List<Recordatorio> list();
    public void insertar(Recordatorio r);
    //public Recordatorio listarId(int Recordatorio_id);
    public void update(Recordatorio r);
    public void delete(int id);
}
