"use strict";
exports.__esModule = true;
var Autor = /** @class */ (function () {
    function Autor() {
        this.nombre = "";
        this.apellido = "";
        this.correo = "";
    }
    Autor.prototype.getNombre = function () {
        return this.nombre;
    };
    Autor.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Autor.prototype.getApellido = function () {
        return this.apellido;
    };
    Autor.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Autor.prototype.getCorreo = function () {
        return this.correo;
    };
    Autor.prototype.setCorreo = function (correo) {
        this.correo = correo;
    };
    return Autor;
}());
exports["default"] = Autor;
