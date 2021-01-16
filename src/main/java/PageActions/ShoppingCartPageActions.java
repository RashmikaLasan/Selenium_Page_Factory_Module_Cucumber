package PageActions;

import PageLocations.ShoppingCartPageLocators;
import Utilities.SeleniumDriver;
import org.openqa.selenium.support.PageFactory;
import static org.testng.AssertJUnit.assertEquals;

public class ShoppingCartPageActions {


    String BookCartName;
    String BookCartPrice;
    String Units;
    String CheckOutSubtotal;
    String CartSubtotal;

    ShoppingCartPageLocators shoppingCartPageLocators;

    public ShoppingCartPageActions(){

        this.shoppingCartPageLocators = new ShoppingCartPageLocators();
        PageFactory.initElements(SeleniumDriver.getDriver(),shoppingCartPageLocators);

    }

    public void ShoppingCartDetails(){

        BookCartName = shoppingCartPageLocators.PickCartBookName.getText();
        System.out.println("Book Name in cart is: " + BookCartName);

        BookCartPrice = shoppingCartPageLocators.PickCartBookPrice.getText();
        System.out.println("Book price in cart is: " + BookCartPrice);

//        assertEquals(ItemPrice , BookCartPrice);
//        System.out.println("The Book Price Assertion Success");

    }

    public void quantity(){
        Units = shoppingCartPageLocators.PickCartBookQuantity.getText();
        int BooksQuantity = Integer.parseInt(Units);

        if (BooksQuantity>0) {
            System.out.println("The Books Quantity is: "+ BooksQuantity);
        }
        else {

            System.out.println("Quantity is not sufficient to proceed");
        }

    }

    public void TotalPriceAssertion(){

        CartSubtotal = shoppingCartPageLocators.CheckOutSubTotal.getText();
        CheckOutSubtotal = shoppingCartPageLocators.ProceedSubTotal.getText();

        System.out.println("CartSubtotal value is: "+ CartSubtotal + " and CheckOutSubtotal value is: "+ CheckOutSubtotal);
        assertEquals(CartSubtotal, CheckOutSubtotal);
        System.out.println("The CheckOutSubTotal and  ProceedSubTotal values are Equal");

    }

    public void clickProceedToCheckOut(){

        shoppingCartPageLocators.ClickProceedToCheckOutButtonInCart.click();
    }
}

