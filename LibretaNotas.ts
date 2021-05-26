import Nota from "./Nota";

class LibretaNotas {
    private notas: Array<Nota> = []

    public getNotas(): Array<Nota> {
        return this.notas;
    }
    public cargarNota(notaNueva: Nota) {
        this.notas.push(notaNueva);
    }
    public eliminarNota(listaNotas: Array<Nota>, item: string) {
        var i = parseInt(item);
        listaNotas.splice(i, 1);
    }
    public filtrarNotaAutor(apellidoAutor: String): Array<Nota> {
        var arrayNotas = this.notas;
        var arrayFiltrado = arrayNotas.filter(nota => nota.getAutor().getApellido() === apellidoAutor);
        return arrayFiltrado;
    }
    public filtrarNotaFecha(fecha: Date): Array<Nota> {
        var arrayNotas = this.notas;
        var arrayFiltrado = arrayNotas.filter(nota => nota.getFecha() >= fecha);
        return arrayFiltrado;
    }

}
export default LibretaNotas