import Autor from "./Autor"

class Nota {
    private autor: Autor
    private fecha: Date = new Date();
    //    private fechaMS = this.fecha.getTime();
    private contenido: String = ""

    public constructor(autor: Autor) {
        this.autor = autor;
    }

    public getAutor(): Autor {
        return this.autor;
    }
    public setAutor(autor: Autor) {
        this.autor = autor;
    }
    public getFecha(): Date {
        return this.fecha;
    }
    public setFecha(year: number, month: number, date: number) {
        this.fecha = new Date(year, month - 1, date);
    }
    public getContenido(): String {
        return this.contenido;
    }
    public setContenido(contenido: String) {
        this.contenido = contenido;
    }
}
export default Nota