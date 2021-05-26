class Autor {
    private nombre: String = ""
    private apellido: String = ""
    private correo: String = ""

    public getNombre(): String {
        return this.nombre;
    }
    public setNombre(nombre: String) {
        this.nombre = nombre;
    }
    public getApellido(): String {
        return this.apellido;
    }
    public setApellido(apellido: String) {
        this.apellido = apellido;
    }
    public getCorreo(): String {
        return this.correo;
    }
    public setCorreo(correo: String) {
        this.correo = correo;
    }
}
export default Autor