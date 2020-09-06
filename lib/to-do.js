const fs = require('fs');
const colors = require('colors');

let listadoToDo = [];

const guardarDB = () => {
	let data = JSON.stringify(listadoToDo);

    return new Promise( (resolve, reject) => {
		fs.writeFile('db/data.json', data, (err) => {
	        if (err) reject(err);
	        else resolve(`Guardado en archivo data`);
	    });
	 });
}

const cargarDB = () => {
	try {
        listadoToDo = require('../db/data.json');
	} catch (err) {
        listadoToDo = [];
	}
}

const crear = (descripcion) => {
	cargarDB();
	
	let porHacer = {
		descripcion,
		completado: false
	}
	
	listadoToDo.push(porHacer);
	
	guardarDB()
        .then( archivo => console.log(`Archivo creado: `, colors.green(archivo)))
        .catch(err => console.log(err.red));
	
	return porHacer;
}

const getListado = () => {
	cargarDB();
	return listadoToDo;
}

const listar = () => {
	const listado =  getListado();
	for (let tarea of listado) {
		console.log('=====Por Hacer======='.green);
		console.log(tarea.descripcion);
		console.log(`Èstado: ${tarea.completado}`);
		console.log('====================='.green);		
	}
}


module.exports = {
	crear,
	listar
}