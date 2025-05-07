package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.TipoTransaccionDTO;
import pe.edu.upc.llamapaytf.entities.TipoTransaccion;
import pe.edu.upc.llamapaytf.servicesinterfaces.ITipoTransaccionService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/tipotransacciones")
public class TipoTransaccionController {

    @Autowired
    private ITipoTransaccionService tipoTransaccionService;

    @GetMapping
    public List<TipoTransaccionDTO> listar() {
        return tipoTransaccionService.list().stream().map(t -> {
            ModelMapper m = new ModelMapper();
            return m.map(t, TipoTransaccionDTO.class);
        }).collect(Collectors.toList());
    }

    @PostMapping
    public void insertar(@RequestBody TipoTransaccionDTO dto) {
        ModelMapper m = new ModelMapper();
        TipoTransaccion t = m.map(dto, TipoTransaccion.class);
        tipoTransaccionService.insert(t);
    }

    @PutMapping
    public void modificar(@RequestBody TipoTransaccionDTO dto) {
        ModelMapper m = new ModelMapper();
        TipoTransaccion t = m.map(dto, TipoTransaccion.class);
        tipoTransaccionService.update(t);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id) {
        tipoTransaccionService.delete(id);
    }

    @GetMapping("/{id}")
    public TipoTransaccionDTO buscarPorId(@PathVariable("id") int id) {
        ModelMapper m = new ModelMapper();
        return m.map(tipoTransaccionService.listID(id), TipoTransaccionDTO.class);
    }
}
