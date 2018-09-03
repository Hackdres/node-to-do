/**
 * 
 */
const fs = require('fs');

let listadoToDo = [];



const cargarDB = () => {

    try {
        listadoToDo = require('../db/data.json');
    } catch (error) {
        listadoToDo = [];
    }
};

const getListado = () => {
    cargarDB();
    return listadoToDo;
};


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoToDo.push(porHacer);
    guardarDB();

    return porHacer;
};

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
};

const borrar = (descripcion) => {

    cargarDB();
    let nuevoListado = listadoToDo.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevoListado.length === listadoToDo.length) {
        return false;
    } else {
        listadoToDo = nuevoListado;
        guardarDB();
        return true;
    }
};

const guardarDB = () => {

    let data = JSON.stringify(listadoToDo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar el data.json', err)
    });
};


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}