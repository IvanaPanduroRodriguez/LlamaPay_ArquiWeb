package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.llamapaytf.entities.ObjetivoAhorro;

import java.util.List;

@Repository
public interface IObjetivoAhorroRepository extends JpaRepository<ObjetivoAhorro,Integer> {
    List<ObjetivoAhorro> findByUser_IdUser(int userId);
}
