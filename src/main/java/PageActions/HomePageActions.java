package PageActions;

import PageLocations.HomePageLocators;
import Utilities.SeleniumDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class HomePageActions {

    HomePageLocators homePageLocators;

    public HomePageActions(){

        this.homePageLocators = new HomePageLocators();
        PageFactory.initElements(SeleniumDriver.getDriver(),homePageLocators);

    }

    //Select from Drop Down
    public void selectBooksFromDropDown( String Books) throws InterruptedException {
        Select selectBook = new Select(homePageLocators.MainDropDownClick);
        selectBook.selectByVisibleText(Books);
        Thread.sleep(5000);
    }

    //Type Book Name
    public void typeBookName(String BookName) throws InterruptedException {

        homePageLocators.ClickOnTextBox.sendKeys(BookName);
        Thread.sleep(2000);

    }

    //Click Search Button
    public void clickBookSearchButton(){

        homePageLocators.ClickBookSearchIcon.click();

    }


}
