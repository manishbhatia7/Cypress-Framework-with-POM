import Dog_Description from "./Dog_Description";
export default class DogPage
{
    constructor()
    {
        cy.get("h3").should("be.visible");
    }
    static clickOnDogCategory()
    {
        cy.get("a").contains("K9-BD-01").should("be.visible").click();
        return new Dog_Description();
        
    }
    
}