const argv = require('./config/yargs').argv;

const toDo = require('./lib/to-do'); 
//console.log(argv);

let comando = argv._[0];

switch(comando) {
    case 'listar':
        toDo.listar();
        break;
    case 'crear':
        toDo.crear(argv.descripcion);
        break;
    case 'actualizar':
        break;
    default:
        console.log('Comando no reconocido')
}