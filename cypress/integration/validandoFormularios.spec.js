/// <reference types="cypress"/>
describe("Pruebas de validación a los formularios", ()=>{
    const url = 'http://127.0.0.1:5501/index.html';
    it("Validando el formulario del mapa", ()=>{
        cy.visit(url);
        cy.get('[data-cy=mapaFormulario]').submit();
        cy.get("[data-cy=alerta]")
            .invoke('text')
            .should('equal', 'Este campo es obligatorio');
    });
    it("Validando el formulario del directorio", ()=>{
        cy.visit(url);
        cy.get('[data-cy=directorioFormulario]').submit();
        cy.get("[data-cy=alerta]")
            .invoke('text')
            .should('equal', 'Este campo es obligatorio');
    });

})