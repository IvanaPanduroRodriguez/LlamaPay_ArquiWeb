package pe.edu.upc.llamapaytf.controllers;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.upc.llamapaytf.dtos.TiendaDTO;
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
    @GetMapping("/{id}")
    public TiendaDTO listarId(@PathVariable("id") int id) {
        ModelMapper m = new ModelMapper();
        TiendaDTO dto = m.map(tS.listarId(id), TiendaDTO.class);
        return dto;
    }
    @PutMapping
    public void modificar(@RequestBody TiendaDTO dto) {
        ModelMapper m = new ModelMapper();
        Tienda t = m.map(dto, Tienda.class);
        tS.modificar(t);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id) {
        tS.eliminar(id);
    }

}