class todoPages{

    elements ={

        pagina : () => cy.visit('http://todomvc-app-for-testing.surge.sh/'),
        tareaInput : () => cy.get(".new-todo"),
        tareaLista : () => cy.get(".todo-list"),
        tareaListaeditada : () => cy.get(".edit"),
        tareaCheckbox : (tarea) => cy.get('.todo-list li').find('input[type="checkbox"]').check({ force : true}),
        tareaEditar : (tarea) => cy.get('.todo-list').dblclick(),
        tareaDelete : (tarea) => cy.get('.todo-list'),
        filtrarListacompletada : () => cy.contains('Completed'),
        filtrarListaactiva : () => cy.contains('Active'),
        filtrarListaall: () => cy.contains('All'),
    }
    
    visitarPagina(){
        this.elements.pagina();
    }

    agregarTarea(tarea){
        this.elements.tareaInput().type(`${tarea}{enter}`);
    }

    tareaCompletada(tarea){
        this.elements.tareaCheckbox(tarea).check({force : true});
    }

    tareanoCompletada(tarea){
        this.elements.tareaCheckbox(tarea).uncheck({force : true});
    }

    tareaEditar(tarea){
        this.elements.tareaEditar(tarea);
        this.elements.tareaListaeditada().clear().type(`${tarea}{enter}`);
    }

    tareaEliminar(tarea) {
        this.elements.tareaDelete(tarea).find('button').click({force: true});
    }

    listacompletadaFiltrar() {
        this.elements.filtrarListacompletada().click();
    }

    listaactivaFiltrar() {
        this.elements.filtrarListaactiva().click();
    }
    
    listaallFiltrar() {
        this.elements.filtrarListaall().click();
    }
}

module.exports = new todoPages();