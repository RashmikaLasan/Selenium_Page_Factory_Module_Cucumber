package PageActions;

import PageLocations.CheckOutPageLocators;
import Utilities.SeleniumDriver;
import org.openqa.selenium.support.PageFactory;

public class CheckOutPageActions {

    public String ItemPrice;
    CheckOutPageLocators checkOutPageLocators;

    public CheckOutPageActions(){

        this.checkOutPageLocators = new CheckOutPageLocators();
        PageFactory.initElements(SeleniumDriver.getDriver(),checkOutPageLocators);

    }

    public void pickPrice(){

        ItemPrice = checkOutPageLocators.PickPriceLabel.getText();
        System.out.println("Book price is: " + ItemPrice);
    }

    public void clickCart(){

        checkOutPageLocators.ClickOnCart.click();
    }
}
