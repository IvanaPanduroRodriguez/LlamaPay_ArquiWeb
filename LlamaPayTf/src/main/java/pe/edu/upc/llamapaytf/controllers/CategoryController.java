package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.CategoriaMontoDTO;
import pe.edu.upc.llamapaytf.dtos.CategoryDTO;
import pe.edu.upc.llamapaytf.entities.Category;
import pe.edu.upc.llamapaytf.servicesinterfaces.ICategoryService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/categorias")
public class CategoryController {

    @Autowired
    private ICategoryService cS;

    @GetMapping
    public List<CategoryDTO> listar() {
        return cS.list().stream().map(x->{
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(x, CategoryDTO.class);
        }).collect(Collectors.toList());
    }

    @PostMapping
    public void insertar(@RequestBody CategoryDTO dto) {
        ModelMapper m = new ModelMapper();
        Category c = m.map(dto, Category.class);
        cS.insertar(c);
    }

    @GetMapping("/{id}")
    public CategoryDTO buscarID(@PathVariable("id") int id) {
        ModelMapper m = new ModelMapper();
        CategoryDTO dto=m.map(cS.listID(id),CategoryDTO.class);
        return dto;
    }

    @GetMapping("/montoxcategoria")
    public List<CategoriaMontoDTO>buscarMontoCategoria() {
        List<CategoriaMontoDTO> dtoLista=new ArrayList<>();
        List<String[]>lista=cS.FindMontoByCategory();
        for(String[] columna:lista){
            CategoriaMontoDTO dto=new CategoriaMontoDTO();
            dto.setNameCategory(columna[0]);
            dto.setTotalGasto(Double.parseDouble(columna[1]));
            dtoLista.add(dto);
        }
        return dtoLista;
    }

    @PutMapping
    public void modificar(@RequestBody CategoryDTO dto){
        ModelMapper m = new ModelMapper();
        Category c = m.map(dto, Category.class);
        cS.update(c);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id){
        cS.delete(id);
    }



}
