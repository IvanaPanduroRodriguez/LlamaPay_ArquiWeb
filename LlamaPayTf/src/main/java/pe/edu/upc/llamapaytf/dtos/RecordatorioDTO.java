package upc.edu.pe.llamapaytf.dtos;
import java.util.Date;

public class RecordatorioDTO {
    private int idRecordatorio;
    private String nombreRecordatorio;
    private String descripcionRecordatorio;
    private Date fechaRecordatorio;
    private int idServicio;

    public int getIdRecordatorio() {
        return idRecordatorio;
    }

    public void setIdRecordatorio(int idRecordatorio) {
        this.idRecordatorio = idRecordatorio;
    }

    public String getNombreRecordatorio() {
        return nombreRecordatorio;
    }

    public void setNombreRecordatorio(String nombreRecordatorio) {
        this.nombreRecordatorio = nombreRecordatorio;
    }

    public String getDescripcionRecordatorio() {
        return descripcionRecordatorio;
    }

    public void setDescripcionRecordatorio(String descripcionRecordatorio) {
        this.descripcionRecordatorio = descripcionRecordatorio;
    }

    public Date getFechaRecordatorio() {
        return fechaRecordatorio;
    }

    public void setFechaRecordatorio(Date fechaRecordatorio) {
        this.fechaRecordatorio = fechaRecordatorio;
    }

    public int getIdServicio() {
        return idServicio;
    }

    public void setIdServicio(int idServicio) {
        this.idServicio = idServicio;
    }
}