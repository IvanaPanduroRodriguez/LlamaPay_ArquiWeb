package pe.edu.upc.llamapaytf.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.llamapaytf.entities.Cuenta;
import pe.edu.upc.llamapaytf.repositories.ICuentaRepository;
import pe.edu.upc.llamapaytf.servicesinterfaces.ICuentaService;

import java.math.BigDecimal;
import java.util.List;

@Service
public class CuentaServiceImplement implements ICuentaService {

    @Autowired
    private ICuentaRepository cuentaRepository;

    @Override
    public void insertar(Cuenta cuenta) {
        cuentaRepository.save(cuenta);
    }

    @Override
    public List<Cuenta> listar() {
        return cuentaRepository.findAll();
    }

    @Override
    public void modificar(Cuenta cuenta) {
        cuentaRepository.save(cuenta);
    }

    @Override
    public void eliminar(int id) {
        cuentaRepository.deleteById(id);
    }

    @Override
    public List<Cuenta> listarPorUsuario(int usuarioId) {
        return List.of();
    }

    @Override
    public BigDecimal obtenerSaldoTotal(int usuarioId) {
        return null;
    }
}

