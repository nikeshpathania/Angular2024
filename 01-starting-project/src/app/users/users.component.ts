import { Component, computed, input } from '@angular/core';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  avatar = input<string>();
  name = input<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  onSelectUser() {}
}
