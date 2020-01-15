const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};



const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion

    })
    //.command('listar', 'Muestra Todas las tareas', options)
    .command('actualizar', 'actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'actualiza una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}