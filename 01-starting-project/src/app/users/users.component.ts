import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';

// Type vs Interface Statutement 
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

interface User {
  id: string;
  avatar: string;
  name: string;
}


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter();

  // Get Is used for getter Computed image
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
