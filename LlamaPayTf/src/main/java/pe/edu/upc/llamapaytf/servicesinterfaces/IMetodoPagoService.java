package pe.edu.upc.llamapaytf.servicesinterfaces;

import pe.edu.upc.llamapaytf.entities.MetodoPago;

import java.util.List;

public interface IMetodoPagoService {
    List<MetodoPago> listarMetodoPagos();
    void registrar(MetodoPago metodoPago);
    List<MetodoPago> listar();
    void eliminar(int id);
    MetodoPago buscarPorId(int id);
    List<MetodoPago> buscarPorNombre(String nombre);
}

