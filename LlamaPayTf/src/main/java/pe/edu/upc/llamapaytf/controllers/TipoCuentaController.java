package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.TipoCuentaDTO;
import pe.edu.upc.llamapaytf.entities.TipoCuenta;
import pe.edu.upc.llamapaytf.servicesinterfaces.ITipoCuentaService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/tiposcuentas")
public class TipoCuentaController {
    @Autowired
    private ITipoCuentaService tcS;

    @GetMapping
    @PreAuthorize("hasAnyAuthority('ADMIN','TESTER')")
    public List<TipoCuentaDTO> listar() {
        return tcS.list().stream().map(x -> {
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x, TipoCuentaDTO.class);
        }).collect(Collectors.toList());
    }

    @PostMapping("registrar")
    @PreAuthorize("hasAnyAuthority('ADMIN', 'CLIENTE')")
    public void registrar(@RequestBody TipoCuentaDTO tc) {
        ModelMapper modelMapper = new ModelMapper();
        TipoCuenta tcs = modelMapper.map(tc, TipoCuenta.class);
        tcS.insertar(tcs);
    }

    @DeleteMapping("/eliminar/{id}")
    @PreAuthorize("hasAnyAuthority('ADMIN', 'CLIENTE')")
    public void eliminar(@PathVariable("id") int id) {
        tcS.delete(id);
    }

    @PutMapping("/actualizar")
    @PreAuthorize("hasAnyAuthority('ADMIN', 'CLIENTE')")
    public void actualizar(@RequestBody TipoCuentaDTO tcd) {
        ModelMapper modelMapper = new ModelMapper();
        TipoCuenta tc = modelMapper.map(tcd, TipoCuenta.class);
        tcS.update(tc);
    }

    @GetMapping("/usuario/{userId}")
    @PreAuthorize("hasAnyAuthority('ADMIN','TESTER')")
    public List<TipoCuentaDTO> obtenerTiposCuentasPorUsuario(@PathVariable int userId) {
        return tcS.findTipoCuentaByUserId(userId).stream().map(x -> {
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x, TipoCuentaDTO.class);
        }).collect(Collectors.toList());
    }

    @GetMapping("/buscar")
    @PreAuthorize("hasAnyAuthority('ADMIN','TESTER')")
    public List<TipoCuentaDTO> buscarPorNombre(@RequestParam("nombre") String nombre) {
        List<TipoCuenta> lista = tcS.buscarPorNombre(nombre);
        return lista.stream().map(tc -> {
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(tc, TipoCuentaDTO.class);
        }).collect(Collectors.toList());
    }
}
