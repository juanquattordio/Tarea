"use strict";
exports.__esModule = true;
var Nota_1 = require("./Nota");
var Autor_1 = require("./Autor");
var LibretaNotas_1 = require("./LibretaNotas");
var fs = require("fs");
//import fs from "fs";
//const fs = require("fs"); así es en JS
var autor1 = new Autor_1["default"];
autor1.setNombre("Juan");
autor1.setApellido("Quattordio");
autor1.setCorreo("juanquattordio@gmail.com");
var autor2 = new Autor_1["default"];
autor2.setNombre("Pedro");
autor2.setApellido("Fernandez");
autor2.setCorreo("pf@gmail.com");
var autor3 = new Autor_1["default"];
autor3.setNombre("Carlos");
autor3.setApellido("Juarez");
autor3.setCorreo("cj@gmail.com");
var nota1 = new Nota_1["default"](autor1);
nota1.setFecha(2020, 5, 29);
//nota1.setFecha("2021-05-22");
nota1.setContenido("Esta es mi primer nota");
var nota2 = new Nota_1["default"](autor1);
nota2.setFecha(2021, 6, 22);
//nota2.setFecha("2021-06-22");
nota2.setContenido("Esta es mi segunda nota");
var nota3 = new Nota_1["default"](autor2);
nota3.setFecha(2020, 5, 22);
//nota3.setFecha("2020-05-22");
nota3.setContenido("Esta es mi primer nota");
var nota4 = new Nota_1["default"](autor3);
nota4.setFecha(2022, 10, 29);
//nota4.setFecha("2020-10-29");
nota4.setContenido("Tambien es mi primer nota");
var libretaNotas = new LibretaNotas_1["default"];
libretaNotas.getNotas().push(nota1, nota2, nota3);
libretaNotas.cargarNota(nota4);
//libretaNotas.eliminarNota(notas2,2);
var notas2 = libretaNotas.getNotas();
var filtroAutor = "Quattordio";
var filtroFecha = new Date(2021, 1 - 1, 1);
if (libretaNotas.filtrarNotaAutor(filtroAutor).length > 0) {
    console.log("Estas son las notas del autor " + filtroAutor + ":");
    console.log(libretaNotas.filtrarNotaAutor(filtroAutor)); // para filtrar
}
else {
    console.log("No se encontró nota del autor buscado.");
}
if (libretaNotas.filtrarNotaFecha(filtroFecha).length > 0) {
    console.log("Estas son las notas cuya fecha es posterior a " + filtroFecha.getFullYear() + "-" + filtroFecha.getMonth() + 1 + "-" + filtroFecha.getDate() + ":");
    console.log(libretaNotas.filtrarNotaFecha(filtroFecha)); // para filtrar
}
else {
    console.log("No se encontró nota del autor buscado.");
}
//    CREAR UN JSON para guardar los datos
var ListasJSON = JSON.stringify(notas2, null, 2); // el segundo arg determina la forma en que se funciona el reemplazo, el tercero es el espacio entre líneas
var data = JSON.parse(ListasJSON);
fs.writeFile("./datos.json", ListasJSON, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Archivo cargado exitosamente");
    }
});
fs.readFile("./datos.json", "utf-8", function (err, ListasJSON) {
    if (err) {
        console.log(err);
    }
    else {
        try {
            //var data = JSON.parse(ListasJSON);
            //console.log(data);
        }
        catch (err) {
            console.log("Error parsing JSON", err);
        }
    }
});
