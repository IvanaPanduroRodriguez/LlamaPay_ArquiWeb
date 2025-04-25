package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.MetodoPagoDTO;
import pe.edu.upc.llamapaytf.entities.MetodoPago;
import pe.edu.upc.llamapaytf.servicesinterfaces.IMetodoPagoService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/metodospagos")
public class MetodoPagoController {
    @Autowired
    private IMetodoPagoService mpS;

    @GetMapping
    public List<MetodoPagoDTO> listar() {
        return mpS.list().stream().map(x->{
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x, MetodoPagoDTO.class);
        }).collect(Collectors.toList());
    }

    @PostMapping
    public void insertar(@RequestBody MetodoPagoDTO dto) {
        ModelMapper m = new ModelMapper();
        MetodoPago mp = m.map(dto, MetodoPago.class);
        mpS.insertar(mp);
    }

    @GetMapping("/{id}")
    public MetodoPagoDTO buscarID(@PathVariable("id") int id) {
        ModelMapper m = new ModelMapper();
        MetodoPagoDTO dto=m.map(mpS.listId(id),MetodoPagoDTO.class);
        return dto;
    }

    @PutMapping
    public void modificar(@RequestBody MetodoPagoDTO dto){
        ModelMapper m = new ModelMapper();
        MetodoPago mp = m.map(dto, MetodoPago.class);
        mpS.update(mp);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id){
        mpS.delete(id);
    }

}
