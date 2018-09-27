package application.domain;

import javax.persistence.*;

@Entity
public class InProgressAuction extends StateAuction{


    @Override
    public Boolean isClose() {
        return false;
    }

    @Override
    public Boolean isInProgress() {
        return true;
    }

    @Override
    public Boolean isNew() {
        return false;
    }

    @Override
    public Long getId() {
        return super.getId();
    }
}
