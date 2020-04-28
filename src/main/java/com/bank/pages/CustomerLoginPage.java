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
public class CustomerLoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(CustomerLoginPage.class.getName());



    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement yourName;
    @FindBy(xpath = "//button[@class='btn btn-default']")
    WebElement loginBt;
    @FindBy(xpath = "//label[contains(text(),'Your Name :')]")
    WebElement yourNameLabel;





    public void clickOnLoginBt() {
        Reporter.addStepLog("Clicking On Login Button :" + loginBt.toString() + "<br>");
        clickOnElement(loginBt);
        log.info("Clicking On Login Button :" +loginBt.toString());
    }

    public void selectCustomerNameFromDropDown(String Name) {
        Reporter.addStepLog("Selecting Customer Name From DropDown :" +Name+ "in dropdown field" + yourName.toString() + "<br>");
        clickOnElement(yourName);
        log.info("Selecting Customer Name From DropDown :" +Name+ "in dropdown field" + yourName.toString());
        selectByVisibleTextFromDropDown(yourName, Name);


    }
    public boolean isYourNameLabelDisplayed(){
        Reporter.addStepLog("Checking Name Label Displayed :" + yourNameLabel.toString() + "<br>");
        if ((yourNameLabel).isDisplayed()){
            log.info("Checking Name Label Displayed :" + yourNameLabel.toString());
            return true;
        }else {
            return false;
        }
    }




}
