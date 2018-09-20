package application.domain;

public class CloseAuction implements StateAuction {
    @Override
    public void update(Auction auction) {

    }

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
}
