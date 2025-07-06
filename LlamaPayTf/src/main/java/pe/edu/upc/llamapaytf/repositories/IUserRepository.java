package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pe.edu.upc.llamapaytf.entities.*;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IUserRepository extends JpaRepository<User, Integer> {
    public User findOneByUsername(String username);


    @Query("select count(u.username) from User u where u.username =:username")
    public int buscarUsername(@Param("username") String nombre);


    @Transactional
    @Modifying
    @Query(value = "insert into roles (TipoRol, userId) VALUES (:TipoRol, :userId)", nativeQuery = true)
    public void insRol(@Param("rol") String authority, @Param("userId") Long userId);

    @Query(value = "SELECT u.user_id AS userId, \n" +
            "       u.username AS Nombre, \n" +
            "       TO_CHAR(u.birthday_user, 'YYYY-MM-DD') AS DiaNacimiento \n" + // espacio agregado aquí
            "FROM users u \n" +
            "WHERE u.enabled = true \n" +
            "  AND DATE(u.birthday_user) BETWEEN :startDate AND :endDate \n" +
            "ORDER BY u.birthday_user DESC",
            nativeQuery = true)
    public List<String[]> buscarUsuariosPorFechaNacimiento(@Param("startDate") LocalDate startDate,
                                                    @Param("endDate") LocalDate endDate);

}
