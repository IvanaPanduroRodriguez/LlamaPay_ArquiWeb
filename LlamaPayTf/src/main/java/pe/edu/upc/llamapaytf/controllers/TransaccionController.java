package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.TipoCuentaDTO;
import pe.edu.upc.llamapaytf.dtos.TransaccionDTO;
import pe.edu.upc.llamapaytf.entities.TipoCuenta;
import pe.edu.upc.llamapaytf.entities.Transaccion;
import pe.edu.upc.llamapaytf.servicesinterfaces.ITransaccionService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/transacciones")
public class TransaccionController {
    @Autowired
    private ITransaccionService transaccionS;

    @GetMapping
    public List<TransaccionDTO> listar() {
        return transaccionS.list().stream().map(x -> {
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x, TransaccionDTO.class);
        }).collect(Collectors.toList());
    }

    @PostMapping("registrar")
    public void registrar(@RequestBody TransaccionDTO tr) {
        ModelMapper modelMapper = new ModelMapper();
        Transaccion trs = modelMapper.map(tr, Transaccion.class);
        transaccionS.insert(trs);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminar(@PathVariable("id") int id) {
        transaccionS.delete(id);
    }

    @PutMapping("/actualizar")
    public void actualizar(@RequestBody TransaccionDTO trd) {
        ModelMapper modelMapper = new ModelMapper();
        Transaccion tr = modelMapper.map(trd, Transaccion.class);
        transaccionS.update(tr);
    }
}
