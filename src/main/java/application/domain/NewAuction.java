package application.domain;

import javax.persistence.*;

@Entity
public class NewAuction extends StateAuction {

    @Override
    public Boolean isClose() {
        return false;
    }

    @Override
    public Boolean isInProgress() {
        return false;
    }

    @Override
    public Boolean isNew() {
        return true;
    }

    @Override
    public Long getId() {
        return super.getId();
    }

}
