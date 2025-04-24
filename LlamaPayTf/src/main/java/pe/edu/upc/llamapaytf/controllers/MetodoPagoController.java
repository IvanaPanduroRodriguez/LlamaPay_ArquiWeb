package pe.edu.upc.llamapaytf.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.entities.MetodoPago;
import pe.edu.upc.llamapaytf.servicesinterfaces.IMetodoPagoService;

import java.util.List;

@RestController
@RequestMapping("/metodospago")
public class MetodoPagoController {

    @Autowired
    private IMetodoPagoService metodoPagoService;

    @PostMapping
    public void registrar(@RequestBody MetodoPago metodoPago) {
        metodoPagoService.registrar(metodoPago);
    }

    @GetMapping
    public List<MetodoPago> listar() {
        return metodoPagoService.listar();
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id) {
        metodoPagoService.eliminar(id);
    }

    @GetMapping("/{id}")
    public MetodoPago buscarPorId(@PathVariable("id") int id) {
        return metodoPagoService.buscarPorId(id);
    }

    @GetMapping("/buscar")
    public List<MetodoPago> buscarPorNombre(@RequestParam("nombre") String nombre) {
        return metodoPagoService.buscarPorNombre(nombre);
    }

    @PutMapping
    public void actualizar(@RequestBody MetodoPago metodoPago) {
        metodoPagoService.registrar(metodoPago);
    }
}

