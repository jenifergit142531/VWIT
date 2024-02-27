import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(propname:string,ptype:string): string {
    
    if(ptype.toLowerCase()=='holidayhome')
    return "propname_"+"HH";
  else
  return "propname_"+"colive";
  }

}
