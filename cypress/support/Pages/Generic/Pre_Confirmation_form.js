import Final_Payment_Confirmation from "./Final_Payment_Confirmation";
export default class Pre_Confirmation_form
{
    constructor()
    {
        cy.contains("Please confirm the information below and then press continue...").should("be.visible");
    }
    static clickONConfirm()
    {
        cy.contains("Confirm").click();
        return new Final_Payment_Confirmation();
    }
}