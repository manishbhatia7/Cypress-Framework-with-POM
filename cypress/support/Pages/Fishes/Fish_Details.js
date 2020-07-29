import ShoppingCart from "../Generic/ShoppingCart";

export default class Fish_Details
{
constructor()
{
    cy.contains("Large Angelfish").should("be.visible");
}
static assertText()
{
    cy.get("table").contains("td","Angelfish").should("be.visible");
    cy.get("table").contains("td","$16.50").should("be.visible");
    
}
static add_To_Cart()
{
    cy.get("a").contains("Add to Cart").click();
    return new ShoppingCart();
}
}