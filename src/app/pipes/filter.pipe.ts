import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    
    transform(
        array: any[],
        textSearch: string,
        column: string
    ): any[] {
        if (textSearch === '' || textSearch==undefined) {
            return array
        }
        textSearch = textSearch.toLowerCase();
        return array.filter(item => {
            console.log('item='+JSON.stringify(item))
            return item[column].toLowerCase().includes(textSearch)
        })
    }

}
