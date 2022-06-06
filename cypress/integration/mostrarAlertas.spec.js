/// <reference types="cypress"/>
describe("Pruebas para observar las alertas de error", ()=>{
    const url = 'http://127.0.0.1:5501/index.html';
    it('Click en el formulario del mapa', ()=>{
        cy.visit(url);
        cy.get('[data-cy=mapaFormulario]').submit();
    });
    it("Click en el formulario del directorio", ()=>{
        cy.visit(url);
        cy.get('[data-cy=directorioFormulario]').submit();
    });
});