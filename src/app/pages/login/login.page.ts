import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { AtualizacaoService } from 'src/app/services/atualizacao/atualizacao.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  willLogin = false;

  name: string = null;
  email: string = null;
  password: string = null;
  btnEnabled = true;

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private loginService: LoginService,
    private atualizacaoService: AtualizacaoService,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.changeTheme();
  }

  async login(form?) {
    this.btnEnabled = false;
    // Se não enviar o formulário reseta os valores (logar sem autenticação)
    if (!form) {
      this.name = '';
      this.email = '';
      this.password = '';
    }

    this.loginService.login(this.email, this.password)
      .then((data: any) => {
        this.btnEnabled = true;
        this.router.navigateByUrl('home');
      })
      .catch((error) => {
        this.name = '';
        this.email = '';
        this.password = '';
        console.error('Login error : ', error);
        this.btnEnabled = true;
      });
  }

  entryWithAccount() {
    this.willLogin = true;
  }

  register() {
    this.router.navigateByUrl('register');
  }

  changeTheme() {
    const theme = {
      primary: '#ba7e64',
      secondary: '#FFFFFF',
      tertiary: '#924e07',
      success: '#00A000',
      warning: '#FFA706',
      danger: '#FF2A27',
      dark: '#55301f',
      medium: '#b38269',
      light: '#f9e8d4',
    };
    // const theme = {
    //   primary: '#4b3621',
    //   secondary: '#1E4382',
    //   tertiary: '#58595B',
    //   dark: '#37373d',
    //   medium: '#ababab',
    //   light: '#f4f5f8'
    // };

    this.themeService.setTheme(theme);
  }

  verificarAtualizacao() {
    this.presentLoading();
    this.atualizacaoService.verificarAtualizacao().subscribe(data => {
      window.location.href = data['link'];
    }, error => {
      this.presentToast('Seu app já está atualizado!');
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }
}
