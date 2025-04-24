package pe.edu.upc.llamapaytf.servicesinterfaces;

import pe.edu.upc.llamapaytf.entities.Cuenta;

import java.math.BigDecimal;
import java.util.List;

public interface ICuentaService {
    void insertar(Cuenta cuenta);
    List<Cuenta> listar();
    void modificar(Cuenta cuenta);
    void eliminar(int id);
    List<Cuenta> listarPorUsuario(int usuarioId);
    BigDecimal obtenerSaldoTotal(int usuarioId);
}

