import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UsersPipe implements PipeTransform {
  transform(users, searchText: string): any {
    if (searchText.trim() === '') {
      return users;
    } else {
      return users.filter((user) => {
        return user.last_name.toLowerCase().includes(searchText.toLowerCase())
          || user.first_name.toLowerCase().includes(searchText.toLowerCase());
      });
    }
  }
}
