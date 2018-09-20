package application.domain;

public class InProgressAuction implements StateAuction{

    @Override
    public void update(Auction auction) {

    }

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
}
