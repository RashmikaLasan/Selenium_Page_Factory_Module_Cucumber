$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuyBook.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Amazon page",
  "description": "In order to validate that\r\nthe search Books page is working fine\r\nwill do the acceptance testing",
  "id": "acceptance-testing-to-validate-amazon-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Buy-Books"
    }
  ]
});
formatter.before({
  "duration": 6649001000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate Purchase Harry Potter Book",
  "description": "",
  "id": "acceptance-testing-to-validate-amazon-page;validate-purchase-harry-potter-book",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Buy-Books-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the Home Page \"https://www.amazon.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Get the page URL and verify if it is the correct page that is opened",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Select \"Books\" from main drop-down box",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Type \"Harry Potter Books\" on search bar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on Search button icon",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "In the Book Series select Harry Potter in Check Box",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select the Harry Potter and the Sorcerer\u0027s Stone, Book 1 item",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select Hardcover",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Print the Item Title in console",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Get the Title Length and print in console",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select Add To Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Print Item Price in console",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on Cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify selected details in Shopping Cart page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Assert the ‘quantity and print in console",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Assert the Shopping Cart Subtotal Proceed to checkout Subtotal",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on Proceed to Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Create your Amazon Account button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Type  new account details",
  "rows": [
    {
      "comments": [
        {
          "line": 33,
          "value": "#      Examples:"
        }
      ],
      "cells": [
        "username",
        "email",
        "password",
        "reenterPassword"
      ],
      "line": 34
    },
    {
      "cells": [
        "LasanR",
        "lasanr@codegen.net",
        "lasan@123",
        "lasan@123"
      ],
      "line": 35
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.com/",
      "offset": 23
    }
  ],
  "location": "BuyBookSteps.i_am_on_the_home_page_something(String)"
});
formatter.result({
  "duration": 11158337900,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookSteps.get_the_page_url_and_verify_if_it_is_the_correct_page_that_is_opened()"
});
formatter.result({
  "duration": 78843100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 8
    }
  ],
  "location": "BuyBookSteps.select_something_from_main_dropdown_box(String)"
});
formatter.result({
  "duration": 5435270800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter Books",
      "offset": 6
    }
  ],
  "location": "BuyBookSteps.type_something_on_search_bar(String)"
});
formatter.result({
  "duration": 2227075300,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookSteps.click_on_search_button_icon()"
});
formatter.result({
  "duration": 14496940700,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookSteps.in_the_book_series_select_harry_potter_in_check_box()"
});
formatter.result({
  "duration": 3532620500,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookSteps.select_the_harry_potter_and_the_sorcerers_stone_book_1_item()"
});
formatter.result({
  "duration": 12032042900,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookSteps.select_hardcover()"
});
formatter.result({
  "duration": 4143723500,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookSteps.print_the_item_title_in_console()"
});
formatter.result({
  "duration": 190194900,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookSteps.get_the_title_length_and_print_in_console()"
});
formatter.result({
  "duration": 107000,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookSteps.select_add_to_cart()"
});
formatter.result({
  "duration": 11007975300,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookSteps.print_item_price_in_console()"
});
formatter.result({
  "duration": 53755300,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookSteps.click_on_cart()"
});
formatter.result({
  "duration": 10848009100,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookSteps.verify_selected_details_in_shopping_cart_page()"
});
formatter.result({
  "duration": 92486000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "BuyBookSteps.assert_the_shopping_cart_subtotal_proceed_to_checkout_subtotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.click_on_proceed_to_checkout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.click_on_create_your_amazon_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.type_new_account_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1081995900,
  "status": "passed"
});
});