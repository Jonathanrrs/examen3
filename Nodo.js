class Nodo{
    constructor(dato, prioridad) {
        this._dato = dato;
        this._prioridad = prioridad;
        this._siguiente = null;
        this._anterior = null;
    }

    get dato() {
        return this._dato;
    }

    get prioridad() {
        return this._prioridad;
    }

    get siguiente() {
        return this._siguiente;
    }
    get anterior() {
        return this._anterior;
    }
    set dato(valor) {
        this._dato = valor;
    }
    set prioridad(valor) {
        this._prioridad = valor;
    }
    set siguiente(valor) {
        this._siguiente = valor;
    }
    set anterior(valor) {
        this._anterior = valor;
    }
}