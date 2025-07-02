package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.SerchingUserForYearBirthdayDTO;
import pe.edu.upc.llamapaytf.dtos.UserDTO;
import pe.edu.upc.llamapaytf.dtos.UsuarioInfoDTO;
import pe.edu.upc.llamapaytf.entities.User;
import pe.edu.upc.llamapaytf.servicesinterfaces.IUserService;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService uS;

    @GetMapping


    //@PreAuthorize("hasAnyAuthority('ADMIN','TESTER')")

    public List<UserDTO> listar() {
        return uS.list().stream().map(x->{
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x,UserDTO.class);
        }).collect(Collectors.toList());
    }

    @PostMapping("/register-user")
    public void registrar(@RequestBody UserDTO us) {
        ModelMapper m = new ModelMapper();
        User u = m.map(us, User.class);
        uS.insertar(u);
    }

    @GetMapping("/{id}")


    //@PreAuthorize("hasAnyAuthority('ADMIN','TESTER')")

    public UsuarioInfoDTO buscarID(@PathVariable("id") int id) {
        ModelMapper m = new ModelMapper();
        UsuarioInfoDTO dto=m.map(uS.listID(id),UsuarioInfoDTO.class);
        return dto;
    }

    @PutMapping


    //@PreAuthorize("hasAuthority('ADMIN') || hasAuthority('CLIENTE')")

    public void modificar(@RequestBody UserDTO dto){
        ModelMapper m = new ModelMapper();
        User u = m.map(dto, User.class);
        uS.update(u);
    }

    @DeleteMapping("/{id}")

    //@PreAuthorize("hasAuthority('ADMIN')")


    public void eliminar(@PathVariable("id") int id){ //eliminar todos los atributos que yo elija
        uS.delete(id);
    }

    @GetMapping("/Searching-Date-years-users")
    //@PreAuthorize("hasAnyAuthority('TESTER') and hasAnyAuthority('ADMIN')")
    public List<SerchingUserForYearBirthdayDTO> buscarUsuariosPorFechaNacimiento(
            @RequestParam("inicio") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate inicio,
            @RequestParam("fin") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fin){
        List<String[]> fila = uS.buscarUsuariosPorFechaNacimiento(inicio, fin);
        List<SerchingUserForYearBirthdayDTO> dtoLista = new ArrayList<>();

        for (String[] columna : fila) {

            SerchingUserForYearBirthdayDTO dto = new SerchingUserForYearBirthdayDTO();
            dto.setId(Integer.parseInt(columna[0]));
            dto.setNombre(columna[1]);
            dto.setDiaNacimiento(LocalDate.parse(columna[2]));
            dtoLista.add(dto);

        }
        return dtoLista;
    }
}
