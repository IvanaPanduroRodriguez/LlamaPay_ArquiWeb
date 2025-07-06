package pe.edu.upc.llamapaytf.dtos;
import pe.edu.upc.llamapaytf.entities.User;

import java.util.Date;

public class RecordatorioDTO {
    private int recordatorioId;
    private String nombreRecordatorio;
    private String descripcion;
    private Date fechaVencimiento;
    private String montoRecordatorio;
    private String estadoRecordatorio;
    private User user;

    public int getRecordatorioId() {
        return recordatorioId;
    }

    public void setRecordatorioId(int recordatorioId) {
        this.recordatorioId = recordatorioId;
    }

    public String getNombreRecordatorio() {
        return nombreRecordatorio;
    }

    public void setNombreRecordatorio(String nombreRecordatorio) {
        this.nombreRecordatorio = nombreRecordatorio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getFechaVencimiento() {
        return fechaVencimiento;
    }

    public void setFechaVencimiento(Date fechaVencimiento) {
        this.fechaVencimiento = fechaVencimiento;
    }

    public String getMontoRecordatorio() {
        return montoRecordatorio;
    }

    public void setMontoRecordatorio(String montoRecordatorio) {
        this.montoRecordatorio = montoRecordatorio;
    }

    public String getEstadoRecordatorio() {
        return estadoRecordatorio;
    }

    public void setEstadoRecordatorio(String estadoRecordatorio) {
        this.estadoRecordatorio = estadoRecordatorio;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
