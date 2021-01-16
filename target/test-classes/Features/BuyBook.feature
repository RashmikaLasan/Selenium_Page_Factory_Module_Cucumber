@Buy-Books
  Feature: Acceptance testing to validate Amazon page
    In order to validate that
    the search Books page is working fine
    will do the acceptance testing

    @Buy-Books-Positive
    Scenario: Validate Purchase Harry Potter Book
      Given I am on the Home Page "https://www.amazon.com/"
      When Get the page URL and verify if it is the correct page that is opened
      And Select "Books" from main drop-down box
      And Type "Harry Potter Books" on search bar
      And Click on Search button icon

      Then In the Book Series select Harry Potter in Check Box
      And Select the Harry Potter and the Sorcerer's Stone, Book 1 item

      And Select Hardcover
      And Print the Item Title in console
      And Get the Title Length and print in console
      Then Select Add To Cart

      And Print Item Price in console
      And Click on Cart

      And Verify selected details in Shopping Cart page
      Then Assert the ‘quantity and print in console
      And Assert the Shopping Cart Subtotal Proceed to checkout Subtotal
      And Click on Proceed to Checkout button

      And Click on Create your Amazon Account button
      Then Type  new account details
#      Examples:
      |username   | email               | password   | reenterPassword |
      |LasanR     | lasanr@codegen.net  | lasan@123  | lasan@123       |