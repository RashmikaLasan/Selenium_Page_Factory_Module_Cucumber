package PageActions;

import PageLocations.BookSelectPageLocators;
import Utilities.SeleniumDriver;
import org.openqa.selenium.support.PageFactory;

public class BookSelectPageActions {

    BookSelectPageLocators bookSelectPageLocators;
    String BookName;

    public BookSelectPageActions(){
        this.bookSelectPageLocators = new BookSelectPageLocators();
        PageFactory.initElements(SeleniumDriver.getDriver(),bookSelectPageLocators);

    }

    //Click Hard Cover Button
    public void clickHardCover (){

        bookSelectPageLocators.SelectHardCover.click();

    }

    //Verify Book Name
    public void BookNameDetails(){

        BookName = bookSelectPageLocators.SelectBookNameText.getText();
        System.out.println("Product Name is: "+ BookName);

    }

    //Get the Length of Book Name
    public void BookNameLength(){
        int BookNameLength = BookName.length();
        System.out.println("Product Length is: "+ BookNameLength);

    }

    //Add item to the cart
    public void clickAddToCart(){
        bookSelectPageLocators.ClickAddToCardButton.click();

    }
}
