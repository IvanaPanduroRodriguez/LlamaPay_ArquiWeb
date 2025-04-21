package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.CategoryDTO;
import pe.edu.upc.llamapaytf.entities.Category;
import pe.edu.upc.llamapaytf.servicesinterfaces.ICategoryService;

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
