package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.ServicioDTO;
import pe.edu.upc.llamapaytf.entities.Servicio;
import pe.edu.upc.llamapaytf.servicesinterfaces.IServicioService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/servicios")
public class ServicioController {
    @Autowired
    private IServicioService sS;

    @GetMapping
    public List<ServicioDTO> listar() {
        return sS.list().stream().map(x->{
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x, ServicioDTO.class);
        }).collect(Collectors.toList());
    }

    @PostMapping("/registra")
    public void insertar (@RequestBody ServicioDTO dto) {
        ModelMapper m = new ModelMapper();
        Servicio s = m.map(dto, Servicio.class);
        sS.insertar(s);
    }

    @GetMapping("/busquedasPorCompania")
    public List<ServicioDTO>buscarCompania(@RequestParam String nameCompany){ //buscar servicio por compañia
        return sS.buscar(nameCompany).stream().map(z->{
            ModelMapper m = new ModelMapper();
            return m.map(z, ServicioDTO.class);
        }).collect(Collectors.toList());
    }

    @PutMapping("/actualizar")
    public void modificar(@RequestBody ServicioDTO dto){ //modificar los datos ingresados
        ModelMapper m = new ModelMapper();
        Servicio s = m.map(dto, Servicio.class);
        sS.update(s);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id){ //eliminar todos los atributos que yo elija
        sS.delete(id);
    }
}
