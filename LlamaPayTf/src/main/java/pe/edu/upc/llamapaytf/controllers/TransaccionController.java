package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.TransaccionDTO;
import pe.edu.upc.llamapaytf.entities.Transaccion;
import pe.edu.upc.llamapaytf.servicesinterfaces.ITransaccionService;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/transacciones")
public class TransaccionController {

    @Autowired
    private ITransaccionService transaccionService;

    @GetMapping
    public List<TransaccionDTO> listar() {
        return transaccionService.list().stream().map(t -> {
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(t, TransaccionDTO.class);
        }).collect(Collectors.toList());
    }

    @PostMapping
    public void insertar(@RequestBody TransaccionDTO dto) {
        ModelMapper modelMapper = new ModelMapper();
        Transaccion t = modelMapper.map(dto, Transaccion.class);
        transaccionService.insert(t);
    }

    @GetMapping("/{id}")
    public TransaccionDTO buscarID(@PathVariable("id") int id) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(transaccionService.listID(id), TransaccionDTO.class);
    }

    @PutMapping
    public void modificar(@RequestBody TransaccionDTO dto) {
        ModelMapper modelMapper = new ModelMapper();
        Transaccion t = modelMapper.map(dto, Transaccion.class);
        transaccionService.update(t);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id) {
        transaccionService.delete(id);
    }

    @GetMapping("/monto/{monto}/mes/{mes}")
    public List<TransaccionDTO> buscarPorMontoMayorYMes(@PathVariable("monto") BigDecimal monto,
                                                        @PathVariable("mes") int mes) {
        return transaccionService.findByMontoMayorAndMes(monto, mes).stream().map(t -> {
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(t, TransaccionDTO.class);
        }).collect(Collectors.toList());
    }

    @GetMapping("/descripcion/{descripcion}/mes/{mes}")
    public List<TransaccionDTO> buscarPorDescripcionYMes(@PathVariable("descripcion") String descripcion,
                                                         @PathVariable("mes") int mes) {
        return transaccionService.findByDescripcionAndMes(descripcion, mes).stream().map(t -> {
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(t, TransaccionDTO.class);
        }).collect(Collectors.toList());
    }
}
