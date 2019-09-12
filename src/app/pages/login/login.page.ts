import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  willLogin = false;

  username: string = null;
  password: string = null;
  btnEnabled = true;

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.changeTheme();
  }

  async login(form?) {
    this.btnEnabled = false;
    // Se não enviar o formulário reseta os valores (logar sem autenticação)
    if (!form) {
      this.username = '';
      this.password = '';
    }

    this.loginService.login(this.username, this.password)
      .then((user: any) => {
        this.router.navigateByUrl('home');
      })
      .catch((error) => {
        this.username = '';
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

}
