package upc.edu.pe.llamapaytf.servicesimplements;
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
    public List<Tienda> list() {
        return tR.findAll();
    }
    @Override
    public void insert(Tienda t) {
        tR.save(t);
    }
    @Override
    public void delete(int id_tienda) {
        tR.deleteById(id_tienda);
    }
    @Override
    public Tienda listId(int id_tienda) {
        return tR.findById(id_tienda).orElse(new Tienda());
    }
    @Override
    public List<Tienda> findByName(String nombre_tienda) {
        return tR.findByName(nombre_tienda);
    }
    @Override
    public void update(Tienda t) {
        tR.save(t);
    }
}