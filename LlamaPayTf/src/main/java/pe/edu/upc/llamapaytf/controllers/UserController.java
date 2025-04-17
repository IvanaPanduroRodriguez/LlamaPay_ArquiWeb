package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.UserDTO;
import pe.edu.upc.llamapaytf.entities.User;
import pe.edu.upc.llamapaytf.servicesinterfaces.IUserService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuarios")
public class UserController {

    @Autowired
    private IUserService uS;

    @GetMapping
    public List<UserDTO> listar() {
        return uS.list().stream().map(x->{
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x,UserDTO.class);
        }).collect(Collectors.toList());
    }

    @PostMapping
    public void insertar(@RequestBody UserDTO dto) { //recibe al serverDTO para usar los atributos
        ModelMapper m = new ModelMapper();
        User u = m.map(dto, User.class);
        uS.insertar(u);
    }

    @GetMapping("/{id}")
    public UserDTO buscarID(@PathVariable("id") int id) { //debe tener indicado que variable estara en la ruta
        ModelMapper m = new ModelMapper();
        UserDTO dto=m.map(uS.listID(id),UserDTO.class);
        return dto;
    }

    @PutMapping
    public void modificar(@RequestBody UserDTO dto){ //modificar los datos ingresados
        ModelMapper m = new ModelMapper();
        User u = m.map(dto, User.class);
        uS.update(u);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id){ //eliminar todos los atributos que yo elija
        uS.delete(id);
    }
}
