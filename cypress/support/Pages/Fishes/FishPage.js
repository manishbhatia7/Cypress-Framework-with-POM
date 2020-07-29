import Fish_Description from "./Fish_Description";
export default class FishPage
{
    constructor()
    {
        cy.get("h2").should("be.visible");
    }
    static clickOnFishCategory()
    {
        cy.get("a").contains("FI-SW-01").should("be.visible").click();
        return new Fish_Description();
        
    }
    
}