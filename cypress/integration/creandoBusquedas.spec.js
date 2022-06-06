/// <reference types="cypress"/>
describe("Pruebas para observar las alergtas de error", ()=>{
    const url = 'http://127.0.0.1:5501/index.html';
    it("Buscando la ubicación de la dirección", ()=>{
        cy.visit(url);
        cy.get('[data-cy=inputMapa]').type('Direccion');
        cy.get('[data-cy=mapaFormulario]').submit();
        cy.get('[data-cy=direccion]');
    });
    it("Buscando información de Servicios Escolares", ()=>{
        cy.visit(url);
        cy.get('[data-cy=inputDirectorio]').type('Servicios Escolares');
        cy.get('[data-cy=directorioFormulario]').submit();
    });
    it("Generando una búsqueda que no existe", ()=>{
        cy.visit(url);
        cy.get('[data-cy=inputDirectorio]').type('Búsqueda que no existe');
        cy.get('[data-cy=directorioFormulario]').submit();
        cy.get('[data-cy=]')
    });
});