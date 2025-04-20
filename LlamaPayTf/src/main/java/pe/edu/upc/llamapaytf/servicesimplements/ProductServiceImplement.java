package pe,edu.upc.llamapaytf.servicesimplements;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.llamapaytf.entities.ProductType;
import pe.edu.upc.llamapaytf.repositories.IProductTypeRepository;
import pe.edu.upc.llamapaytf.servicesinterfaces.IProductTypeService;
import java.util.List;

@Service

public class ProductTypeServiceImplement implements IProductTypeService {
    @Autowired
    private IProductTypeRepository pR;

    @Override
    public List<ProductType> list() {
        return pR.findAll();
    }
    @Override
    public void insert(ProductType id_producto) {
        pR.save(id_producto);
    }
    @Override
    public void delete(int id_producto) {
        pR.deleteById(id_producto);
    }
    @Override
    public ProductType listId(int id_producto) {
        return pR.findById(id_producto).orElse(new ProductType());
    }
    @Override
    public List<ProductType> findByName(String nombre) {
        return pR.findByName(nombre);
    }
    @Override
    public void update(ProductType id_producto) {
        pR.save(id_producto);
    }
}
