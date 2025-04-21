package pe.edu.upc.llamapaytf.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Rol")
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Rol_id;
    @Column(name = "TipoRol",nullable = false,length = 35)
    private String TipoRol;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private User user;

    public Rol() {
    }

    public Rol(int rol_id, String tipoRol, User user) {
        Rol_id = rol_id;
        TipoRol = tipoRol;
        this.user = user;
    }

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
