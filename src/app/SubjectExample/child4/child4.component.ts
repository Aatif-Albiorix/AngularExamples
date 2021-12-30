import { Component } from '@angular/core';
import { SharedService } from '../Service/shared.service';

@Component({
  selector: 'child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component {

  username: any;
  active: boolean = true;

  constructor(private shared:  SharedService){
    this.shared.userName.subscribe(uname => {
      this.username = uname
    })
  }

  updateUsername(uname: { value: string; }) {
    this.shared.userName.next(uname.value);
    uname.value = '';
    this.active = !this.active;
  }
  
  onKey(event: KeyboardEvent) { 
    // if value is not empty the set click to false otherwise true
    this.active = (event.target as HTMLInputElement).value === '' ? true:false;
  }
}
