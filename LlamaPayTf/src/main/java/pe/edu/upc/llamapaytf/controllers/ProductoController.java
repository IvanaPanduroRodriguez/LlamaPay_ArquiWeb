package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.ProductoDTO;
import pe.edu.upc.llamapaytf.entities.Producto;
import pe.edu.upc.llamapaytf.entities.Tienda;
import pe.edu.upc.llamapaytf.servicesinterfaces.IProductoService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/productos")
public class ProductoController {
    @Autowired
    private IProductoService pS;

    @GetMapping
    public List<ProductoDTO> listar() {
        return pS.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x, ProductoDTO.class);
        }).collect(Collectors.toList());
    }
    @PostMapping
    public void insertar(@RequestBody ProductoDTO productoDTO) {
        ModelMapper m = new ModelMapper();
        Producto p = m.map(productoDTO, Producto.class);
        pS.insertar(p);
    }

    @PutMapping
    public void modificar(@RequestBody ProductoDTO productoDTO) {
        ModelMapper m = new ModelMapper();
        Producto p = m.map(productoDTO, Producto.class);
        pS.update(p);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id) {
        pS.delete(id);
    }
    @GetMapping("/tienda_producto")
    public List<ProductoDTO> productosandtienda() {
        List<String[]> fila = pS.productosandtienda();
        List<ProductoDTO> dtoLista=new ArrayList<>();
        for(String[] columna: fila){
            ProductoDTO dto=new ProductoDTO();
            dto.setProducto_id(Integer.parseInt(columna[0]));
            dto.setNombre_producto(columna[1]);
            dto.setPrecio_Producto((int) Double.parseDouble(columna[2]));
            dto.setUnidad_medida(columna[3]);
            Tienda tienda = new Tienda();
            tienda.setTienda_id(Integer.parseInt(columna[4]));
            dto.setTienda(tienda);
            dtoLista.add(dto);
        }
        return dtoLista;
    }
    @GetMapping("/producto_precio_unidad")
    public List<ProductoDTO> productosandpriceandunit() {
        List<String[]> fila = pS.productosandpriceandunit();
        List<ProductoDTO> dtoLista=new ArrayList<>();
        for(String[] columna: fila){
            ProductoDTO dto=new ProductoDTO();
            dto.setProducto_id(Integer.parseInt(columna[0]));
            dto.setNombre_producto(columna[1]);
            dto.setPrecio_Producto((int) Double.parseDouble(columna[2]));
            dto.setUnidad_medida(columna[3]);
            dtoLista.add(dto);
        }
        return dtoLista;
    }
}
