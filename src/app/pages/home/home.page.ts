import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public colorTemCopo: string = 'success';
  public colorTemAcucar: string = 'success';
  public colorTemPo: string = 'success';

  quantityBottle = 0;
  limitMin = false;
  limitMax = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.updateBottle();
  }

  logout() {
    this.loginService.logout()
      .then((data) => {
        this.router.navigateByUrl('login');
      })
      .catch((error) => {
        console.error('Logout error: ', error);
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

  temCopo() {
    if(this.colorTemCopo === 'success') { 
      this.colorTemCopo = 'danger'
      console.log("Tem Copo", false);
    } else {
      this.colorTemCopo = 'success'
      console.log("Tem Copo", true);
    }
  }

  temPo() {
    if(this.colorTemPo === 'success') { 
      this.colorTemPo = 'danger'
      console.log("Tem Pó", false);
    } else {
      this.colorTemPo = 'success'
      console.log("Tem Pó", true);
    }
  }

  temAcucar() {
    if(this.colorTemAcucar === 'success') { 
      this.colorTemAcucar = 'danger'
      console.log("Tem Açucar", false);
    } else {
      this.colorTemAcucar = 'success'
      console.log("Tem Açucar", true);
    }
  }

  vote() {
    console.log("Votar");
  }

}
