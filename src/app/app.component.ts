import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  user: User;
  loginStatus: number;
  
  constructor() {
    this.user = new User();
    this.loginStatus = -1;
  }

  signUp(userForm) {
    console.log(userForm.form);
    if (userForm.form.value.email == "avengerdeep@gmail.com" && userForm.form.value.password == "avengerdeep")
      this.loginStatus = 1;
    else
      this.loginStatus = 0;
  }
}
