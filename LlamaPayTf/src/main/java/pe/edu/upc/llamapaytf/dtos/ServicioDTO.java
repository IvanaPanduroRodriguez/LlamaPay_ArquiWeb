package pe.edu.upc.llamapaytf.dtos;


public class ServicioDTO {
    private int idService;
    private String nameService;
    private String nameCompanyService;

    public int getIdService() {
        return idService;
    }

    public void setIdService(int idService) {
        this.idService = idService;
    }

    public String getNameService() {
        return nameService;
    }

    public void setNameService(String nameService) {
        this.nameService = nameService;
    }

    public String getNameCompanyService() {
        return nameCompanyService;
    }

    public void setNameCompanyService(String nameCompanyService) {
        this.nameCompanyService = nameCompanyService;
    }
}
