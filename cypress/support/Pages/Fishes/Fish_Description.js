import Fish_details from "./Fish_Details";
export default class Fish_Description
{
    constructor()
    {
        //cy.get("h2").contains("Fish").should("be.visible");
        cy.contains("Angelfish").should("be.visible");
    }
    static Assert_ItemId()
    {
        //cy.contains("Large Angelfish").contains("$16.50").should("be.visible");
        //cy.contains("Small Angelfish").contains("$16.50").should("be.visible");
        //cy.get("table").contains("th","Description").contains("td","Large Angelfish").should('be.visible');
        //cy.get("table").contains("th","Description").contains("td","Small Angelfish").should("be.visible");
        cy.get("table").get("th").contains("Description").get("td").contains("Large Angelfish").should("be.visible");
        cy.get("table").get("th").contains("Description").get("td").contains("Small Angelfish").should("be.visible");
        return this;

    }
    static click_On_Fish_Details()
    {
        cy.get("a").contains("EST-1").click();
        return new Fish_details();
        //cy.get("a").contains("EST-2").click();
    }


}