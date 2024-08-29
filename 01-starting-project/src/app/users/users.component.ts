import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    // Get Image Path through getter
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {}
}
