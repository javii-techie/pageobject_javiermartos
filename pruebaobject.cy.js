import todoPages from "../pages/todoPages";

describe('TodoMVC Test', () => {
    it('Visitar página', () => {
        todoPages.visitarPagina();
    })

    it('Añadir tarea', () => {
        todoPages.visitarPagina();
        todoPages.agregarTarea("Agregar Tarea");
        todoPages.elements.tareaLista().should('contain', 'Agregar Tarea');
    })

    it('Marcar como completada', () => {
        todoPages.visitarPagina();
        todoPages.agregarTarea("Agregar Tarea");
        todoPages.tareaCompletada("Agregar Tarea");
        todoPages.elements.tareaLista().should('contain', 'Agregar Tarea');
    })

    it('Desmarcar la tarea completada', () => {
        todoPages.visitarPagina();
        todoPages.agregarTarea("Agregar Tarea");
        todoPages.tareaCompletada("Agregar Tarea");
        todoPages.tareanoCompletada("Agregar tarea");
        todoPages.elements.tareaLista().should('contain', 'Agregar Tarea');
    })

    it('Editar tarea', () => {
        todoPages.visitarPagina();
        todoPages.agregarTarea("Agregar Tarea");
        todoPages.tareaEditar("Agregar Tarea");

    })

    it('Eliminar tarea', () => {
        todoPages.visitarPagina();
        todoPages.agregarTarea("Agregar Tarea");
        todoPages.tareaEliminar("Agregar Tarea");
    })

    it('Filtrar las tareas', () => {
        todoPages.visitarPagina();
        todoPages.agregarTarea("Agregar Tarea");
        todoPages.tareaCompletada("Agregar Tarea");
        todoPages.listacompletadaFiltrar();
        todoPages.elements.tareaLista().should('contain', 'Agregar Tarea');

        todoPages.agregarTarea("Agregar Tarea 2");
        todoPages.listaactivaFiltrar();
        todoPages.elements.tareaLista().should('contain', 'Agregar Tarea 2');

        todoPages.listaallFiltrar();
        todoPages.elements.tareaLista().should('contain', 'Agregar Tarea');
        todoPages.elements.tareaLista().should('contain', 'Agregar Tarea 2');
    })
})