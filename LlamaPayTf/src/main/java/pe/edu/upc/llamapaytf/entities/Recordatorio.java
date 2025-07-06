package pe.edu.upc.llamapaytf.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Recordatorio")
public class Recordatorio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int recordatorioId;
    @Column(name = "nombreRecordatorio", nullable = false, length = 30)
    private String nombreRecordatorio;
    @Column(name = "Descripcion", nullable = false, length = 50)
    private String descripcion;
    @Column(name = "Fecha_Vencimiento", nullable = false)
    private Date fechaVencimiento;
    @Column(name = "Monto_recordatorio", nullable = false)
    private String montoRecordatorio;
    @Column(name = "Estado_Recordatorio", nullable = false)
    private String estadoRecordatorio;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Recordatorio() {
    }

    public Recordatorio(int recordatorioId, String nombreRecordatorio, String descripcion, Date fechaVencimiento, String montoRecordatorio, String estadoRecordatorio, User user) {
        this.recordatorioId = recordatorioId;
        this.nombreRecordatorio = nombreRecordatorio;
        this.descripcion = descripcion;
        this.fechaVencimiento = fechaVencimiento;
        this.montoRecordatorio = montoRecordatorio;
        this.estadoRecordatorio = estadoRecordatorio;
        this.user = user;
    }

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
