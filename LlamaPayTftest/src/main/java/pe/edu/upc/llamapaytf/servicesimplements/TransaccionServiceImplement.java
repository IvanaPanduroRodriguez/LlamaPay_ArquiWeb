package pe.edu.upc.llamapaytf.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.llamapaytf.entities.Transaccion;
import pe.edu.upc.llamapaytf.repositories.ITransaccionRepository;
import pe.edu.upc.llamapaytf.servicesinterfaces.ITransaccionService;

import java.util.List;

@Service
public class TransaccionServiceImplement implements ITransaccionService {
    @Autowired
    private ITransaccionRepository transaccionR;


    @Override
    public void insert(Transaccion tr) {
        transaccionR.save(tr);
    }

    @Override
    public void update(Transaccion tr) {
        transaccionR.save(tr);
    }

    @Override
    public void delete(int id) {
        transaccionR.deleteById(id);
    }

    @Override
    public List<Transaccion> list() {
        return transaccionR.findAll();
    }
}
