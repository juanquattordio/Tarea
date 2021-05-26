"use strict";
exports.__esModule = true;
var LibretaNotas = /** @class */ (function () {
    function LibretaNotas() {
        this.notas = [];
    }
    LibretaNotas.prototype.getNotas = function () {
        return this.notas;
    };
    LibretaNotas.prototype.cargarNota = function (notaNueva) {
        this.notas.push(notaNueva);
    };
    LibretaNotas.prototype.eliminarNota = function (listaNotas, item) {
        var i = parseInt(item);
        listaNotas.splice(i, 1);
    };
    LibretaNotas.prototype.filtrarNotaAutor = function (apellidoAutor) {
        var arrayNotas = this.notas;
        var arrayFiltrado = arrayNotas.filter(function (nota) { return nota.getAutor().getApellido() === apellidoAutor; });
        return arrayFiltrado;
    };
    LibretaNotas.prototype.filtrarNotaFecha = function (fecha) {
        var arrayNotas = this.notas;
        var arrayFiltrado = arrayNotas.filter(function (nota) { return nota.getFecha() >= fecha; });
        return arrayFiltrado;
    };
    return LibretaNotas;
}());
exports["default"] = LibretaNotas;
