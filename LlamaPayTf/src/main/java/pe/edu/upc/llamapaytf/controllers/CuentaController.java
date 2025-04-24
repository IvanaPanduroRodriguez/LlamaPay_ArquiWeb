package pe.edu.upc.llamapaytf.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.entities.Cuenta;
import pe.edu.upc.llamapaytf.servicesinterfaces.ICuentaService;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/cuentas")
public class CuentaController {

    @Autowired
    private ICuentaService cuentaService;

    @GetMapping
    public List<Cuenta> listar() {
        return cuentaService.listar();
    }

    @PostMapping
    public void insertar(@RequestBody Cuenta cuenta) {
        cuentaService.insertar(cuenta);
    }

    @PutMapping
    public void modificar(@RequestBody Cuenta cuenta) {
        cuentaService.modificar(cuenta);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id) {
        cuentaService.eliminar(id);
    }

    @GetMapping("/usuario/{usuarioId}")
    public List<Cuenta> listarPorUsuario(@PathVariable("usuarioId") int usuarioId) {
        return cuentaService.listarPorUsuario(usuarioId);
    }

    @GetMapping("/usuario/{usuarioId}/saldo")
    public BigDecimal obtenerSaldoTotal(@PathVariable("usuarioId") int usuarioId) {
        return cuentaService.obtenerSaldoTotal(usuarioId);
    }

}
