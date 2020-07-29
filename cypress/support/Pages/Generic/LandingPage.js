//import SignInPage from "./SignInPage";
import FishPage from "../Fishes/Fish_Description";
import DogPage from "../Dogs/DogPage";
import SignInPage from "./RegisterPage";
export default class LandingPage
{
    constructor()
    {
        cy.xpath("//div[@id='LogoContent']//a//img").should("be.visible");
    }
    static fetchUrl()
    {
       const url=Cypress.config().baseUrl;
       cy.visit(url);
    }
    static goToRegisterPage()
    {
        cy.get("a").contains("Sign In").should("be.visible");
        cy.get("a").contains("Sign In").click();
        return new SignInPage();
    }
    static clickONFishCategory()
    {
       cy.get("a").contains("Fish").click();
        return new FishPage();
    }
    static clickONDogCategory()
    {
        cy.get("a").contains("Dogs").click();
        return new DogPage();
    }
}