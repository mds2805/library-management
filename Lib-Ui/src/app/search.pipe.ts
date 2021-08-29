import { Pipe, PipeTransform } from '@angular/core';
import { books } from './book';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
    if(!args) {
      return value;
    }
    return value.filter((books: { b_id: any,b_name:any,author:any })=> books.b_id.indexOf(args) > -1 ||   books.b_name.indexOf(args) > -1 ||books.author.indexOf(args) > -1);
}
}
