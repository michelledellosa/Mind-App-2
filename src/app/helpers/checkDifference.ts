
/**
 * Funcion para comparar y verificar si existe algun cambio
 * entre los dos objetos
 * @param keys      Arreglo de claves de los campos
 * @param oldVal    Objeto con valor anterior
 * @param newVal    Objeto con los nuevos valores
 * @returns 
 */
 export function checkDiff(keys: Array<string>, oldVal: any, newVal: any): boolean{
    let res = false;

    /** Recorrer claves */
    for (const key of keys) {

        /** Si los valores no coinciden */
        if(oldVal[key] !== newVal[key]){
            res = true;
            break;
        }
    }

    return res;
}