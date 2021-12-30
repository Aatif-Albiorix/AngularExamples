import { Component } from '@angular/core';
import { SharedService } from '../Service/shared.service';

@Component({
  selector: 'behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.css']
})
export class BehaviorComponent {

  username: any;

  constructor(private shared:  SharedService){
    this.shared.userName.subscribe(uname => {
      this.username = uname
    })
  }
}
