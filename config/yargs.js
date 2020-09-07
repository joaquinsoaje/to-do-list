const descripcion = {
	demand: true,
	alias: 'd',
	desc: 'Descripción de la tarea'
};

const completado = {
	alias: 'c',
	default: true,
	desc: 'Marca como completado o pendiente una tarea'
};

const argv = require('yargs')
            .command('crear', 'Crea un elemento por hacer', 
            {
            	descripcion
			})
			.command('listar', 'Lista tareas', 
            {
            	completado
            })
            .command('actualizar', 'Actualizada el estado completado', 
            {
				descripcion,
				completado
			})
			.command('borrar', 'Borra la tarea', 
            {
            	descripcion
            })
            .help('h')
            .alias('h', 'help')
            .argv;

const { help } = require('yargs');

module.exports = {
    argv
}