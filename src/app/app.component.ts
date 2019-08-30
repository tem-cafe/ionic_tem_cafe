import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ThemeService } from './services/theme/theme.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private themeService: ThemeService,
    private userService: UserService,
  ) {
    this.initializeApp();
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
    this.userService.isLogged()
      .then((data) => {
        if (data) {
          this.router.navigateByUrl('home');
        } else {
          this.router.navigateByUrl('login');
        }
      });
  }

}
