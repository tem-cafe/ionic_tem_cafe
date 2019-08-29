import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  quantityBottle = 0;
  limitMin = false;
  limitMax = false;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.updateBottle();
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

  updateBottle(quantity: number = 0) {
    this.quantityBottle = this.quantityBottle + quantity;

    if (this.quantityBottle < 0.1) {
      this.limitMin = true;
    } else if (this.quantityBottle > 0.9) {
      this.limitMax = true;
    } else {
      this.limitMin = false;
      this.limitMax = false;
    }
  }

}
