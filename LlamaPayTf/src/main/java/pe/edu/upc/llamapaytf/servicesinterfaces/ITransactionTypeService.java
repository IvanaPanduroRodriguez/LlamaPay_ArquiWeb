package pe.edu.upc.llamapaytf.servicesinterfaces;

import pe.edu.upc.llamapaytf.entities.TransactionType;

import java.util.List;

public interface ITransactionTypeService {
    public List<TransactionType> list();
}
