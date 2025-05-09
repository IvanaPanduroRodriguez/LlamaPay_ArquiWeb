package pe.edu.upc.llamapaytf.dtos;

import java.math.BigDecimal;
import java.time.LocalDate;

public class TransaccionInfoDTO {
    private String descripcion;
    private BigDecimal monto;
    private LocalDate fechaTransaccion;

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public BigDecimal getMonto() {
        return monto;
    }

    public void setMonto(BigDecimal monto) {
        this.monto = monto;
    }

    public LocalDate getFechaTransaccion() {
        return fechaTransaccion;
    }

    public void setFechaTransaccion(LocalDate fechaTransaccion) {
        this.fechaTransaccion = fechaTransaccion;
    }
}
