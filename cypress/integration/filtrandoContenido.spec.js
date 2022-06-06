/// <reference types="cypress"/>
describe("Filtrando contenido por las diferentes categorías del directorio", ()=>{
    const url = 'http://127.0.0.1:5501/index.html';
    it("Filtrando contenido por carreras", ()=>{
        cy.visit(url);
        cy.get('[data-cy=carreras]').click();
        cy.get('[data-cy=sistemas]')
    });
    it("Filtrando contenido por Servicios", ()=>{
        cy.visit(url);
        cy.get('[data-cy=servicios]').click();
        cy.get('[data-cy=planeacion]');
    });
    it("Filtrando contenido por Edificios", ()=>{
        cy.visit(url);
        cy.get('[data-cy=edificios]').click();
        cy.get('[data-cy=direccion]');
    });
});