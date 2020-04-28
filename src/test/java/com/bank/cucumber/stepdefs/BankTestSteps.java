package com.bank.cucumber.stepdefs;


import com.bank.basepage.BasePage;
import com.bank.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;

/**
 * Created by Ankita
 */
public class BankTestSteps extends BasePage {


    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on bank manager login tab$")
    public void iClickOnBankManagerLoginTab() {
        new HomePage().clickOnBankManagerLogin();
    }

    @And("^I click on add customer tab$")
    public void iClickOnAddCustomerTab() {
        new BankManagerLoginPage().clickOnAddCustomerTab();
    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstname)  {
        new AddCustomerPage().enterFirstName(firstname);

    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lastname)  {
        new AddCustomerPage().enterLastName(lastname);

    }

    @And("^I enter post code \"([^\"]*)\"$")
    public void iEnterPostCode(String postcode)  {
        new AddCustomerPage().enterPostCode(postcode);

    }

    @And("^I click on add customer button$")
    public void iClickOnAddCustomerButton() {
        new AddCustomerPage().clickOnAddCustomerBt();
    }

    @Then("^I should see customer added successfully message$")
    public void iShouldSeeCustomerAddedSuccessfullyMessage() {
        Alert alert = driver.switchTo().alert();
        Assert.assertTrue(alert.getText().contains("Customer added successfully"));
        alert.accept();

    }

    @And("^I click on customers tab$")
    public void iClickOnCustomersTab() {
        new BankManagerLoginPage().clickOnCustomerTab();
    }

    @And("^I search customer by name \"([^\"]*)\"$")
    public void iSearchCustomerByName(String name)  {
        new CustomersPage().searchCustomerByName(name);

    }

    @Then("^I click on delete button$")
    public void iClickOnDeleteButton() {
        new CustomersPage().deleteCustomer();
    }


}
