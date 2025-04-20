package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.upc.llamapaytf.dtos.RecordatorioDTO;
import pe.edu.upc.llamapaytf.servicesinterfaces.IRecordatorioService;
import pe.edu.upc.llamapaytf.entities.Recordatorio;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/recordatorios")
public class RecordatorioController {
    @Autowired
    private IRecordatorioService rS;

    @GetMapping
    public List<RecordatorioDTO> listar() {
        return rS.list().stream().map(x -> {
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x, RecordatorioDTO.class);
        }).collect(Collectors.toList());
    }
}
  @PostMapping
    public void insertar(@RequestBody RecordatorioDTO dto) {
        ModelMapper m = new ModelMapper();
        Recordatorio re = m.map(dto, Recordatorio.class);
        rS.insert(re);
    }
   @GetMapping("/{id}")
   public RecordatorioDTO buscarPorId(@PathVariable("id") int id) {
       ModelMapper m = new ModelMapper();
       RecordatorioDTO dto = m.map(rS.listId(id), RecordatorioDTO.class);
       return dto;
   }
   @PutMapping
    public void modificar (@RequestBody RecordatorioDTO dto) {
        ModelMapper m = new ModelMapper();
        Recordatorio re = m.map(dto, Recordatorio.class);
        rS.update(re);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id) {
        rS.delete(id);
    }

