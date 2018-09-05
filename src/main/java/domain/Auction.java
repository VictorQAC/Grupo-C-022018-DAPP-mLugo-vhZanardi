package domain;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
/* bla*/
public class Auction {


    private String title;
    private String description;
    private String address;
    private ArrayList<String> pictures;
    private float priceInit;
    private Date dateInit;
    private Date dateFinal;
    private LocalTime hoursFinal;
    private String owner;
    private StateAuction state;

    public Auction() {
    }

    public Auction(String title, String address, float priceInit, Date dateInit, Date dateFinal, String owner) {
        this.title = title;
        this.address = address;
        this.priceInit = priceInit;
        this.dateInit = dateInit;
        this.dateFinal = dateFinal;
        this.owner = owner;
        this.state = new NewAuction();
    }

    public void inProgress(){
        this.state = new InProgressAuction();
        state.update(this);
    }

    public void close(){
        this.state = new CloseAuction();
        state.update(this);
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

    public float getPriceInit() {
        return priceInit;
    }

    public void setPriceInit(float priceInit) {
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

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public StateAuction getState() {
        return state;
    }

    public void setState(StateAuction state) {
        this.state = state;
    }

}
