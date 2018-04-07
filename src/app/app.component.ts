import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { TrackersPage } from './../pages/trackers/trackers';
import { MedicalrecordPage } from './../pages/medicalrecord/medicalrecord';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { AllergyPage } from './../pages/allergy/allergy';

import { Pages } from '../shared/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Pages[];
  onelayerPages: Pages[];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [{
      title: 'Health Records',
      icon: 'leaf',
      open: false,
      children: [
        {
          title: 'Allergy',
          icon: 'medkit',
          component: AllergyPage
        },
        {
          title: 'Immunization',
          icon: 'medkit',
          component: MedicalrecordPage
        },
        {
          title: 'Lab Test',
          icon: 'medkit',
          component: MedicalrecordPage
        },
        {
          title: 'Doctor Visit Notes',
          icon: 'medkit',
          component: MedicalrecordPage
        },
        {
          title: 'Medical History',
          icon: 'medkit',
          component: MedicalrecordPage
        },
        {
          title: 'Social History',
          icon: 'medkit',
          component: MedicalrecordPage
        },
        {
          title: 'Surgical History',
          icon: 'medkit',
          component: MedicalrecordPage
        },
        {
          title: 'Family History',
          icon: 'medkit',
          component: MedicalrecordPage
        }
      ]
    }];

    this.onelayerPages = [
      {
        title: 'Trackers',
        icon: 'infinite',
        component: TrackersPage
      },
      {
        title: 'View Record',
        icon: 'stats',
        component: TrackersPage
      },
      {
        title: 'Reminder',
        icon: 'alarm',
        component: TrackersPage
      },
      {
        title: 'Profile',
        icon: 'document',
        component: TrackersPage
      },
      {
        title: 'Contact Info',
        icon: 'contact',
        component: TrackersPage
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
}
