package pe.edu.upc.llamapaytf.servicesinterfaces;

import pe.edu.upc.llamapaytf.entities.ObjetivoAhorro;

import java.util.List;

public interface IObjetivoAhorroService {
    void insertar(ObjetivoAhorro objetivoAhorro);
    void update(ObjetivoAhorro objetivoAhorro);
    void deleteById(int id);
    public List<ObjetivoAhorro> listar();
    List<ObjetivoAhorro> buscarPorUsuario(int userId); // <- NUEVO
}
