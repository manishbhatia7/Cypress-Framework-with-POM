import Dog_details from "./Dog_Details";
export default class Dog_Description
{
    constructor()
    {
        cy.get("h3").contains("Bulldog").should("be.visible");
    }
    
    static Assert_ItemId()
    {
        //cy.contains("Large Angelfish").contains("$16.50").should("be.visible");
        //cy.contains("Small Angelfish").contains("$16.50").should("be.visible");
        //cy.get("table").contains("th","Description").contains("td","Large Angelfish").should('be.visible');
        //cy.get("table").contains("th","Description").contains("td","Small Angelfish").should("be.visible");
        cy.get("table").get("th").contains("Description").get("td").contains("Male Adult Bulldog").should("be.visible");
        cy.get("table").get("th").contains("Description").get("td").contains("Female Puppy Bulldog").should("be.visible");
        return this;

    }
    static click_On_Dog_Details()
    {
        cy.get("a").contains("EST-6").click();
        return new Dog_details();
        //cy.get("a").contains("EST-2").click();
    }


}