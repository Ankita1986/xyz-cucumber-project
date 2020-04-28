package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


/**
 * Created by Ankita
 */
public class CustomersPage extends Utility {

    private static final Logger log = LogManager.getLogger(CustomersPage.class.getName());



    @FindBy(xpath = "//input[@placeholder='Search Customer']")
    WebElement searchCustomerBt;
    @FindBy(xpath = "//button[contains(text(),'Delete')]")
    WebElement deleteBt;


    public void searchCustomerByName(String name){
        Reporter.addStepLog("Searching customer name: " + name + "to search customer field :" + searchCustomerBt.toString() + "<br>");
        sendTextToElement(searchCustomerBt, name);
        log.info("Searching customer name: " +name+ "to search customer field :" +searchCustomerBt.toString());
    }

    public void deleteCustomer(){
        Reporter.addStepLog("Deleting Customer Name :" +deleteBt.toString() + "<br>");
        clickOnElement(deleteBt);
        log.info("Deleting Customer Name :" +deleteBt.toString());
    }


}
