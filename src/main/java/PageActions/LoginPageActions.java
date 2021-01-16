package PageActions;

import PageLocations.LoginPageLocators;
import Utilities.SeleniumDriver;
import org.openqa.selenium.support.PageFactory;

public class LoginPageActions {

    LoginPageLocators loginPageLocators;

    public LoginPageActions(){
        this.loginPageLocators= new LoginPageLocators();
        PageFactory.initElements(SeleniumDriver.getDriver(),loginPageLocators);
    }

    public void createAmazonAccount(){
        loginPageLocators.ClickCreateAccountButton.click();

    }

    public void enterAccountDetails(String username, String email, String password, String reenterPassword){
        loginPageLocators.ClickOnUserName.sendKeys(username);
        loginPageLocators.ClickOnEmail.sendKeys(email);
        loginPageLocators.ClickOnPassword.sendKeys(password);
        loginPageLocators.ClickOnReenterPassword.sendKeys(reenterPassword);
    }

}
