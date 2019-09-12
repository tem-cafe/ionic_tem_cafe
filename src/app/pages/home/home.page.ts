import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { TemCafeService } from 'src/app/services/tem-cafe/tem-cafe.service';
import { TemCafeModel } from '../../models/temCafe.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  colorTemCopo: string;
  colorTemAcucar: string;
  colorTemPo: string;
  colorTemCafe: string;

  quantityBottle = 0;
  limitMin = false;
  limitMax = false;

  name: string = null;
  email: string = null;
  ageCoffee: string = null;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private temCafeService: TemCafeService,
    private storage: Storage
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.storage.get('email')
      .then((email: string) => {
        this.email = email;
      })
      .catch((error: any) => {
        console.error('Storage email: ', error);
      });

    this.getTemCafe();
  }

  getTemCafe() {
    this.temCafeService.get()
      .then((data: any) => {
        this.setDataOfResponse(data);
      })
      .catch((error: any) => {
        console.error('Error tem cafe: ', error);
      });
  }

  postTemCafe(body: TemCafeModel) {
    body.name = this.name;
    body.email = this.email;

    this.temCafeService.post(body)
      .then((data: any) => {
        this.setDataOfResponse(data);
      })
      .catch((error: any) => {
        console.error('Error tem cafe: ', error);
      });
  }

  setDataOfResponse(data) {
    this.ageCoffee = data.date;
    this.name = data.name;

    (data.temCopo) ? this.colorTemCopo = 'success' : this.colorTemCopo = 'danger';
    (data.temAcucar) ? this.colorTemAcucar = 'success' : this.colorTemAcucar = 'danger';
    (data.temPo) ? this.colorTemPo = 'success' : this.colorTemPo = 'danger';
    (data.temCafe) ? this.colorTemCafe = 'success' : this.colorTemCafe = 'danger';
  }

  logout() {
    this.loginService.logout()
      .then((data: any) => {
        this.router.navigateByUrl('login');
      })
      .catch((error) => {
        console.error('Logout error: ', error);
      });
  }

  temCopo() {
    if (this.colorTemCopo === 'success') {
      this.postTemCafe({ temCopo: false });
    } else {
      this.postTemCafe({ temCopo: true });
    }
  }

  temAcucar() {
    if (this.colorTemAcucar === 'success') {
      this.postTemCafe({ temAcucar: false });
    } else {
      this.postTemCafe({ temAcucar: true });
    }
  }

  temPo() {
    if (this.colorTemPo === 'success') {
      this.postTemCafe({ temPo: false });
    } else {
      this.postTemCafe({ temPo: true });
    }
  }

  temCafe() {
    if (this.colorTemCafe === 'success') {
      this.postTemCafe({ temCafe: false });
    } else {
      this.postTemCafe({ temCafe: true });
    }
  }

  fizCafe() {
    this.postTemCafe({ fizCafe: true });
  }

}
