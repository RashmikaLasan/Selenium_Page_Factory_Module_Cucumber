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
    public void selectBooksFromDropDown( String Books) throws InterruptedException {
        Select selectBook = new Select(homePageLocators.MainDropDownClick);
        selectBook.selectByVisibleText(Books);
        Thread.sleep(5000);
    }

    public void typeBookName(String BookName) throws InterruptedException {

        homePageLocators.ClickOnTextBox.sendKeys(BookName);
        Thread.sleep(2000);

    }

    public void clickBookSearchButton(){

        homePageLocators.ClickBookSearchIcon.click();

    }


}
