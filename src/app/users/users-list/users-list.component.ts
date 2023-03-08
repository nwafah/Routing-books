import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from 'src/app/users-data/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnChanges {
  @Input() users$!: Observable<Users[]>;
  @Input() fullUsersList$!: Observable<Users[]>;
  @Input() inputSearch!: string;








  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputSearch'].currentValue) {
      this.users$.subscribe(data => {
        const result = data.filter(user =>
          user.name.toLocaleLowerCase().indexOf(this.inputSearch.toLocaleLowerCase()) !== -1);
        this.users$ = of(result);
      });
    }
    else {
      this.users$ = this.fullUsersList$;
    }
  }

}
