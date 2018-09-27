package application.domain;

import javax.persistence.*;

@Entity
public class CloseAuction extends StateAuction {

    @Override
    public Boolean isClose() {
        return true;
    }

    @Override
    public Boolean isInProgress() {
        return false;
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
