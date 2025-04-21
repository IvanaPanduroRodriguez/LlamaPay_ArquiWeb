package pe.edu.upc.llamapaytf.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "TipoTransacciones")
public class TransactionType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idTransactionType;
    @Column(name = "description",nullable = false,length = 100)
    private String description;

    public TransactionType() {
    }

    public TransactionType(int idTransactionType, String description) {
        this.idTransactionType = idTransactionType;
        this.description = description;
    }

    public int getIdTransactionType() {
        return idTransactionType;
    }

    public void setIdTransactionType(int idTransactionType) {
        this.idTransactionType = idTransactionType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
