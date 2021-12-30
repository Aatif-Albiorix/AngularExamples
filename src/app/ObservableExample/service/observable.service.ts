import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ObservableService {

  mydata: Data[] = [
    {"id":1, "name":"Aleja"},
    {"id":2, "name":"Giraldo"}
  ];
  constructor() { }

  getSub():Observable<Data[]>{
    let data = new Observable<Data[]>((observer: { next: (arg0: Data[]) => void; }) => {
          setTimeout(() => {
            observer.next(this.mydata);
          }, 3000);
    });
    return data;
  }

}

export class Data
{
  public id: number | undefined;
  public name: string | undefined;
}