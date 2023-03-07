import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from './users';

const USERS=[
  new Users(1,'Faisal','Riyadh','DevFaisal','1234','admin'),
  new Users(2,'Saad','Riyadh','DevSaad','1111','no-admin'),
  new Users(3,'Bader','Dammam','DevBader','2222','no-admin'),
  new Users(4,'Fahd','Jeddah','DevFahd','3333','no-admin'),
];

const userList$=of(USERS);

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getAllUsers():Observable<Users[]>{
    return userList$;
  }
}
