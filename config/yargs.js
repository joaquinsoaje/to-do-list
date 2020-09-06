const argv = require('yargs')
            .command('crear', 'Crea un elemento por hacer', 
            {
            	descripcion: {
            		demand: true,
            		alias: 'd',
            		desc: 'Descripción de la tarea por hacer'
            	} 
            })
            .command('actualizar', 'Actualizada el estado completado', 
            {
            	descripcion: {
            		demand: true,
            		alias: 'd',
            		desc: 'Descripción de la tarea por hacer'
            	},
            	completado: {
            		alias: 'c',
            		default: true,
            		desc: 'Marca como completado o pendiente una tarea'
            	}
            })
            .help('h')
            .alias('h', 'help')
            .argv;

const { help } = require('yargs');

module.exports = {
    argv
}