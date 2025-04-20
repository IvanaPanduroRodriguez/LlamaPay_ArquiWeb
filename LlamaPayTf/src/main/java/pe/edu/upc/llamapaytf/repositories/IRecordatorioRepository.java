package pe.edu.upc.llamapaytf.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.llamapaytf.entities.Recordatorio;

public interface IRecordatorioRepository extends JpaRepository<Recordatorio, Integer> {
    // Queries van aca
}