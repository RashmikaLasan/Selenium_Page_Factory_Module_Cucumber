package PageLocations;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CheckOutPageLocators {

    @FindBy(how = How.ID,using = "hlb-view-cart-announce")
    public WebElement ClickOnCart;

    @FindBy(how = How.XPATH,using = "//body/div[@id='a-page']/div[@id='cart-page-wrap']/div[@id='huc-page-container']/div[@id='huc-v2-order-row-with-divider']/div[@id='huc-v2-order-row-container']/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/span[2]")
    public WebElement PickPriceLabel;





}
