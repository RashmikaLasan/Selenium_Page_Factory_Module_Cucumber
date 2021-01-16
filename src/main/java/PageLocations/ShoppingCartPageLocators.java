package PageLocations;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ShoppingCartPageLocators {

    @FindBy(how = How.XPATH,using = "//body/div[@id='a-page']/div[4]/div[1]/div[7]/div[1]/div[2]/div[4]/div[1]/form[1]/div[2]/div[3]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[1]/span[1]/a[1]/span[1]")
    public WebElement PickCartBookName;

    @FindBy(how = How.CSS,using = "span[class='a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold']")
    public WebElement PickCartBookPrice;

    @FindBy(how = How.CSS,using = "span[class='a-dropdown-prompt']")
    public WebElement PickCartBookQuantity;

    @FindBy(how = How.XPATH,using = "//body/div[@id='a-page']/div[4]/div[1]/div[7]/div[1]/div[2]/div[4]/div[1]/form[1]/div[3]/span[2]/span[1]")
    public WebElement CheckOutSubTotal;

    @FindBy(how = How.XPATH,using = "//body/div[@id='a-page']/div[4]/div[1]/div[7]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/span[2]/span[1]")
    public WebElement ProceedSubTotal;

    @FindBy(how = How.NAME,using = "proceedToRetailCheckout")
    public WebElement ClickProceedToCheckOutButtonInCart;








}
