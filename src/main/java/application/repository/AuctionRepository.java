package application.repository;

import application.domain.Auction;
import org.springframework.data.repository.CrudRepository;

public interface AuctionRepository extends CrudRepository<Auction, Long> {

}
