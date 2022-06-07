
/**
 * Funcion para buscar valores de un array dentro de otro array
 * Esta funcion trabaja con arreglos unidimensionales
 * @param {Array<string>} find Arreglo que se utilizara para bsucar
 * @param {Array<string>} into Arreglo dentro del cual se buscara
 * @returns {boolean}
 */
export function findArrayIntoArray(find: Array<any>, into: Array<any>): boolean{
    let res = false;

    for (const key of find) {

      if( into.indexOf(key) !== -1 ){
        res = true;
        break;
      }

    }

    return res;
}