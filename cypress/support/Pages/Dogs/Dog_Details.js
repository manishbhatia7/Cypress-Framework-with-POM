import ShoppingCart from ".//..//Generic/ShoppingCart";

export default class Dog_Details
{
constructor()
{
    cy.contains("Male Adult Bulldog").should("be.visible");
}
static assertText()
{
    cy.get("table").contains("td","Bulldog").should("be.visible");
    cy.get("table").contains("td","$18.50").should("be.visible");
    
}
static add_To_Cart()
{
    cy.get("a").contains("Add to Cart").click();
    return new ShoppingCart();
}
}