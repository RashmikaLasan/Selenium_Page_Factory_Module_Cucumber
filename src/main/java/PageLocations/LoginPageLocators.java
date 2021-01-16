package PageLocations;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPageLocators {

    @FindBy(how = How.ID,using = "createAccountSubmit")
    public WebElement ClickCreateAccountButton;

    @FindBy(how = How.ID,using = "ap_customer_name")
    public WebElement ClickOnUserName;

    @FindBy(how = How.ID,using = "ap_email")
    public WebElement ClickOnEmail;

    @FindBy(how = How.ID,using = "ap_password")
    public WebElement ClickOnPassword;

    @FindBy(how = How.ID,using = "ap_password_check")
    public WebElement ClickOnReenterPassword;

    @FindBy(how = How.ID,using = "continue")
    public WebElement ClickOnAmazonAccountCreateButton;

}
