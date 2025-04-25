package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import upc.edu.pe.llamapaytf.dtos.ProductoDTO;
import pe.edu.upc.llamapaytf.servicesinterfaces.IProductoService;

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
    @GetMapping("/{id}")
    public ProductoDTO listarId(@PathVariable("id") int id) {
        ModelMapper m = new ModelMapper();
        ProductoDTO productoDTO = m.map(pS.listarId(id), ProductoDTO.class);
        return productoDTO;
    }
    @PutMapping
    public void modificar(@RequestBody ProductoDTO productoDTO) {
        ModelMapper m = new ModelMapper();
        Producto p = m.map(productoDTO, Producto.class);
        pS.modificar(p);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id) {
        pS.eliminar(id);
    }

    @GetMapping("/tienda_producto")
    public List<String[]> productosandtienda() {
        List<String[]> fila = pS.productosandtienda();
        List<ProductoDTO> dtoLista=new ArrayList<>();
        for(String[] columna: fila){
            ProductoDTO dto=new ProductoDTO();
            dto.setId_producto(Integer.parseInt(columna[0]));
            dto.setNombre_producto(columna[1]);
            dto.setPrecio_producto(Double.parseDouble(columna[2]));
            dto.setUnidad_producto(columna[3]);
            dto.setNombre_tienda(columna[4]);
            dtoLista.add(dto);
        }
        return dtoLista;
    }
    @GetMapping("/producto_precio_unidad")
    public List<String[]> productosandpriceandunit() {
        List<String[]> fila = pS.productosandpriceandunit();
        List<ProductoDTO> dtoLista=new ArrayList<>();
        for(String[] columna: fila){
            ProductoDTO dto=new ProductoDTO();
            dto.setId_producto(Integer.parseInt(columna[0]));
            dto.setNombre_producto(columna[1]);
            dto.setPrecio_producto(Double.parseDouble(columna[2]));
            dto.setUnidad_producto(columna[3]);
            dtoLista.add(dto);
        }
        return dtoLista;
    }
}

