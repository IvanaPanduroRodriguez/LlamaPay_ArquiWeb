package pe.edu.upc.llamapaytf.dtos;

public class TransactionTypeDTO {
    private int idTransactionType;
    private String description;

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
