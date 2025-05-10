package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.ObjetivoAhorroDTO;
import pe.edu.upc.llamapaytf.entities.ObjetivoAhorro;
import pe.edu.upc.llamapaytf.servicesinterfaces.IObjetivoAhorroService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/ObjetivoAhorro")
public class ObjetivoAhorroController {
    @Autowired
    private IObjetivoAhorroService oS;

    @PostMapping
    public void registrar(@RequestBody ObjetivoAhorroDTO dto) {
        ModelMapper modelMapper = new ModelMapper();
        ObjetivoAhorro oa = modelMapper.map(dto, ObjetivoAhorro.class);
        oS.insertar(oa);
    }

    @PutMapping("/actualizar")
    public void actualizar(@RequestBody ObjetivoAhorroDTO dto) {
        ModelMapper modelMapper = new ModelMapper();
        ObjetivoAhorro oa = modelMapper.map(dto, ObjetivoAhorro.class);
        oS.update(oa);
    }
    @DeleteMapping("/Eliminar/{id}")
    public void eliminar(@PathVariable int id) {
        oS.deleteById(id);
    }
    
    @GetMapping
    public List<ObjetivoAhorro> listar() {
        return oS.listar().stream().map(x->{
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x,ObjetivoAhorro.class);
        }).collect(Collectors.toList());
    }

    @GetMapping("/usuario/{userId}")
    public List<ObjetivoAhorroDTO> buscarPorUsuario(@PathVariable int userId) {
        return oS.buscarPorUsuario(userId).stream().map(x->{
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x,ObjetivoAhorroDTO.class);
        }).collect(Collectors.toList());
    }
}
