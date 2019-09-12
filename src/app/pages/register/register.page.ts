import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  willRegister = false;

  username: string = null;
  password: string = null;
  btnEnabled = true;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  async register() {
    this.btnEnabled = false;

    this.userService.register(this.username, this.password)
      .then((user: any) => {
        this.router.navigateByUrl('home');
      })
      .catch((error) => {
        this.username = '';
        this.password = '';
        console.log('Register error: ', error.error.err);
        this.btnEnabled = true;
      });
  }

}
