package pe.edu.upc.llamapaytf.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
@Table(name = "Rol", uniqueConstraints = {@UniqueConstraint(columnNames = {"userId","TipoRol"})})
=======
@Table(name = "Rol", uniqueConstraints = {@UniqueConstraint(columnNames = {"usuario_id","rol"})})
>>>>>>> parent of f1f6c44 (Merge branch 'Carlos' into Ivana)
=======
@Table(name = "Rol", uniqueConstraints = {@UniqueConstraint(columnNames = {"usuario_id","rol"})})
>>>>>>> parent of 7e6e1fc (Ajustes finales en el backend, rol, user. objetivo ahorro y metodo pago)
=======
@Table(name = "Rol", uniqueConstraints = {@UniqueConstraint(columnNames = {"userId","rol"})})
>>>>>>> parent of 7ec60d4 (Merge branch 'Jhon_Backend' into Ivana)
public class Rol implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Rol_id;
    @Column(name = "TipoRol",nullable = false,length = 35)
    private String TipoRol;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    @JsonBackReference
    private User user;

    public int getRol_id() {
        return Rol_id;
    }

    public void setRol_id(int rol_id) {
        Rol_id = rol_id;
    }

    public String getTipoRol() {
        return TipoRol;
    }

    public void setTipoRol(String tipoRol) {
        TipoRol = tipoRol;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
