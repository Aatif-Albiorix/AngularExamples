import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
 
  constructor(private http: Http) { }

  ngOnInit(): void {
      this.http.get('https://jsonplaceholder.typicode.com/users')
        .subscribe(data => {
          // console.log(data);
        });

        this.http.get('https://jsonplaceholder.typicode.com/posts/2')
        .subscribe(data => {
          // console.log(data);
        });

        this.http.get('https://jsonplaceholder.typicode.com/posts/2/comments')
        .subscribe(data => {
          // console.log(data);
        });
  }

}
