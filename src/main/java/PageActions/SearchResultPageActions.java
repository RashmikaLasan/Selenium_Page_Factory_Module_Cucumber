package PageActions;

import PageLocations.SearchResultPageLocators;
import Utilities.SeleniumDriver;
import org.openqa.selenium.support.PageFactory;

public class SearchResultPageActions {

    SearchResultPageLocators searchResultPageLocators;

    public SearchResultPageActions(){

        this.searchResultPageLocators = new SearchResultPageLocators();
        PageFactory.initElements(SeleniumDriver.getDriver(),searchResultPageLocators);

    }

    //Click on Check Box
    public void ClickCheckBox(){

        searchResultPageLocators.ClickCheckBoxBookSeries.click();
    }

    //Click On Book Name
    public void clickOnBookName(){

        searchResultPageLocators.ClickOnBookFromSearchResult.click();
    }

}
