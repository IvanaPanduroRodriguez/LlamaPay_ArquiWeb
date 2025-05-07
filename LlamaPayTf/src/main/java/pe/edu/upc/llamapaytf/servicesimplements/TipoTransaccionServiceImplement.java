package pe.edu.upc.llamapaytf.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.llamapaytf.entities.TipoTransaccion;
import pe.edu.upc.llamapaytf.repositories.ITipoTransaccionRepository;
import pe.edu.upc.llamapaytf.servicesinterfaces.ITipoTransaccionService;

import java.util.List;

@Service
public class TipoTransaccionServiceImplement implements ITipoTransaccionService {

    @Autowired
    private ITipoTransaccionRepository tipoTransaccionRepository;

    @Override
    public void insert(TipoTransaccion tipoTransaccion) {
        tipoTransaccionRepository.save(tipoTransaccion);
    }

    @Override
    public void update(TipoTransaccion tipoTransaccion) {
        tipoTransaccionRepository.save(tipoTransaccion);
    }

    @Override
    public void delete(int id) {
        tipoTransaccionRepository.deleteById(id);
    }

    @Override
    public List<TipoTransaccion> list() {
        return tipoTransaccionRepository.findAll();
    }

    @Override
    public TipoTransaccion listID(int id) {
        return tipoTransaccionRepository.findById(id).orElse(new TipoTransaccion());
    }
}
