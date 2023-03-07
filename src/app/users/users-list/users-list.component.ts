import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/users-data/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @Input() users$!:Observable<Users[]>;

}
