package Steps;

import PageActions.*;
import Utilities.SeleniumDriver;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.util.List;
import static org.testng.AssertJUnit.assertEquals;

public class BuyBookSteps {

    HomePageActions homePageActions = new HomePageActions();
    SearchResultPageActions searchResultsPageAction = new SearchResultPageActions();
    BookSelectPageActions bookSelectPageActions = new BookSelectPageActions();
    CheckOutPageActions checkOutPageActions = new CheckOutPageActions();
    ShoppingCartPageActions shoppingCartPageActions = new ShoppingCartPageActions();
    LoginPageActions loginPageActions = new LoginPageActions();

    @Given("^I am on the Home Page \"([^\"]*)\"$")
    public void i_am_on_the_home_page_something(String url){

        System.out.println("Redirect to the URL");
        SeleniumDriver.openPage(url);
    }

    @When("^Get the page URL and verify if it is the correct page that is opened$")
    public void get_the_page_url_and_verify_if_it_is_the_correct_page_that_is_opened(){
        String ActualURL1 = SeleniumDriver.getDriver().getCurrentUrl();
        System.out.println("The Current Web Home URL is " + ActualURL1);


        String ExpectedURL = "https://www.amazon.com/";
        assertEquals(ActualURL1, ExpectedURL);
        System.out.println("The Page URL Assertion Success");
    }

    @And("^Select \"([^\"]*)\" from main drop-down box$")
    public void select_something_from_main_dropdown_box(String Books) throws Throwable {

        homePageActions.selectBooksFromDropDown(Books);
        System.out.println("Books Selected Successful from Dropdown");
    }

    @And("^Type \"([^\"]*)\" on search bar$")
    public void type_something_on_search_bar(String BookName) throws InterruptedException {

        homePageActions.typeBookName(BookName);
        System.out.println("Book Name Entered Successful");

    }

    @And("^Click on Search button icon$")
    public void click_on_search_button_icon() throws Throwable {

        homePageActions.clickBookSearchButton();
        System.out.println("Click Search Icon Successful");
        Thread.sleep(8000);

    }

    @Then("^In the Book Series select Harry Potter in Check Box$")
    public void in_the_book_series_select_harry_potter_in_check_box(){
        String ActualURL2 = SeleniumDriver.getDriver().getCurrentUrl();
        System.out.println("The Current Web Search Results Page URL is " + ActualURL2);
        searchResultsPageAction.ClickCheckBox();
        System.out.println("Click Check Box Successful");

    }

    @And("^Select the Harry Potter and the Sorcerer's Stone, Book 1 item$")
    public void select_the_harry_potter_and_the_sorcerers_stone_book_1_item() throws Throwable {
        searchResultsPageAction.clickOnBookName();
        System.out.println("Click On Book Successful and Select it");
        Thread.sleep(8000);

    }

    @And("^Select Hardcover$")
    public void select_hardcover(){

        bookSelectPageActions.clickHardCover();
        System.out.println("Click Hard Cover Button Successfully");

    }

    @And("^Print the Item Title in console$")
    public void print_the_item_title_in_console(){
        bookSelectPageActions.BookNameDetails();

    }

    @And("^Get the Title Length and print in console$")
    public void get_the_title_length_and_print_in_console(){

        bookSelectPageActions.BookNameLength();
    }

    @Then("^Select Add To Cart$")
    public void select_add_to_cart() throws Throwable {
        bookSelectPageActions.clickAddToCart();
        Thread.sleep(8000);
    }

    @And("^Print Item Price in console$")
    public void print_item_price_in_console(){
        checkOutPageActions.pickPrice();
        System.out.println("Pick the Price");
    }

    @And("^Click on Cart$")
    public void click_on_cart() throws Throwable {

        checkOutPageActions.clickCart();
        System.out.println("Click on Cart Successfully");
        Thread.sleep(8000);
    }

    @And("^Verify selected details in Shopping Cart page$")
    public void verify_selected_details_in_shopping_cart_page(){

        shoppingCartPageActions.ShoppingCartDetails();
    }


    @Then("^Assert the ‘quantity and print in console$")
    public void assert_the_quantity_and_print_in_console(){
        shoppingCartPageActions.quantity();

    }

    @And("^Assert the Shopping Cart Subtotal Proceed to checkout Subtotal$")
    public void assert_the_shopping_cart_subtotal_proceed_to_checkout_subtotal(){

        shoppingCartPageActions.TotalPriceAssertion();
    }


    @And("^Click on Proceed to Checkout button$")
    public void click_on_proceed_to_checkout_button() throws Throwable {
        shoppingCartPageActions.clickProceedToCheckOut();
        Thread.sleep(8000);

    }

    @And("^Click on Create your Amazon Account button$")
    public void click_on_create_your_amazon_account_button() throws InterruptedException {
        loginPageActions.createAmazonAccount();
        System.out.println("Click on Create Amazon Account Button");
        Thread.sleep(5000);

    }

    @Then("^Type  new account details$")
    public void type_new_account_details(DataTable table) throws InterruptedException {
        List<List<String>> data = table.raw();
        String username = data.get(1).get(0);
        String email = data.get(1).get(1);
        String password = data.get(1).get(2);
        String reenterPassword = data.get(1).get(3);

        System.out.println("Entering Value are "+username+", "+ email+ ", " +password +" and "+ reenterPassword );

        loginPageActions.enterAccountDetails(username, email, password, reenterPassword);
        System.out.println("New Account Details Entered Successfully");
        Thread.sleep(8000);


    }

}

