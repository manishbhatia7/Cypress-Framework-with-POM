import LandingPage from "../../support/Pages/Generic/LandingPage"
import FishPage from "../../support/Pages/Fishes/FishPage";
import Fish_Description from "../../support/Pages/Fishes/Fish_Description";
import Fish_Details from "../../support/Pages/Fishes/Fish_Details";
import ShoppingCart from "../../support/Pages/Generic/ShoppingCart";
import RegisterPage from "../../support/Pages/Generic/RegisterPage";
import DogPage from "../../support/Pages/Dogs/DogPage";
import Dog_Description from "../../support/Pages/Dogs/Dog_Description";
import Dog_Details from "../../support/Pages/Dogs/Dog_Details";
import PaymentForm from "../../support/Pages/Generic/PaymentForm";
import Pre_Confirmation_form from "../../support/Pages/Generic/Pre_Confirmation_form";
import Final_Payment_Confirmation from "../../support/Pages/Generic/Final_Payment_Confirmation";
import SigninPage from "../../support/Pages/Generic/SigninPage";

describe('E2E Framework for Cypress Signin,Purchase and Payment',()=>

{
    beforeEach(() => {
        cy.restoreLocalStorage();      
    });
    afterEach(() =>  {
        cy.saveLocalStorage();

    });

   
    it('Complete E2E Flow for Purchasing Animals ', () => {
        LandingPage.fetchUrl();      
        LandingPage.goToRegisterPage();
        RegisterPage.clickONRegisterLink();
        RegisterPage.fillDetails();
        SigninPage.submitCredentials();          
        LandingPage.clickONFishCategory();
        FishPage.clickOnFishCategory();
        Fish_Description.Assert_ItemId();
        Fish_Description.click_On_Fish_Details();
        Fish_Details.assertText();
        Fish_Details.add_To_Cart();
        ShoppingCart.returnToMainMenu();
        LandingPage.clickONDogCategory();
        DogPage.clickOnDogCategory();
        Dog_Description.Assert_ItemId();
        Dog_Description.click_On_Dog_Details();
        Dog_Details.assertText();
        Dog_Details.add_To_Cart();
        ShoppingCart.addToCartAndUpdate();
        ShoppingCart.click_On_Checkout();
        PaymentForm.clickOnContinue();
        Pre_Confirmation_form.clickONConfirm();
        Final_Payment_Confirmation.assertPayment();
        Final_Payment_Confirmation.clickONLogout();       

         
    })
    /*it('Register Details', () => {
        LandingPage.fetchUrl();      
        LandingPage.goToRegisterPage();
        RegisterPage.clickONRegisterLink();
        RegisterPage.fillDetails();
        
    });
    it('Sign in to Page', () => {
        SigninPage.submitCredentials();
        
    });
    it('Purchase Fish from Categories', () => {
        LandingPage.clickONFishCategory();
        FishPage.clickOnFishCategory();
        Fish_Description.Assert_ItemId();
        Fish_Description.click_On_Fish_Details();
        Fish_Details.assertText();
        Fish_Details.add_To_Cart();
        ShoppingCart.returnToMainMenu();
    });
    it('Purchase Dog from Categories', () => {
        LandingPage.clickONDogCategory();
        DogPage.clickOnDogCategory();
        Dog_Description.Assert_ItemId();
        Dog_Description.click_On_Dog_Details();
        Dog_Details.assertText();
        Dog_Details.add_To_Cart();
        
    });
    it('Finalise Payment and Assert Order Details', () => {
        ShoppingCart.addToCartAndUpdate();
        ShoppingCart.click_On_Checkout();
        PaymentForm.clickOnContinue();
        Pre_Confirmation_form.clickONConfirm();
        Final_Payment_Confirmation.assertPayment();
        Final_Payment_Confirmation.clickONLogout(); 
    });*/
    
});