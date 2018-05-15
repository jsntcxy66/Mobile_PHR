import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, App, AlertController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TrackersPage } from './../pages/trackers/trackers';
import { MedicalrecordPage } from './../pages/medicalrecord/medicalrecord';
import { AllergyPage } from './../pages/allergy/allergy';
import { WelcomePage } from '../pages/welcome/welcome';
import { ContactPage } from '../pages/contact/contact';
import { AppointmentPage } from '../pages/appointment/appointment';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProfilePage } from '../pages/profile/profile';
import { ResourcesPage } from '../pages/resources/resources';

import { Pages } from '../shared/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Pages[];
  onelevelPages: Pages[];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public app: App,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) {
    this.initializeApp();

    // used for ngFor and navigation
    this.pages = [
      {
        title: 'Health Records',
        icon: 'leaf',
        open: false,
        children: [
          {
            title: 'Lab Test',
            icon: 'medkit-outline',
            component: MedicalrecordPage
          },
          {
            title: 'Doctor Visit Notes',
            icon: 'medkit-outline',
            component: MedicalrecordPage
          },
          {
            title: 'Medication',
            icon: 'medkit-outline',
            component: MedicalrecordPage
          },
          {
            title: 'Immunization',
            icon: 'medkit-outline',
            component: MedicalrecordPage
          }
        ]
      },
      {
        title: 'History',
        icon: 'leaf',
        open: false,
        children: [
          {
            title: 'Allergy',
            icon: 'medkit-outline',
            component: AllergyPage
          },
          {
            title: 'Medical History',
            icon: 'medkit-outline',
            component: MedicalrecordPage
          },
          {
            title: 'Social History',
            icon: 'medkit-outline',
            component: MedicalrecordPage
          },
          {
            title: 'Surgical History',
            icon: 'medkit-outline',
            component: MedicalrecordPage
          },
          {
            title: 'Family History',
            icon: 'medkit-outline',
            component: MedicalrecordPage
          }
        ]
      }
    ];

    this.onelevelPages = [
      {
        title: 'Trackers',
        icon: 'infinite',
        component: TrackersPage
      },
      {
        title: 'Appointment',
        icon: 'calendar',
        component: AppointmentPage
      },
      {
        title: 'Profile',
        icon: 'person',
        component: ProfilePage
      },
      {
        title: 'Contacts Info',
        icon: 'contacts',
        component: ContactPage
      },
      {
        title: 'Resources',
        icon: 'link',
        component: ResourcesPage
      }
    ]

  }

  toggleSection(i) {
    this.pages[i].open = !this.pages[i].open;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goToDashboard() {
    this.nav.setRoot(DashboardPage);
  }

  logout() {
    // const root = this.app.getRootNav();
    // root.popToRoot();
    let confirm = this.alertCtrl.create({
      title: 'Confirm Logout',
      message: 'Are you sure to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('logout cancelled');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            let toast = this.toastCtrl.create({
              message: 'Log out successfully',
              duration: 2000
            });
            toast.present();
            this.nav.push(WelcomePage);
          }
        }
      ]
    });
    confirm.present();
  }

  // shouldShow() {
  //   let view = this.nav.getActive().name;
  //   console.log(view);
  //   return true;
  //   if (view == "WelcomePage") {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
}
