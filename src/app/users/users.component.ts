import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../users-data/users';
import { UsersService } from '../users-data/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersList$!:Observable<Users[]>;
  fullUsersList$!:Observable<Users[]>;
  inputSearch!:string;

  constructor(private usersService:UsersService){}
  
  ngOnInit(): void {
    this.usersList$=this.usersService.getAllUsers();
    this.fullUsersList$=this.usersService.getAllUsers();
  }


}
