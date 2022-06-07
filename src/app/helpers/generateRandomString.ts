
/**
 * Función para generar cadena de string con valores
 * aleatorios
 * @param length    Longitud de la cadena a retornar
 * @returns 
 */
export function generateRandomString(length: number){
    let result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}