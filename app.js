/**
 * 
 */
const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDO = require('./to-do/to-do');


//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = toDO.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = toDO.getListado();

        for (let tarea of listado) {
            console.log('-------------- TO DO ---------------'.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado} `);
            console.log('------------------------------------'.green);
        }

        //console.log('Listar las tareas por hacer');

        break;
    case 'actualizar':

        let actualizado = toDO.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = toDO.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');

}