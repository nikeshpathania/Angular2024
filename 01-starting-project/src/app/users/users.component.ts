import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // @Output() select = new EventEmitter();
  // id = input.required<string>();
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();

  // Get Is used for getter Computed image
  get imagePath() {
    return 'assets/users/' + this.avatar();
  }

  onSelectUser() {
    this.select.emit(this.id());
  }
}
