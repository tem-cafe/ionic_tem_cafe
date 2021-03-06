import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ThemeService } from './services/theme/theme.service';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  deferredPrompt: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private themeService: ThemeService,
    private loginService: LoginService
  ) {
    this.initializeApp();

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.addToHome();
    });

    this.isLogged();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#4b3621');
      this.splashScreen.hide();

      this.themeService.setTheme;
    });
  }

  isLogged() {
    this.loginService.isLogged()
      .then((data) => {
        if (data) {
          this.router.navigateByUrl('home');
        } else {
          this.router.navigateByUrl('login');
        }
      });
  }

  addToHome() {
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        this.deferredPrompt = null;
      });
  }

}
