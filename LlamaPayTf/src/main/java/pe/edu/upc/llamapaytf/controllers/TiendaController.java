package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.TiendaDTO;
import pe.edu.upc.llamapaytf.entities.Tienda;
import pe.edu.upc.llamapaytf.servicesinterfaces.ITiendaService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/tiendas")
public class TiendaController {
    @Autowired
    private ITiendaService tS;

    @GetMapping
    public List<TiendaDTO> listar() {
        return tS.list().stream().map(x->{
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x, TiendaDTO.class);
        }).collect(Collectors.toList());
    }

    @PostMapping
    public void insertar(@RequestBody TiendaDTO dto) {
        ModelMapper m = new ModelMapper();
        Tienda t = m.map(dto, Tienda.class);
        tS.insertar(t);
    }

    @PutMapping
    public void modificar(@RequestBody TiendaDTO dto) {
        ModelMapper m = new ModelMapper();
        Tienda t = m.map(dto, Tienda.class);
        tS.update(t);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id) {
        tS.delete(id);
    }

    @GetMapping("/{id}")
    public TiendaDTO buscarID(@PathVariable("id") int id) { //debe tener indicado que variable estara en la ruta
        ModelMapper m = new ModelMapper();
        TiendaDTO dto=m.map(tS.listarId(id),TiendaDTO.class);
        return dto;
    }
    @GetMapping("/nombre/{tienda}")
    public List<TiendaDTO> buscarTiendaNombre(@PathVariable("tienda") String tienda) {
        return tS.buscartiendanombre(tienda).stream().map(x->{
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x, TiendaDTO.class);
        }).collect(Collectors.toList());
    }
}
