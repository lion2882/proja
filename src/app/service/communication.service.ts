import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  $listItems = new Subject<string>();
  constructor() { }

  // submitNewValue(value: string) {
  //   // Putting a new value into our pipe
  //   this.$listItems.next(value);
  // }


}
