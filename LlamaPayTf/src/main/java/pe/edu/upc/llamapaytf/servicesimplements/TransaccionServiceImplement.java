package pe.edu.upc.llamapaytf.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.llamapaytf.entities.Transaccion;
import pe.edu.upc.llamapaytf.repositories.ITransaccionRepository;
import pe.edu.upc.llamapaytf.servicesinterfaces.ITransaccionService;

import java.math.BigDecimal;
import java.util.List;

@Service
public class TransaccionServiceImplement implements ITransaccionService {

    @Autowired
    private ITransaccionRepository transaccionRepository;

    @Override
    public List<Transaccion> list() {
        return transaccionRepository.findAll();
    }

    @Override
    public void insert(Transaccion transaccion) {
        transaccionRepository.save(transaccion);
    }

    @Override
    public Transaccion listID(int id) {
        return transaccionRepository.findById(id).orElse(null);
    }

    @Override
    public void update(Transaccion transaccion) {
        transaccionRepository.save(transaccion);
    }

    @Override
    public void delete(int id) {
        transaccionRepository.deleteById(id);
    }

    @Override
    public List<Transaccion> findByMontoMayorAndMes(BigDecimal monto, int mes) {
        return transaccionRepository.findByMontoMayorAndMes(monto, mes);
    }

    @Override
    public List<Transaccion> findByDescripcionAndMes(String descripcion, int mes) {
        return transaccionRepository.findByDescripcionAndMes(descripcion, mes);
    }

    @Override
    public List<Transaccion> findByDescripcion(String descripcion) {
        return transaccionRepository.findByDescripcion(descripcion);
    }
}
