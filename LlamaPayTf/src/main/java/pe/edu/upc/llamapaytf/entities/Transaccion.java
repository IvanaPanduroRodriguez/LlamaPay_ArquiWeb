package pe.edu.upc.llamapaytf.entities;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "Transaccion")
public class Transaccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int transaccionId;

    @Column(name = "FechaTransaccion", nullable = false)
    private LocalDateTime fechaTransaccion;

    @Column(name = "Monto", nullable = false)
    private BigDecimal monto;

    @Column(name = "TipoTransaccion", nullable = false, length = 50)
    private String tipoTransaccion;

    @Column(name = "Descripcion", nullable = false, length = 255)
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "tipocuenta_id")
    private TipoCuenta tipoCuenta;

    @ManyToOne
    @JoinColumn(name = "metodopago_id")
    private MetodoPago metodoPago;

    @ManyToOne
    @JoinColumn(name = "servicio_id")
    private Servicio servicio;

    @ManyToOne
    @JoinColumn(name = "tipotransaccion_id")
    private TipoTransaccion tipoTransaccionObj;

    // Constructor vacío
    public Transaccion() {
    }

    // Constructor completo
    public Transaccion(int transaccionId, LocalDateTime fechaTransaccion, BigDecimal monto, String tipoTransaccion,
                       String descripcion, TipoCuenta tipoCuenta, MetodoPago metodoPago, Servicio servicio,
                       TipoTransaccion tipoTransaccionObj) {
        this.transaccionId = transaccionId;
        this.fechaTransaccion = fechaTransaccion;
        this.monto = monto;
        this.tipoTransaccion = tipoTransaccion;
        this.descripcion = descripcion;
        this.tipoCuenta = tipoCuenta;
        this.metodoPago = metodoPago;
        this.servicio = servicio;
        this.tipoTransaccionObj = tipoTransaccionObj;
    }

    // Getters y Setters
    public int getTransaccionId() {
        return transaccionId;
    }

    public void setTransaccionId(int transaccionId) {
        this.transaccionId = transaccionId;
    }

    public LocalDateTime getFechaTransaccion() {
        return fechaTransaccion;
    }

    public void setFechaTransaccion(LocalDateTime fechaTransaccion) {
        this.fechaTransaccion = fechaTransaccion;
    }

    public BigDecimal getMonto() {
        return monto;
    }

    public void setMonto(BigDecimal monto) {
        this.monto = monto;
    }

    public String getTipoTransaccion() {
        return tipoTransaccion;
    }

    public void setTipoTransaccion(String tipoTransaccion) {
        this.tipoTransaccion = tipoTransaccion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public TipoCuenta getTipoCuenta() {
        return tipoCuenta;
    }

    public void setTipoCuenta(TipoCuenta tipoCuenta) {
        this.tipoCuenta = tipoCuenta;
    }

    public MetodoPago getMetodoPago() {
        return metodoPago;
    }

    public void setMetodoPago(MetodoPago metodoPago) {
        this.metodoPago = metodoPago;
    }

    public Servicio getServicio() {
        return servicio;
    }

    public void setServicio(Servicio servicio) {
        this.servicio = servicio;
    }

    public TipoTransaccion getTipoTransaccionObj() {
        return tipoTransaccionObj;
    }

    public void setTipoTransaccionObj(TipoTransaccion tipoTransaccionObj) {
        this.tipoTransaccionObj = tipoTransaccionObj;
    }
}
