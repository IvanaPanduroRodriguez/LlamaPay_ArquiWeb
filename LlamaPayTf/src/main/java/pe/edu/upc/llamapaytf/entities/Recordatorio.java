package pe.edu.upc.llamapaytf.entities;
import jakarta.persistence.*;

@Entity
@Table(name = "Recordatorio")
public class Recordatorio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Recordatorio_id;
    @Column(name = "nombreRecordatorio", nullable = false, length = 30)
    private String nombreRecordatorio;
    @Column(name = "Descripcion", nullable = false, length = 50)
    private String Descripcion;
    @Column(name = "Fecha_Vencimiento", nullable = false)
    private Date Fecha_Vencimiento;
    @Column(name = "Monto_recordatorio", nullable = false)
    private String Monto_recordatorio;
    @Column(name = "Estado_Recordatorio", nullable = false)
    private String Estado_Recordatorio;
    @OnetoMany
    @JoinColumn(name = "Usuario_id")
    private Usuario Usuario_id;
    public Recordatorio() {
    }
    public Recordatorio(int Recordatorio_id, String nombreRecordatorio, String Descripcion, String Fecha_Vencimiento, String Monto_recordatorio, String Estado_Recordatorio, Usuario Usuario_id) {
        this.idRecordatorio = Recordatorio_id;
        this.nombreRecordatorio = nombreRecordatorio;
        this.Descripcion = Descripcion;
        this.Fecha_Vencimiento = Fecha_Vencimiento;
        this.Monto_recordatorio = Monto_recordatorio;
        this.Estado_Recordatorio = Estado_Recordatorio;
        this.Usuario_id = Usuario_id;
    }
    public int getRecordatorio_id() {
        return Recordatorio_id;
    }
    public void setRecordatorio_id(int Recordatorio_id) {
        this.Recordatorio_id = Recordatorio_id;
    }
    public String getNombreRecordatorio() {
        return nombreRecordatorio;
    }
    public void setNombreRecordatorio(String nombreRecordatorio) {
        this.nombreRecordatorio = nombreRecordatorio;
    }
    public String getDescripcion() {
        return Descripcion;
    }
    public void setDescripcion(String Descripcion) {
        this.Descripcion = Descripcion;
    }
    public String getFecha_Vencimiento() {
        return Fecha_Vencimiento;
    }
    public void setFecha_Vencimiento(String Fecha_Vencimiento) {
        this.Fecha_Vencimiento = Fecha_Vencimiento;
    }
    public String getMonto_recordatorio() {
        return Monto_recordatorio;
    }
    public void setMonto_recordatorio(String Monto_recordatorio) {
        this.Monto_recordatorio = Monto_recordatorio;
    }
    public String getEstado_Recordatorio() {
        return Estado_Recordatorio;
    }
    public void setEstado_Recordatorio(String Estado_Recordatorio) {
        this.Estado_Recordatorio = Estado_Recordatorio;
    }