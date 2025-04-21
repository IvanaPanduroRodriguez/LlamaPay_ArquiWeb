package pe.edu.upc.llamapaytf.servicesinterfaces;

import pe.edu.upc.llamapaytf.entities.Transaccion;

import java.util.List;

public interface ITransaccionService {
    void insert(Transaccion transaccion);
    void update(Transaccion transaccion);
    void delete(int id);
    List<Transaccion> list();
    Transaccion listID(int id);
}
