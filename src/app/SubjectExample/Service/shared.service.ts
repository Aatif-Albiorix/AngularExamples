import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  // userName = new Subject();

  userName = new BehaviorSubject('Albiorix Technology');
}
