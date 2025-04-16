package pe.edu.upc.llamapaytf.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Service")
public class Servicio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idService;
    @Column(name = "nameService", nullable = false, length = 30)
    private String nameService;
    @Column(name = "nameCompanyService", nullable = false, length = 50)
    private String nameCompanyService;

    public Servicio() {
    }

    public Servicio(int idService, String nameService, String nameCompanyService) {
        this.idService = idService;
        this.nameService = nameService;
        this.nameCompanyService = nameCompanyService;
    }

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


