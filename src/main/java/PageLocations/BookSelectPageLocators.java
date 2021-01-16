package PageLocations;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BookSelectPageLocators {

    @FindBy(how = How.XPATH,using = "//a[@id='a-autoid-2-announce']")
    public WebElement SelectHardCover;

    @FindBy(how = How.XPATH,using = "//span[@id='productTitle']")
    public WebElement SelectBookNameText;

    @FindBy(how = How.ID,using = "add-to-cart-button")
    public WebElement ClickAddToCardButton;

}
