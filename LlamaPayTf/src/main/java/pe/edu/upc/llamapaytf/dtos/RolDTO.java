package pe.edu.upc.llamapaytf.dtos;

import pe.edu.upc.llamapaytf.entities.User;

public class RolDTO {
    private int rolId;
    private String tipoRol;
    private User user;

    public int getRolId() {
        return rolId;
    }

    public void setRolId(int rolId) {
        this.rolId = rolId;
    }

    public String getTipoRol() {
        return tipoRol;
    }

    public void setTipoRol(String tipoRol) {
        this.tipoRol = tipoRol;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
