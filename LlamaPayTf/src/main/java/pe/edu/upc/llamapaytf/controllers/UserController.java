package pe.edu.upc.llamapaytf.controllers;

import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.SerchingUserForYearBirthdayDTO;
import pe.edu.upc.llamapaytf.dtos.UserDTO;
import pe.edu.upc.llamapaytf.dtos.UsuarioInfoDTO;
import pe.edu.upc.llamapaytf.entities.User;
import pe.edu.upc.llamapaytf.exceptions.RequestBodyException;
import pe.edu.upc.llamapaytf.servicesinterfaces.IUserService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private IUserService uS;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping
    //@PreAuthorize("hasAnyAuthority('ADMIN','TESTER')")
    public List<UsuarioInfoDTO> listar() {
        return uS.list().stream().map(x->{
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x,UsuarioInfoDTO.class);
        }).collect(Collectors.toList());
    }

    @PostMapping("/register-user")
    public ResponseEntity<String> insertar(@Valid @RequestBody UserDTO dto) {
        logger.info("Registrando nuevo usuario");
        if (dto.getUsername() == null || dto.getPassword() == null) {
            throw new RequestBodyException("El nombre de usuario y la contraseña son obligatorios.");
        }
        ModelMapper m = new ModelMapper();
        User u = m.map(dto, User.class);
        String encodedPassword = passwordEncoder.encode(u.getPassword());
        u.setPassword(encodedPassword);

        uS.insertar(u);
        return new ResponseEntity<>("Usuario registrado correctamente.", HttpStatus.CREATED);
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
