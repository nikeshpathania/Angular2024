import { Component, computed, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
// Intialised Index when component is load
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  currentIndex: number = 0;

  @Input() avatar!: string;

  // get imagePath() {
  //   // Get Image Path through getter
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  selectUser() {
    // Rediclare randomIndex for scope based when click on selectUser method
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }

  /*selectUser() {
    this.selectedUser.set(DUMMY_USERS[this.currentIndex]);
    this.currentIndex = (this.currentIndex + 1) % DUMMY_USERS.length;
  }*/
}
