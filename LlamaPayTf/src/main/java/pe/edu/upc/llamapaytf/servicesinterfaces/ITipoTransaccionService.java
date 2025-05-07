package pe.edu.upc.llamapaytf.servicesinterfaces;

import pe.edu.upc.llamapaytf.entities.TipoTransaccion;

import java.util.List;

public interface ITipoTransaccionService {
    void insert(TipoTransaccion tipoTransaccion);
    void update(TipoTransaccion tipoTransaccion);
    void delete(int id);
    List<TipoTransaccion> list();
    TipoTransaccion listID(int id);
}
