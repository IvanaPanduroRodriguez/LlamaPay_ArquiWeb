package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.llamapaytf.entities.Category;

import java.util.List;

@Repository
public interface ICategoryRepository extends JpaRepository<Category, Integer> {

    @Query(value = "Select c.name_category as Nombre_Categoria,SUM(t.monto_transaccion) as Total_Gasto \n" +
            "From transaccion t \n" +
            "inner join servicios s on t.id_service = s.id_service\n" +
            "inner join category c on s.id_category = c.id_category\n" +
            "inner join tipotransaccion tt on t.tipo_gasto_id = tt.tipo_gasto_id\n" +
            "where tt.descripcion ='Gasto'\n" +
            "group by c.name_category\n" +
            "order by Total_Gasto DESC", nativeQuery = true)
    public List<String[]> FindMontoByCategory();
}
