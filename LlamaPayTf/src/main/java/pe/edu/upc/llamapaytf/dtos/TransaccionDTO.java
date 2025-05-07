package pe.edu.upc.llamapaytf.dtos;

import pe.edu.upc.llamapaytf.entities.MetodoPago;
import pe.edu.upc.llamapaytf.entities.Servicio;
import pe.edu.upc.llamapaytf.entities.TipoCuenta;
import pe.edu.upc.llamapaytf.entities.TipoTransaccion;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class TransaccionDTO {
    private int transaccionId;
    private LocalDateTime fechaTransaccion;
    private BigDecimal monto;
    private String descripcion;

    private TipoCuenta tipoCuenta;
    private MetodoPago metodoPago;
    private Servicio servicio;
    private TipoTransaccion tipoTransaccionObj;

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
