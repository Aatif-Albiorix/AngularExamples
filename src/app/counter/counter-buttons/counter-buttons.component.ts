import { AppState } from './../../store/app.state';
import { CounterState } from './../state/counter.state';
import { increment, decrement, reset } from './../state/counter.actions';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement= new EventEmitter<void>();
  // @Output() reset= new EventEmitter<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  onIncrement() {
    // this.increment.emit();
    this.store.dispatch(increment());
  }
  onDecrement() {
    // this.decrement.emit();
    this.store.dispatch(decrement());

  }
  onReset() {
    // this.reset.emit();
    this.store.dispatch(reset());
  }
}
