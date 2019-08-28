import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout()
      .then((data) => {
        this.router.navigateByUrl('login');
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }

}
