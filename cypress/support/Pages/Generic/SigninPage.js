import LandingPage from "./LandingPage";

export default class SigninPage
{
    constructor()
    {
        cy.contains("Your account has been created. Please try login.").should("be.visible");
    }

    static submitCredentials()
    {
        cy.SignIn();
        return new LandingPage();

    }
}