const argv = require('./config/yargs').argv;

const toDo = require('./lib/to-do'); 
//console.log(argv);

let comando = argv._[0];

switch(comando) {
    case 'listar':
        toDo.listar(argv.completado);
        break;
    case 'crear':
        toDo.crear(argv.descripcion);
        break;
    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;
    case 'borrar':
        let borrar = toDo.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Comando no reconocido')
}