package application.dto;

public class AuctionDTO{

    private String title;
    private String description;
    private double priceInit;
    private String picture;
    private String dateInit;


    public AuctionDTO() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPriceInit() {
        return priceInit;
    }

    public void setPriceInit(double priceInit) {
        this.priceInit = priceInit;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getDateInit() {
        return dateInit;
    }

    public void setDateInit(String dateInit) {
        this.dateInit = dateInit;
    }
}