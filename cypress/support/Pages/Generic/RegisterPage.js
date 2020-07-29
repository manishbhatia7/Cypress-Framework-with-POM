import SigninPage from "./SigninPage";
import "../../commands";

export default class RegisterPage
{
    constructor()
    {
        cy.contains("Please enter your username and password.").should("be.visible");

    }
    static clickONRegisterLink()
    {
        cy.get("a").contains("Register Now!").click();
    }
    static fillDetails()
    {
        cy.Register();
        return new SigninPage();
    }
    
   
}