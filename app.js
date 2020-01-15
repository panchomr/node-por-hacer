const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
var colors = require('colors/safe');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log(colors.green('==================== Listado de tareas=================='));
        for (let tarea of listado) {

            console.log(colors.magenta(tarea.descripcion));
            console.log(colors.magenta(`Estado ${tarea.completado}`));
            console.log(colors.green('======================================='));

        }
        console.log(colors.green('==================== Fin de listado=================='));
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;


    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');
}