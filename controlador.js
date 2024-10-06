// JavaScript source code
// controllers/asignaturaController.js
const Asignatura = require('C:\Users\sound\source\repos\MiProyectoMVC\modeloAsignatura.js');

const asignaturas = [
    new Asignatura("Lenguajes de Programaci�n II", "Santiago Ramirez Perez", "3 creditos", "Periodo 9"),
    new Asignatura("Base de Datos II", "Yahina Patricia Mejia", "3 creditos", "Periodo 7"),
    new Asignatura("Sistemas de Informaci�n", "Leonel Federico Savery Galarza", "3 creditos", "Periodo 10"),
    new Asignatura("Investigaci�n de Operaciones II", "Eliseo Antonio Cabrera", "3 creditos", "Periodo 9"),
    new Asignatura("Electr�nica I", "Manuel Emilio Perez Suarez", "3 creditos", "Periodo 11"),
    new Asignatura("Laboratorio de Electr�nica I", "Aneika Eliezeth Luna", "1 creditos", "Periodo 11"),

];

const getAsignaturas = (req, res) => {
    res.render('asignaturas', { asignaturas });
}; 

module.exports = { getAsignaturas };
