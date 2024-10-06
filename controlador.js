// JavaScript source code
// controllers/asignaturaController.js
const Asignatura = require('C:\Users\sound\source\repos\MiProyectoMVC\modeloAsignatura.js');

const asignaturas = [
    new Asignatura("Lenguajes de Programación II", "Santiago Ramirez Perez", "3 creditos", "Periodo 9"),
    new Asignatura("Base de Datos II", "Yahina Patricia Mejia", "3 creditos", "Periodo 7"),
    new Asignatura("Sistemas de Información", "Leonel Federico Savery Galarza", "3 creditos", "Periodo 10"),
    new Asignatura("Investigación de Operaciones II", "Eliseo Antonio Cabrera", "3 creditos", "Periodo 9"),
    new Asignatura("Electrónica I", "Manuel Emilio Perez Suarez", "3 creditos", "Periodo 11"),
    new Asignatura("Laboratorio de Electrónica I", "Aneika Eliezeth Luna", "1 creditos", "Periodo 11"),

];

const getAsignaturas = (req, res) => {
    res.render('asignaturas', { asignaturas });
}; 

module.exports = { getAsignaturas };
