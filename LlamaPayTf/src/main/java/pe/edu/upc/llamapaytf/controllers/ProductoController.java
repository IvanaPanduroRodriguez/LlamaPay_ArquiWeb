package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.MetaCestaPrDTO;
import pe.edu.upc.llamapaytf.dtos.ProductoDTO;
import pe.edu.upc.llamapaytf.dtos.ProductoInfoDTO;
import pe.edu.upc.llamapaytf.entities.Producto;
import pe.edu.upc.llamapaytf.servicesinterfaces.IProductoService;


import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/productos")
public class ProductoController {
    @Autowired
    private IProductoService pS;

    @GetMapping("/listar")
    public List<ProductoDTO> listar() {
        return pS.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x, ProductoDTO.class);
        }).collect(Collectors.toList());
    }
    @PostMapping("/insertar")
    public void insertar(@RequestBody ProductoDTO productoDTO) {
        ModelMapper m = new ModelMapper();
        Producto p = m.map(productoDTO, Producto.class);
        pS.insertar(p);
    }

    @PutMapping("/actualizar")
    public void modificar(@RequestBody ProductoDTO productoDTO) {
        ModelMapper m = new ModelMapper();
        Producto p = m.map(productoDTO, Producto.class);
        pS.update(p);
    }
    @DeleteMapping("/eliminar/{id}")
    public void eliminar(@PathVariable("id") int id) {
        pS.delete(id);
    }

    @GetMapping("/objetivo_cesta")
    public List<MetaCestaPrDTO> montosobjetivo() {
        List<String[]> fila = pS.montosobjetivo();
        List<MetaCestaPrDTO> dtoLista=new ArrayList<>();
        for(String[] columna: fila){
            MetaCestaPrDTO dto=new MetaCestaPrDTO();
            dto.setNombreusuario(columna[0]);
            dto.setMontototal(Integer.parseInt(columna[1]));
            dto.setMontoobjetivo(new BigDecimal(columna[2]));
            dtoLista.add(dto);
        }
        return dtoLista;
    }
    @GetMapping("/producto_precio_unidad")
    public List<ProductoInfoDTO> productosandpriceandunit() {
        List<String[]> fila = pS.productosandpriceandunit();
        List<ProductoInfoDTO> dtoLista=new ArrayList<>();
        for(String[] columna: fila){
            ProductoInfoDTO dto=new ProductoInfoDTO();
            dto.setNombre_producto(columna[0]);
            dto.setTotal_Unidades(Integer.parseInt(columna[1]));
            dto.setPrecio_Producto((int) Double.parseDouble(columna[2]));
            dto.setNombre_tienda(columna[3]);
            dtoLista.add(dto);
        }
        return dtoLista;
    }
    @GetMapping("/buscar/{producto}")
    public List<ProductoDTO> buscarPorProducto(@PathVariable("producto") String producto) {
        return pS.buscarPorProducto(producto).stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x, ProductoDTO.class);
        }).collect(Collectors.toList());
    }
}
