import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BadInput } from '../common/bad-input';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(String) private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
        .map(response => response.json())
          .catch(this.handleError)
  }

  create(resource: any) {
   return this.http.post(this.url, JSON.stringify(resource))
    .map(response => response.json())
        .catch(this.handleError)
  }
  
  update(resource: any){
   return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
    .map(response => response.json())
        .catch(this.handleError);
  }

  delete(id: number) {
   return this.http.delete(this.url + '/' + id)
    .map(response => response.json())
        .catch(this.handleError); 
  }

  private handleError(error: Response) {
    if(error.status === 400)
    return Observable.throw(new BadInput(error.json()));
    
    if(error.status === 404)
        return Observable.throw(new NotFoundError());
        
       return Observable.throw(new AppError(error));
  }
}
