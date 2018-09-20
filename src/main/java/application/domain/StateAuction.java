package application.domain;

public interface StateAuction {

    public void update(Auction auction);

    public Boolean isClose();

    public Boolean isInProgress();

    public Boolean isNew();
}
