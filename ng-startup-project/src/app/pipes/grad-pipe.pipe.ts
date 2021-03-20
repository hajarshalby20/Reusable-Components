import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradPipe'
})
export class GradPipePipe implements PipeTransform {

  transform(value: string): string {
   if (value > 90){
return "A"
   } else if (value >80 && (value<90)) {
     return "B"
   }
   } else if (value >70 && (value<80)) {
     return "c"
   }
   } else if (value >60 && (value<70)) {
     return "D"
   }
   } else if (value >50 && (value<60)) {
     return "E"
   }
   } else (value >50 {
     return "F"
   }
  }

}

