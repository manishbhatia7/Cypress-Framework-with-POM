// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

//const { default: LandingPage } = require("./Pages/Generic/LandingPage");

// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('Register',(uid,pwd,fname,lname,email,phone,add1,add2,city,state,zip,country)=>{
    cy.fixture("user.json").then(function(users){
    
    const uid=users.userid;    
    cy.get("[name='username']").type(uid);
    const pwd=users.password;
    cy.get("[name='password']").type(pwd);
    cy.get("[name='repeatedPassword']").type(pwd);
    const fname=users.firstname;
    cy.get("[name='firstName']").type(fname);
    const lname=users.lastname;
    cy.get("[name='lastName']").type(lname);
    const email=users.email;
    cy.get("[name='email']").type(email);
    const phone=users.phone;
    cy.get("[name='phone']").type(phone);
    const add1=users.address1;
    cy.get("[name='address1']").type(add1);
    const add2=users.address2;
    cy.get("[name='address2']").type(add2);
    const city=users.city;
    cy.get("[name='city']").type(city);
    const state=users.state;
    cy.get("[name='state']").type(state);
    const zip=users.zip;
    cy.get("[name='zip']").type(zip);
    const country=users.country;
    cy.get("[name='country']").type(country);
    cy.contains("Save Account Information").click();
    })       

})
Cypress.Commands.add('SignIn',(uname,pwd)=>
{
    cy.fixture("user.json").then(function(users){
        const uname=users.userid;
        cy.get("[name='username']").clear().type(uname);
        const pwd=users.password;
        cy.get("[name='password']").clear().type(pwd);
        cy.contains("Login").click();
    })


})
Cypress.Commands.add('AssertPaymentPage',(finame,laname,addr1,addr2)=>
{
    cy.fixture("user.json").then(function(users1){
    const finame=users1.firstname;
    cy.get("table").get("td").contains("First name:").get("td").contains(finame);
    const laname=users1.lastname;
    cy.get("table").get("td").contains("Last name:").get("td").contains(laname);
    const addr1=users1.address1;
    cy.get("table").get("td").contains("Address 1:").get("td").contains(addr1);
    const addr2=users1.address2;
    cy.get("table").get("td").contains("Address 2:").get("td").contains(addr2);
    
    })
    })

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});