package PageLocations;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SearchResultPageLocators {

    @FindBy(how = How.XPATH,using = "//span[text()='Harry Potter']")
    public WebElement ClickCheckBoxBookSeries;

    @FindBy(how = How.XPATH,using = "//span[text()=concat('Harry Potter and the Sorcerer',\"'\",'s Stone, Book 1')]\t")
    public WebElement ClickOnBookFromSearchResult;

}
