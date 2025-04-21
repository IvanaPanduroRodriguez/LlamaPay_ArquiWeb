package pe.edu.upc.llamapaytf.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.llamapaytf.entities.TransactionType;
import pe.edu.upc.llamapaytf.repositories.ITransactionTypeRepository;
import pe.edu.upc.llamapaytf.servicesinterfaces.ITransactionTypeService;

import java.util.List;

@Service
public class TransactionTypeServiceImplement implements ITransactionTypeService {
    @Autowired
    private ITransactionTypeRepository tR;

    @Override
    public List<TransactionType> list() {
        return tR.findAll();
    }
}
