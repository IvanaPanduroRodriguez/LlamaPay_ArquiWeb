package pe.edu.upc.llamapaytf.servicesinterfaces;

import pe.edu.upc.llamapaytf.entities.Servicio;

import java.util.List;

public interface IServicioService {
    public List<Servicio> list();
    public void insertar (Servicio servicio);
    public List <Servicio> buscar(String n); //nombre de compañia
}
