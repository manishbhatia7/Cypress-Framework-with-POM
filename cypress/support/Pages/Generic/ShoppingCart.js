import PaymentForm from "./PaymentForm";

export default class Fish_ShoppingCart
{
    constructor()
    {
       cy.contains("Shopping Cart").should("be.visible");
    }
    static addToCartAndUpdate()
    {
        cy.get("input[name='EST-6']").clear().type(100);
        cy.contains("Update Cart").click();
        return this;

    }
        
    static assert_ShoppingCart()
    {
        cy.get("table").get("th").contains("Item ID").get("td").get("a").contains("EST-1").should("be.visible");
        cy.get("table").get("th").contains("List Price").get("td").contains("$16.50").should("be.visible");
        cy.get("table").get("th").contains("Total Cost").get("td").contains("$1,650.00").should("be.visible");
        cy.get("table").get("th").contains("Item ID").get("td").get("a").contains("EST-6").should("be.visible");
        cy.get("table").get("th").contains("List Price").get("td").contains("$18.50").should("be.visible");
        cy.get("table").get("th").contains("Total Cost").get("td").contains("$18.50").should("be.visible");
        cy.get("table").get("td").contains("Sub Total: $1,668.50 ");
        return this;
    }
    static click_On_Checkout()
    {
        cy.get("a").contains("Proceed to Checkout").click();
    }
    static returnToMainMenu()
    {
        cy.get("a").contains("Return to Main Menu").click();
        return new PaymentForm();
    }
}