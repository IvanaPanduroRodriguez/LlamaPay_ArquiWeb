package pe.edu.upc.llamapaytf.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.llamapaytf.entities.Tienda;
import pe.edu.upc.llamapaytf.repositories.ITiendaRepository;
import pe.edu.upc.llamapaytf.servicesinterfaces.ITiendaService;

import java.util.List;

@Service
public class TiendaServiceImplement implements ITiendaService {
    @Autowired
    private ITiendaRepository tR;

    @Override
    public void insertar(Tienda t) {
        tR.save(t);
    }

    @Override
    public List<Tienda> list() {
        return tR.findAll();
    }

    @Override
    public void update(Tienda t) {
        tR.save(t);
    }

    @Override
    public void delete(int id) {
        tR.deleteById(id);
    }
}
