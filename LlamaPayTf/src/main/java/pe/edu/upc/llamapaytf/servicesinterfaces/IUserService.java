package pe.edu.upc.llamapaytf.servicesinterfaces;

import pe.edu.upc.llamapaytf.entities.*;

import java.time.LocalDate;
import java.util.List;

public interface IUserService {
    public List<User> list();
    public void insertar (User u);
    public User listID(int id);
    public void update(User u);
    public void delete(int id);
    public List<String[]> buscarUsuariosPorFechaNacimiento(LocalDate startDate, LocalDate endDate);

}
