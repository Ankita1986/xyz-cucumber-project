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
public class OpenAccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(OpenAccountPage.class.getName());



    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement customerName;
    @FindBy(id = "currency")
    WebElement currency;
    @FindBy(xpath = "//button[contains(text(),'Process')]")
    WebElement clickOnProcess;


    public void selectCustomerName(String cName){
        clickOnElement(customerName);
        Reporter.addStepLog("Selecting Customer Name :" + cName + "On Customer Name Field :" + customerName.toString() + "<br>");
        selectByVisibleTextFromDropDown(customerName, cName);
        log.info("Selecting Customer Name :" +cName+ "On Customer Name Field :" +customerName.toString());
    }

    public void selectCurrency(String currency1){
        Reporter.addStepLog("Selecting currency :" +currency+ "in the currency field :" + currency.toString() + "<br>" );
        selectByVisibleTextFromDropDown(this.currency, currency1);
        log.info("Selecting currency :" +currency+ "in the currency field :" + currency.toString());
    }

    public void clickOnProcessButton(){
        Reporter.addStepLog("Clicking On Process Button :" +clickOnProcess.toString() + "<br>");
        log.info("Clicking On Process Button :" +clickOnProcess.toString());
        clickOnElement(clickOnProcess);
    }







}


