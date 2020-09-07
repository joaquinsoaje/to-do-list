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

const getCopiaListado = () => {
	cargarDB();
	return listadoToDo;
}

const listar = (completado) => {
	cargarDB();
	console.log('c', completado);
	listado = listadoToDo.filter(tarea => tarea.completado == completado);

	for (let tarea of listado) {
		console.log('=====Por Hacer======='.green);
		console.log(tarea.descripcion);
		console.log(`Èstado: ${tarea.completado}`);
		console.log('====================='.green);		
	}
}

const actualizar = (descripcion, completado = true) => {
	cargarDB();
	let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion);
	if (index >= 0) {
		listadoToDo[index].completado = completado;
		guardarDB();
		return true;
	} else {
		return false;
	}
}

let borrar = (descripcion) => {
	cargarDB();
	let nuevoListado = listadoToDo.filter(tarea => tarea.descripcion !== descripcion);
	if (listadoToDo.length === nuevoListado.length) {
		return false;
	}
	listadoToDo = nuevoListado;
	guardarDB();
	return true;
}

module.exports = {
	crear,
	listar,
	actualizar,
	borrar
}