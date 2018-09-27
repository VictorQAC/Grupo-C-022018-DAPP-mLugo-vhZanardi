package application.domain;

import javax.persistence.*;

@Entity
public class StateAuction {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    public Boolean isClose(){
        return false;
    }

    public Boolean isInProgress(){
        return false;
    }

    public Boolean isNew(){
        return false;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
