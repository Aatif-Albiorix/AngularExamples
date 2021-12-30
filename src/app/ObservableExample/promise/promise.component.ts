import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {

  name = 'Promise';

  doSomething = (step = 1, result: boolean = true) => {
    return new Promise((resolve, reject) => {
      if (result) {
        setTimeout(() => {
          resolve(`do something complete: step: ${step}`);
        }, 2000)
      } else {
        reject('fail to do')
      }
    });
  }

  content = '';

  doPromise() {
    this.content = '';
    this.add('----------------using nomal promise-----------------');
    this.add('start');
    this.doSomething()
      .then(x => {
        this.add(x);
        return this.doSomething(2);
      })
      .then(x => {
        this.add(x)
        return this.doSomething(3);
      })
      .then(x => {
        this.add(x)
        this.add('after complete');
      });
    this.add('end');

    this.add('------------------------------------------');

    this.add('-----Iteration Occur After 2 second-------');
  }

  add(content: any) {
    this.content += `${content}<br>`;
    console.log(content);
  }

}
