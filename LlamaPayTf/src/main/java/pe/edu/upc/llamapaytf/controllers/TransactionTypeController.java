package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.upc.llamapaytf.dtos.TransactionTypeDTO;
import pe.edu.upc.llamapaytf.dtos.UserDTO;
import pe.edu.upc.llamapaytf.servicesinterfaces.ITransactionTypeService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/tipotransacciones")
public class TransactionTypeController {
    @Autowired
    private ITransactionTypeService tS;

    @GetMapping
    public List<TransactionTypeDTO> listar() {
        return tS.list().stream().map(x->{
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x, TransactionTypeDTO.class);
        }).collect(Collectors.toList());
    }
}
