package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.llamapaytf.entities.ObjetivoAhorro;

import java.util.List;

public interface IObjetivoAhorroRepository extends JpaRepository<ObjetivoAhorro,Integer> {
    List<ObjetivoAhorro> findByUser_IdUser(int userId);
}
