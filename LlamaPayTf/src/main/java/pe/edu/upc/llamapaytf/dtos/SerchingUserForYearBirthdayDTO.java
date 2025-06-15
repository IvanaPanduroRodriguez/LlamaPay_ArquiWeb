package pe.edu.upc.llamapaytf.dtos;

import java.time.LocalDate;


public class SerchingUserForYearBirthdayDTO {

    private Integer Id;
    private String Nombre;
    private LocalDate DiaNacimiento;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public LocalDate getDiaNacimiento() {
        return DiaNacimiento;
    }

    public void setDiaNacimiento(LocalDate diaNacimiento) {
        DiaNacimiento = diaNacimiento;
    }
}
