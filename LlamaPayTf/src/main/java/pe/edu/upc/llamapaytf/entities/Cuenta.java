package pe.edu.upc.llamapaytf.entities;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "TipoCuenta")
public class Cuenta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idCuenta;

    @ManyToOne
    @JoinColumn(name = "idUsuario", nullable = false)
    private User usuario;

    @Column(name = "nombreCuenta", nullable = false, length = 50)
    private String nombreCuenta;

    @Column(name = "numeroCuenta", nullable = false, length = 30)
    private String numeroCuenta;

    @Column(name = "tipoCuenta", nullable = false, length = 50)
    private String tipoCuenta;

    @Column(name = "saldo", nullable = false, precision = 10, scale = 2)
    private BigDecimal saldo;

    @Column(name = "moneda", nullable = false, length = 10)
    private String moneda;

    public Cuenta() {}

    public Cuenta(int idCuenta, User usuario, String nombreCuenta, String numeroCuenta, String tipoCuenta, BigDecimal saldo, String moneda) {
        this.idCuenta = idCuenta;
        this.usuario = usuario;
        this.nombreCuenta = nombreCuenta;
        this.numeroCuenta = numeroCuenta;
        this.tipoCuenta = tipoCuenta;
        this.saldo = saldo;
        this.moneda = moneda;
    }

    public int getIdCuenta() {
        return idCuenta;
    }

    public void setIdCuenta(int idCuenta) {
        this.idCuenta = idCuenta;
    }

    public User getUsuario() {
        return usuario;
    }

    public void setUsuario(User usuario) {
        this.usuario = usuario;
    }

    public String getNombreCuenta() {
        return nombreCuenta;
    }

    public void setNombreCuenta(String nombreCuenta) {
        this.nombreCuenta = nombreCuenta;
    }

    public String getNumeroCuenta() {
        return numeroCuenta;
    }

    public void setNumeroCuenta(String numeroCuenta) {
        this.numeroCuenta = numeroCuenta;
    }

    public String getTipoCuenta() {
        return tipoCuenta;
    }

    public void setTipoCuenta(String tipoCuenta) {
        this.tipoCuenta = tipoCuenta;
    }

    public BigDecimal getSaldo() {
        return saldo;
    }

    public void setSaldo(BigDecimal saldo) {
        this.saldo = saldo;
    }

    public String getMoneda() {
        return moneda;
    }

    public void setMoneda(String moneda) {
        this.moneda = moneda;
    }
}