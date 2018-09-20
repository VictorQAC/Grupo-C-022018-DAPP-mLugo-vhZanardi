package application.domain;

public class NewAuction implements StateAuction {

    @Override
    public void update(Auction auction) {

    }

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

}
