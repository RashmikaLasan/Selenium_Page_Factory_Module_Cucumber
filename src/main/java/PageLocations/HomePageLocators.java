package PageLocations;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomePageLocators {

    @FindBy(how = How.XPATH,using = "//select[@name='url']")
    public WebElement MainDropDownClick;

    @FindBy(how = How.ID,using = "twotabsearchtextbox")
    public WebElement ClickOnTextBox;

    @FindBy(how = How.ID,using = "nav-search-submit-button")
    public WebElement ClickBookSearchIcon;



}
