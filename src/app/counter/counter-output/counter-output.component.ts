import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  // @Input() counter: any;

  // counter: number | undefined;
  // counterSubscription: Subscription | undefined;
  // counter$: Observable<{ counter: number }> | undefined

  counter$ !: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.counterSubscription = this.store.select('counter').subscribe((data) => {
    //   this.counter = data.counter;
    // });

    this.counter$ = this.store.select(getCounter);
  }
  // ngOnDestroy(): void {
  //     if(this.counterSubscription) {
  //       this.counterSubscription.unsubscribe();
  //     }
  // } 

}
