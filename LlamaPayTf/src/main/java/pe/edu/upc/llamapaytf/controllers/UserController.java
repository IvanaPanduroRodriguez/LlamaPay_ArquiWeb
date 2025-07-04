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
import pe.edu.upc.llamapaytf.entities.*;
import pe.edu.upc.llamapaytf.exceptions.RequestBodyException;
import pe.edu.upc.llamapaytf.exceptions.ResourceNotFoundException;
import pe.edu.upc.llamapaytf.repositories.IObjetivoAhorroRepository;
import pe.edu.upc.llamapaytf.repositories.IProductoRepository;
import pe.edu.upc.llamapaytf.repositories.IRecordatorioRepository;
import pe.edu.upc.llamapaytf.repositories.ITipoCuentaRepository;
import pe.edu.upc.llamapaytf.servicesinterfaces.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
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

    public List<UserDTO> listar() {
        return uS.list().stream().map(x->{
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x,UserDTO.class);
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

        // Asignar automáticamente el rol CLIENTE
        Rol rolCliente = new Rol();
        rolCliente.setTipoRol("CLIENTE");
        rolCliente.setUser(u);  // relación bidireccional
        u.setRoles(List.of(rolCliente));  // asociar rol

        uS.insertar(u);
        return new ResponseEntity<>("Usuario registrado correctamente.", HttpStatus.CREATED);
    }

    @GetMapping("/{id}")


    //@PreAuthorize("hasAnyAuthority('ADMIN','TESTER')")

    public UserDTO buscarID(@PathVariable("id") int id) {
        ModelMapper m = new ModelMapper();
        UserDTO dto=m.map(uS.listID(id),UserDTO.class);
        return dto;
    }

    @PutMapping
    public void modificar(@RequestBody UserDTO dto) {
        // Paso 1: Buscar el usuario actual por ID
        User existingUser = uS.listID(dto.getUserId());
        if (existingUser == null) {
            throw new RuntimeException("Usuario no encontrado.");
        }

        // Paso 2: Actualizar los campos que desees
        existingUser.setNameUser(dto.getNameUser());
        existingUser.setLastnameUser(dto.getLastnameUser());
        existingUser.setEmailUser(dto.getEmailUser());
        existingUser.setBirthdayUser(dto.getBirthdayUser());
        existingUser.setUsername(dto.getUsername());
        existingUser.setEnabled(dto.getEnabled());

        // Paso 3: Solo si viene un nuevo password, se actualiza y se encripta
        if (dto.getPassword() != null && !dto.getPassword().isEmpty()) {
            String encodedPassword = passwordEncoder.encode(dto.getPassword());
            existingUser.setPassword(encodedPassword);
        }

        // NO ACTUALIZAMOS LOS ROLES, para evitar conflicto

        // Paso 4: Guardar cambios
        uS.update(existingUser);
    }

    @DeleteMapping("/{id}")

    //@PreAuthorize("hasAuthority('ADMIN')")


    public void eliminar(@PathVariable("id") int id) {
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
