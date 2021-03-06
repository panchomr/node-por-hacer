const fs = require('fs');


let listadoporHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoporHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })

}

const cargarDB = () => {
    try {
        listadoporHacer = require('../db/data.json');
    } catch (error) {
        listadoporHacer = [];
    }

}

const getListado = () => {
    cargarDB();
    return listadoporHacer;
}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoporHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoporHacer.findIndex(tarea => tarea.descripcion == descripcion);

    if (index >= 0) {
        listadoporHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const borrar = (descripcion) => {
    cargarDB();

    let nuevolistado = listadoporHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoporHacer.length == nuevolistado.length) {
        return false
    } else {
        listadoporHacer = nuevolistado;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}