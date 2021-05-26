"use strict";
exports.__esModule = true;
var Nota = /** @class */ (function () {
    function Nota(autor) {
        this.fecha = new Date();
        //    private fechaMS = this.fecha.getTime();
        this.contenido = "";
        this.autor = autor;
    }
    Nota.prototype.getAutor = function () {
        return this.autor;
    };
    Nota.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Nota.prototype.getFecha = function () {
        return this.fecha;
    };
    Nota.prototype.setFecha = function (year, month, date) {
        this.fecha = new Date(year, month - 1, date);
    };
    Nota.prototype.getContenido = function () {
        return this.contenido;
    };
    Nota.prototype.setContenido = function (contenido) {
        this.contenido = contenido;
    };
    return Nota;
}());
exports["default"] = Nota;
