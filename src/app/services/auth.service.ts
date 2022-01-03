import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  getAll(): Observable<Object> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
