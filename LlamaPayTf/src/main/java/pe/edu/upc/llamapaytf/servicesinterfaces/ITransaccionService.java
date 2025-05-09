package pe.edu.upc.llamapaytf.servicesinterfaces;

import pe.edu.upc.llamapaytf.entities.Transaccion;

import java.math.BigDecimal;
import java.util.List;

public interface ITransaccionService {
    List<Transaccion> list();
    void insert(Transaccion transaccion);
    Transaccion listID(int id);
    void update(Transaccion transaccion);
    void delete(int id);
    List<Transaccion> findByMontoMayorAndMes(BigDecimal monto, int mes);
    List<Transaccion> findByDescripcionAndMes(String descripcion, int mes);
    List<Transaccion> findByDescripcion(String descripcion);
}
