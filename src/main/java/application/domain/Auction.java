package application.domain;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.ArrayList;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;

@Entity
public class Auction {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    private String title;
    private String description;
    private String address;
    private ArrayList<String> pictures;
    private double priceInit;
    private Date dateInit;
    private Date dateFinal;
    private LocalTime hoursFinal;
    @OneToOne(
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private User owner;
    @OneToOne(
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private User currentWinner;
    //private StateAuction state;
    private double autoBid;
    @OneToMany(
            cascade = CascadeType.ALL
    )
    @JoinColumn(name = "auctionhistory_id")
    private List<AuctionHistory> history;

    public Auction(){

    }

    public Auction(String title, String description, String address, double priceInit, Date dateInit,
                   Date dateFinal, LocalTime hoursFinal) {
        this.title = title;
        this.description = description;
        this.address = address;
        this.pictures = new ArrayList<String>();
        this.priceInit = priceInit;
        this.dateInit = dateInit;
        this.dateFinal = dateFinal;
        this.hoursFinal = hoursFinal;
        //this.state = new NewAuction();
        this.autoBid = priceInit;
        //this.history = new ArrayList<AuctionHistory>();
    }

    public Auction(String title, String description, String address, double priceInit, Date dateInit,
                   Date dateFinal, LocalTime hoursFinal, User owner) {
        this.title = title;
        this.description = description;
        this.address = address;
        this.pictures = new ArrayList<String>();
        this.priceInit = priceInit;
        this.dateInit = dateInit;
        this.dateFinal = dateFinal;
        this.hoursFinal = hoursFinal;
        this.owner = owner;
        //this.state = new NewAuction();
        this.autoBid = priceInit;
        this.currentWinner = owner;
        this.history = new ArrayList<>();
    }

    /*public void inProgress(){

        DateTime dateCurrent = DateTime.now();
        LocalTime timeCurrent = LocalTime.now();

        if(dateCurrent.equals(this.getDateInit())){
            this.setState(new InProgressAuction());
        }
    }

    public void close(){

        DateTime dateCurrent = DateTime.now();
        LocalTime timeCurrent = LocalTime.now();

        if(dateCurrent.equals(this.getDateFinal()) && timeCurrent.equals(this.getHoursFinal())){
            this.setState(new CloseAuction());
        }

    }

    public Boolean isCurrentWinner(User user){
        return user.getName() == this.getCurrentWinner().getName();
    }*/

    /*public void makeABid(User user, double autoBid){

        double nextBid = this.getPriceInit() * 0.05 + this.getPriceInit();

        if(this.isCurrentWinner(user) || !this.getState().isInProgress()){
            return;
        }

        if(this.getAutoBid() < nextBid){

            if(this.fiveMinutesLeftToFinish() && !this.exceeds48Hours()){

                this.setPriceInit(nextBid);
                this.setCurrentWinner(user);
                this.setAutoBid(autoBid);
                this.setHoursFinal(this.getHoursFinal().plusMinutes(5));
                this.addNewBid(user.getId(),DateTime.now(),this.lastSectionNumber() + 1);
            } else {

                this.setPriceInit(nextBid);
                this.setCurrentWinner(user);
                this.setAutoBid(autoBid);
                this.addNewBid(user.getId(),DateTime.now(),this.lastSectionNumber() + 1);
            }

        } else {

            this.setPriceInit(nextBid);
            this.addNewBid(user.getId(),DateTime.now(),this.lastSectionNumber() + 1);
        }
        return;
    }*/

    public Boolean fiveMinutesLeftToFinish(){

        LocalTime timeCurrent = LocalTime.now();
        long res = timeCurrent.until(this.getHoursFinal(), ChronoUnit.MINUTES);
        return res < 5;
    }

    /*public Boolean exceeds48Hours(){

        DateTime extendTwoDays = this.getDateFinal().plusDays(2);
        DateTime dateCurrent = DateTime.now();

        return dateCurrent.equals(extendTwoDays);
    }*/

    public void addPictures(String url){
        this.getPictures().add(url);
    }

    public double getAutoBid() {
        return autoBid;
    }

    public void setAutoBid(double autoBid) {
        this.autoBid = autoBid;
    }
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ArrayList<String> getPictures() {
        return pictures;
    }

    public void setPictures(ArrayList<String> pictures) {
        this.pictures = pictures;
    }

    public double getPriceInit() {
        return priceInit;
    }

    public void setPriceInit(double priceInit) {
        this.priceInit = priceInit;
    }

    public Date getDateInit() {
        return dateInit;
    }

    public void setDateInit(Date dateInit) {
        this.dateInit = dateInit;
    }

    public Date getDateFinal() {
        return dateFinal;
    }

    public void setDateFinal(Date dateFinal) {
        this.dateFinal = dateFinal;
    }

    public LocalTime getHoursFinal() {
        return hoursFinal;
    }

    public void setHoursFinal(LocalTime hoursFinal) {
        this.hoursFinal = hoursFinal;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }
/*
    public StateAuction getState() {
        return state;
    }

    public void setState(StateAuction state) {
        this.state = state;
    }

    public User getCurrentWinner() {
        return currentWinner;
    }

    public void setCurrentWinner(User currentWinner) {
        this.currentWinner = currentWinner;
    }

    public ArrayList getAuctionHistory() {
      return history;
    }*/

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    /*public void addNewBid(long userId,DateTime date,Integer section){
            AuctionHistory newHistory = new AuctionHistory(userId, date, section);
            this.history.add(newHistory);
    }

    public int lastSectionNumber(){
        int result;
        if (this.isFirstBid()){
            result = 0;
        }
        else {
            result = ((AuctionHistory)(this.history.get(this.history.size() - 1))).getSectionNumber();
        }
        return result;
    }

    public Boolean isFirstBid(){
        return this.history.size() == 0;
    }*/

    @Override
    public String toString() {
        return String.format(
                "Auction[id=%d, title='%s', description='%s']",
                id, title, description);
    }
}
