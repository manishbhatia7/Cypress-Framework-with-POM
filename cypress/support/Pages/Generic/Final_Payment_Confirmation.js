import LandingPage from "./LandingPage";

export default class Final_Payment_Confirmation
{
    constructor()
    {
        cy.contains("Thank you, your order has been submitted.").should("be.visible");
        cy.get("h3").contains("Payment Details").should("be.visible");
        cy.get("h3").contains("Billing Address").should("be.visible");
        cy.get("h3").contains("Shipping Address").should("be.visible");
    }
    static assertPayment()
    {
        cy.AssertPaymentPage();
        
    }
    static clickONLogout()
    {
        cy.contains("Sign Out").click();
        return new LandingPage();
    }
}