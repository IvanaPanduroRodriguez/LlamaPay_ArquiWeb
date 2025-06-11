package pe.edu.upc.llamapaytf.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.llamapaytf.entities.User;
import pe.edu.upc.llamapaytf.repositories.IUserRepository;
import pe.edu.upc.llamapaytf.servicesinterfaces.IUserService;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserServiceImplement implements IUserService {
    @Autowired
    private IUserRepository uR;

    @Override
    public List<User> list() {
        return uR.findAll();
    }


    @Override
    public void insertar(User u) {
        uR.save(u);
    }


    @Override
    public User listID(int id) {
        return uR.findById(id).orElse(new User());
    }


    @Override
    public void update(User u) {
        uR.save(u);
    }


    @Override
    public void delete(int id) {
        uR.deleteById(id);
    }

    @Override
    public List<String[]> buscarUsuariosPorFechaNacimiento(LocalDate startDate, LocalDate endDate) {
        return uR.buscarUsuariosPorFechaNacimiento(startDate, endDate);
    }

}
