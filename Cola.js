class Cola{
    constructor() {
        this._inicio = null;
    }

    agregar(dato) {
        if(this._inicio == null) {
            this._inicio = dato;
        }
        else if(this._inicio.prioridad == 1) {
            let tem = this._inicio;
            this._inicio = this._inicio.siguiente;
            return tem;
        }
        else{
            let tem = this._inicio;
            while(!tem.siguiente==null) {
                if(tem.prioridad == 1) {
                    tem.anterior.siguiente = tem.siguiente
                    temp.siguiente.anterio = tem.anterior;

                }
            }
        }
    }
}




