import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  avatar = input<string>();
  name = input<string>();

  get imagePath() {
    // Get Image Path through getter
    return 'assets/users/' + this.avatar();
  }

  onSelectUser() {
    //this.currentIndex = (this.currentIndex + 1) % DUMMY_USERS.length;
  }
}
