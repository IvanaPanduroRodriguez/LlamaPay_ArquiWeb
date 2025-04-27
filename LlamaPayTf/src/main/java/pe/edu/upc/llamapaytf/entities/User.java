package pe.edu.upc.llamapaytf.entities;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.Date;
@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUser;

    @Column(name = "nameUser", nullable = false, length = 30)
    private String nameUser;
    @Column(name = "lastnameUser", nullable = false, length = 30)
    private String lastnameUser;
    @Column(name = "emailUser", nullable = false, length = 50)
    private String emailUser;
    @Column(name = "passwordUser", nullable = false, length = 50)
    private String passwordUser;
    @Column(name = "birthdayUser", nullable = false)
    private Date birthdayUser;
    @Column(name = "registrationDateUser", nullable = false)
    private Timestamp registrationDateUser;

    public User() {
    }

    public User(int idUser, String nameUser, String lastnameUser, String emailUser, String passwordUser, Date birthdayUser, Timestamp registrationDateUser) {
        this.idUser = idUser;
        this.nameUser = nameUser;
        this.lastnameUser = lastnameUser;
        this.emailUser = emailUser;
        this.passwordUser = passwordUser;
        this.birthdayUser = birthdayUser;
        this.registrationDateUser = registrationDateUser;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }

    public String getLastnameUser() {
        return lastnameUser;
    }

    public void setLastnameUser(String lastnameUser) {
        this.lastnameUser = lastnameUser;
    }

    public String getEmailUser() {
        return emailUser;
    }

    public void setEmailUser(String emailUser) {
        this.emailUser = emailUser;
    }

    public String getPasswordUser() {
        return passwordUser;
    }

    public void setPasswordUser(String passwordUser) {
        this.passwordUser = passwordUser;
    }

    public Date getBirthdayUser() {
        return birthdayUser;
    }

    public void setBirthdayUser(Date birthdayUser) {
        this.birthdayUser = birthdayUser;
    }

    public Timestamp getRegistrationDateUser() {
        return registrationDateUser;
    }

    public void setRegistrationDateUser(Timestamp registrationDateUser) {
        this.registrationDateUser = registrationDateUser;
    }
}


