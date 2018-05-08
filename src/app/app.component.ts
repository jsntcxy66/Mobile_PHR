import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TrackersPage } from './../pages/trackers/trackers';
import { MedicalrecordPage } from './../pages/medicalrecord/medicalrecord';
import { AllergyPage } from './../pages/allergy/allergy';
import { WelcomePage } from '../pages/welcome/welcome';
import { ContactPage } from '../pages/contact/contact';
import { AppointmentPage } from '../pages/appointment/appointment';

import { Pages } from '../shared/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Pages[];
  onelevelPages: Pages[];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
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
        icon: 'document',
        component: TrackersPage
      },
      {
        title: 'Contact Info',
        icon: 'contact',
        component: ContactPage
      },
      {
        title: 'Resources',
        icon: 'link',
        component: TrackersPage
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

  logout() {
    this.nav.push(WelcomePage);
  }
}
