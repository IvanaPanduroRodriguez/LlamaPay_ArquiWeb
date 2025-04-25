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

    //@ManyToOne
    //@JoinColumn(name = "tipocuenta_id")
    //private TipoCuenta tipoCuenta;

    //@ManyToOne
    //@JoinColumn(name = "metodopago_id")
    //private MetodoPago metodoPago;

    @ManyToOne
    @JoinColumn(name = "servicio_id")
    private Servicio servicio;

    @ManyToOne
    @JoinColumn(name = "tipotransaccion_id")
    private TipoTransaccion tipotransaccion;
}
