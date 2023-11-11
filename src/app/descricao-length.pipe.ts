import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descricaoLength'
})
export class DescricaoLengthPipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (value.length < length){
      return value;
    }
    return value.slice(0, length)+"...";
  }

}
