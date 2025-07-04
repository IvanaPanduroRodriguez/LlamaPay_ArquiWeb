package pe.edu.upc.llamapaytf.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.llamapaytf.entities.*;
import pe.edu.upc.llamapaytf.exceptions.ResourceNotFoundException;
import pe.edu.upc.llamapaytf.repositories.*;
import pe.edu.upc.llamapaytf.servicesinterfaces.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImplement implements IUserService {
    @Autowired
    private IUserRepository uR;
    @Autowired
    private ITipoCuentaRepository tR;

    @Autowired
    private IProductoRepository pR;

    @Autowired
    private IObjetivoAhorroRepository oR;

    @Autowired
    private IRecordatorioRepository rR;

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
        Optional<User> userOpt = uR.findById(id);
        if (userOpt.isPresent()) {
            User user = userOpt.get();

            // Desvincular en TipoCuenta
            List<TipoCuenta> cuentas = tR.findByUserUserId(id);
            for (TipoCuenta cuenta : cuentas) {
                cuenta.setUser(null);
            }
            tR.saveAll(cuentas);

            // Desvincular en Producto
            List<Producto> productos = pR.findByUserUserId(id);
            for (Producto producto : productos) {
                producto.setUser(null);
            }
            pR.saveAll(productos);

            // Desvincular en ObjetivoAhorro
            List<ObjetivoAhorro> objetivos = oR.findByUserUserId(id);
            for (ObjetivoAhorro obj : objetivos) {
                obj.setUser(null);
            }
            oR.saveAll(objetivos);

            // Desvincular en Recordatorio
            List<Recordatorio> recordatorios = rR.findByUserUserId(id);
            for (Recordatorio rec : recordatorios) {
                rec.setUser(null);
            }
            rR.saveAll(recordatorios);

            // Finalmente, elimina al usuario
            uR.deleteById(id);
        } else {
            throw new ResourceNotFoundException("No se encontró el usuario con ID: " + id);
        }
    }

    @Override
    public List<String[]> buscarUsuariosPorFechaNacimiento(LocalDate startDate, LocalDate endDate) {
        return uR.buscarUsuariosPorFechaNacimiento(startDate, endDate);
    }

}
