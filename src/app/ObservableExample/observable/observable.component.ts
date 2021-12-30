import { Component, OnInit } from '@angular/core';
import { Data, ObservableService } from '../service/observable.service';

@Component({
  selector: 'observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

  name = "Observable";
  user: Data[] = [];

  show: boolean = false;

  constructor(private authService: ObservableService) {  }

  doObs() {
    this.show = true;
    this.authService.getSub().subscribe(res => {
      this.user = res;
      console.log(
        "userSub: " + JSON.stringify(this.user)
      );
    });
  }

}
