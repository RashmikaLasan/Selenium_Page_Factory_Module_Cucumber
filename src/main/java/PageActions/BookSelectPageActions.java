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

    public void clickHardCover (){

        bookSelectPageLocators.SelectHardCover.click();

    }

    public void BookNameDetails(){

        BookName = bookSelectPageLocators.SelectBookNameText.getText();
        System.out.println("Product Name is: "+ BookName);

    }

    public void BookNameLength(){
        int BookNameLength = BookName.length();
        System.out.println("Product Length is: "+ BookNameLength);

    }

    public void clickAddToCart(){
        bookSelectPageLocators.ClickAddToCardButton.click();

    }
}
