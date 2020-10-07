import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterId:number): any[] {
    const resultArr = [];
    if(value.length === 0 || filterId === 0){
      return value;
    }
    for(const item of value){
      if(item['service_type_id'] === filterId){
        resultArr.push(item);
      }
    }
    return resultArr;
  }

}
