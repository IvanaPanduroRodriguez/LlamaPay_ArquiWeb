package pe.edu.upc.llamapaytf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.llamapaytf.dtos.ProductoDTO;
import pe.edu.upc.llamapaytf.dtos.ProductoInfoDTO;
import pe.edu.upc.llamapaytf.dtos.ProductoTiendaDTO;
import pe.edu.upc.llamapaytf.entities.Producto;
import pe.edu.upc.llamapaytf.entities.Tienda;
import pe.edu.upc.llamapaytf.entities.User;
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

    @GetMapping("/producto-tienda")
    public List<ProductoTiendaDTO> obtenerProductosConTienda() {
        List<String[]> fila = pS.productosandtienda();
        List<ProductoTiendaDTO> dtoLista = new ArrayList<>();

        for (String[] columna : fila) {
            ProductoTiendaDTO dto = new ProductoTiendaDTO();
            dto.setNombreProducto(columna[0]);
            dto.setUnidadMedida(columna[1]);
            dto.setPrecioProducto((int) Double.parseDouble(columna[2]));
            dto.setNombreTienda(columna[3]);
            dtoLista.add(dto);
        }
        return dtoLista;
    }

    @GetMapping("/producto_precio_unidad")
    public List<ProductoInfoDTO> productosandpriceandunit() {
        List<String[]> fila = pS.productosandpriceandunit();
        List<ProductoInfoDTO> dtoLista = new ArrayList<>();

        for (String[] columna : fila) {
            ProductoInfoDTO dto = new ProductoInfoDTO();
            dto.setNombreProducto(columna[0]);
            dto.setTotalUnidades(Integer.parseInt(columna[1]));
            dto.setPrecioProducto((int) Double.parseDouble(columna[2]));
            dto.setNombreTienda(columna[3]);
            dtoLista.add(dto);
        }

        return dtoLista;
    }
}
