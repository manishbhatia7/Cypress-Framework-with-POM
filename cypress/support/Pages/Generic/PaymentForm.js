import Pre_Confirmation_form from "../Generic/Pre_Confirmation_form";
export default class PaymentForm
{
    constructor()
    {

    }
    static fillCardNumber(card_no)
    {
        cy.get("input[name='creditCard']").clear().type(card_no);
    }
    static fillExpiryDate(date)
    {
        cy.get("input[name='expiryDate']").clear().type(date);
       
    }
    static clickOnContinue()
    {
        cy.contains("Continue").click();
        return new Pre_Confirmation_form();
    }
}