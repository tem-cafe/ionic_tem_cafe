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

  name: string = null;
  email: string = null;
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

    this.userService.register(this.name, this.email, this.password)
      .then((data: any) => {
        this.btnEnabled = true;
        this.router.navigateByUrl('home');
      })
      .catch((error) => {
        this.name = '';
        this.email = '';
        this.password = '';
        console.log('Register error: ', error.error.err);
        this.btnEnabled = true;
      });
  }

}
