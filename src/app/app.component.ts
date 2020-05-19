import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './services/authentication.service';
import { NavController} from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/inicio',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'podium'
    },
    {
      title: 'Contas',
      url: '/contas',
      icon: 'apps'
    },
    {
      title: 'Fornecedor',
      url: '/fornecedor',
      icon: 'bus'
    },
    {
      title: 'Associado',
      url: '/register',
      icon: 'body'
    },
    {
      title: 'Faculdade',
      url: '/faculdade',
      icon: 'business'
    },
    {
      title: 'Fluxo de Caixa',
      url: '/fluxo',
      icon: 'folder'
    },
    {
      title: 'Ponto',
      url: '/ponto',
      icon: 'checkmark-circle'
    },
    {
      title: 'Relatorio',
      url: '/relatorio',
      icon: 'reader'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public authService: AuthenticateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('login');
    })
    .catch(error => {
      console.log(error);
    })
  }

  
}
