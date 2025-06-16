<<<<<<<< HEAD:LlamaPayTf/src/main/java/pe/edu/upc/llamapaytf/repositories/ITipoTransaccionRepository.java
package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.llamapaytf.entities.TipoTransaccion;

@Repository
public interface ITipoTransaccionRepository extends JpaRepository<TipoTransaccion,Integer> {
}
========
package pe.edu.upc.llamapaytf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.llamapaytf.entities.TransactionType;

@Repository
public interface ITransactionTypeRepository extends JpaRepository<TransactionType,Integer> {
}
>>>>>>>> origin/Joao:LlamaPayTf/src/main/java/pe/edu/upc/llamapaytf/repositories/ITransactionTypeRepository.java
