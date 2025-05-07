package pe.edu.upc.llamapaytf.servicesinterfaces;

import pe.edu.upc.llamapaytf.entities.TipoTransaccion;
import pe.edu.upc.llamapaytf.entities.Transaccion;
import java.util.List;

public interface ITransaccionService {
    public void insert(Transaccion tr);
    public void update(Transaccion tr);
    public void delete(int id);
    public List<Transaccion> list();

    public List<String[]>contarTransaccionesPorFecha();
    public List<String[]>sumarMontosPorFecha();
}
