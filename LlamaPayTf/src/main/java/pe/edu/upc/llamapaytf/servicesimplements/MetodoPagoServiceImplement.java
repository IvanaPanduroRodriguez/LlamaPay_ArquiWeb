package pe.edu.upc.llamapaytf.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.llamapaytf.entities.MetodoPago;
import pe.edu.upc.llamapaytf.repositories.IMetodoPagoRepository;
import pe.edu.upc.llamapaytf.servicesinterfaces.IMetodoPagoService;

import java.util.List;

@Service
public class MetodoPagoServiceImplement implements IMetodoPagoService {

    @Autowired
    private IMetodoPagoRepository metodoPagoRepository;

    @Override
    public List<MetodoPago> listarMetodoPagos() {
        return metodoPagoRepository.findAll();
    }

    @Override
    public void registrar(MetodoPago metodoPago) {
        metodoPagoRepository.save(metodoPago);
    }

    @Override
    public List<MetodoPago> listar() {
        return List.of();
    }

    @Override
    public void eliminar(int id) {
        metodoPagoRepository.deleteById(id);
    }

    @Override
    public MetodoPago buscarPorId(int id) {
        return metodoPagoRepository.findById(id).orElse(null);
    }

    @Override
    public List<MetodoPago> buscarPorNombre(String nombre) {
        return metodoPagoRepository.findByNombreMetodoPagoContainingIgnoreCase(nombre);
    }
}

