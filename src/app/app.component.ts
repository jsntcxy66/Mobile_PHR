import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, App, AlertController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Pages } from '../shared/pages';

import { TrackersPage } from './../pages/trackers/trackers';
import { MedicalrecordPage } from './../pages/medicalrecord/medicalrecord';
import { WelcomePage } from '../pages/welcome/welcome';
import { ContactPage } from '../pages/contact/contact';
import { AppointmentPage } from '../pages/appointment/appointment';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProfilePage } from '../pages/profile/profile';
import { ResourcesPage } from '../pages/resources/resources';
import { AllergyHistoryPage } from '../pages/allergy-history/allergy-history';
import { FamilyHistoryPage } from './../pages/family-history/family-history';
import { MedicalHistoryPage } from '../pages/medical-history/medical-history';
import { SurgicalHistoryPage } from '../pages/surgical-history/surgical-history';
import { ImmunizationHistoryPage } from '../pages/immunization-history/immunization-history';
import { SocialHistoryPage } from '../pages/social-history/social-history';
import { DoctorVisitNotesPage } from '../pages/doctor-visit-notes/doctor-visit-notes';
import { MedicationPage } from '../pages/medication/medication';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = WelcomePage;
  rootPage: any = DashboardPage;

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
            title: 'Test Result',
            icon: 'medkit-outline',
            component: MedicalrecordPage
          },
          {
            title: 'Doctor Visit Notes',
            icon: 'medkit-outline',
            component: DoctorVisitNotesPage
          },
          {
            title: 'Medication',
            icon: 'medkit-outline',
            component: MedicationPage
          },
          {
            title: 'Immunization',
            icon: 'medkit-outline',
            component: ImmunizationHistoryPage
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
            component: AllergyHistoryPage
          },
          {
            title: 'Medical History',
            icon: 'medkit-outline',
            component: MedicalHistoryPage
          },
          {
            title: 'Social History',
            icon: 'medkit-outline',
            component: SocialHistoryPage
          },
          {
            title: 'Surgical History',
            icon: 'medkit-outline',
            component: SurgicalHistoryPage
          },
          {
            title: 'Family History',
            icon: 'medkit-outline',
            component: FamilyHistoryPage
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
          text: 'Logout',
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

}
