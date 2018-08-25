webpackJsonp([42],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment_add_appointments_appointment_add_appointments__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appointment_edit_appointment_edit__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appointment_appointment__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppointmentPage = (function () {
    function AppointmentPage(navCtrl, navParams, modalCtrl, ap, auth, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.ap = ap;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.appointments = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        //get appointments which have already been sorted by time
        this.ap.getAppointment(this.auth.userId)
            .subscribe(function (app) { return _this.appointments = app; }, function (errmess) { return _this.errMess = errmess; });
    }
    AppointmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentPage');
    };
    AppointmentPage.prototype.addAppointment = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__appointment_add_appointments_appointment_add_appointments__["a" /* AppointmentAddAppointmentsPage */]);
        modal.present();
        modal.onWillDismiss(function () {
            _this.ap.getAppointment(_this.auth.userId)
                .subscribe(function (app) { return _this.appointments = app; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    AppointmentPage.prototype.editRecord = function (i) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__appointment_edit_appointment_edit__["a" /* AppointmentEditPage */], {
            "recordid": i
        });
        modal.present();
        modal.onWillDismiss(function () {
            _this.ap.getAppointment(_this.auth.userId)
                .subscribe(function (app) { return _this.appointments = app; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    AppointmentPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.ap.deleteAppointment(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.ap.getAppointment(_this.auth.userId)
                                .subscribe(function (app) { return _this.appointments = app; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    AppointmentPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    AppointmentPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appointment',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/appointment/appointment.html"*/'<!--\n  Generated template for the AppointmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Appointment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>My Appointments</ion-list-header>\n    <ion-item-sliding *ngFor="let appointment of appointments; let i = index">\n      <ion-item>\n        <h2>{{appointment.date | date}} at {{appointment.time}}</h2>\n        <h3>{{appointment.location}}</h3>\n        <p>{{appointment.firstname | titlecase}} {{appointment.lastname | titlecase}}</p>\n        <!-- <ion-note item-end>{{appointment.gender | titlecase}}</ion-note> -->\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="primary" (click)="editRecord(i)">\n          <ion-icon name="create"></ion-icon>\n          Edit\n        </button>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <div>\n    <button ion-button block (click)="addAppointment()">Schedule New One</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/appointment/appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_appointment_appointment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], AppointmentPage);
    return AppointmentPage;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabTestDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_health_records_health_records__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the LabTestDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LabTestDetailPage = (function () {
    function LabTestDetailPage(navCtrl, navParams, qp, qcp, auth, loadingCtrl, toastCtrl, alertCtrl, hrp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.hrp = hrp;
        this.unit = [];
        this.showChart = false;
        this.tab = 'form';
        this.color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
        this.data = [];
        this.date = [];
        this.results = [];
        this.abnormalColor = [];
        this.lineChartOptions = { responsive: true };
        this.lineChartLabels = [];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.charts = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        this.title = navParams.get('title');
        var shortTitle;
        if (this.title.indexOf('(') != -1) {
            shortTitle = this.title.slice(0, this.title.indexOf('(') - 1);
        }
        else
            shortTitle = this.title;
        this.id = navParams.get('id');
        this.subtest = navParams.get('subtest');
        this.questions = this.qp.getLabTestQuestions(shortTitle);
        this.form = this.qcp.toFormGroup(this.questions);
        this.navcolor = this.color[(this.id + 1) % 3];
        // if (this.id == 2) {
        //   this.data = [
        //     {
        //       "subtest": "BMP (Basic Metabolic Panel)",
        //       "open": true,
        //       "unit": "mg/dL",
        //       "results": [
        //         {
        //           "result": "22",
        //           "abnormal": true,
        //           "note": 'XDXDXDXDXDXDXDXDXDXDXDXDXDXDXDXD',
        //           "date": "2011-12-10T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "30",
        //           "abnormal": false,
        //           "note": ':):):)',
        //           "date": "2011-12-09T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "40",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-08T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "24",
        //           "abnormal": true,
        //           "note": ':D',
        //           "date": "2011-12-07T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "18",
        //           "abnormal": true,
        //           "note": '',
        //           "date": "2011-12-06T02:08:21.199Z"
        //         },
        //         {
        //           "result": "26",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-05T02:14:16.365Z"
        //         },
        //         {
        //           "result": "36",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-04T02:30:10.570Z"
        //         },
        //         {
        //           "result": "45",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-03T02:52:17.718Z"
        //         },
        //         {
        //           "result": "35",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-02T01:38:47.452Z"
        //         }
        //       ]
        //     },
        //     {
        //       "subtest": "BMP 3",
        //       "open": false,
        //       "unit": "",
        //       "results": [
        //         {
        //           "result": "negative",
        //           "abnormal": true,
        //           "note": 'XDXDXDXDXDXDXDXDXDXDXDXDXDXDXDXD',
        //           "date": "2011-12-10T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "positive",
        //           "abnormal": false,
        //           "note": ':):):)',
        //           "date": "2011-12-09T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "positive",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-08T17:57:28.556094Z"
        //         }
        //       ]
        //     },
        //     {
        //       "subtest": "BMP (Basic Metabolic Panel) (Other)",
        //       "open": false,
        //       "unit": "mg/dL",
        //       "results": [
        //         {
        //           "result": "12",
        //           "abnormal": true,
        //           "note": 'XDXDXDXDXDXDXDXDXDXDXDXDXDXDXDXD',
        //           "date": "2011-12-10T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "53",
        //           "abnormal": false,
        //           "note": ':):):)',
        //           "date": "2011-12-09T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "88",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-08T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "26",
        //           "abnormal": true,
        //           "note": ':D',
        //           "date": "2011-12-07T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "40",
        //           "abnormal": true,
        //           "note": '',
        //           "date": "2011-12-06T02:08:21.199Z"
        //         },
        //         {
        //           "result": "30",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-05T02:14:16.365Z"
        //         }
        //       ]
        //     },
        //   ];
        // }
        // this.unit = [];
        // this.data.forEach(record => {
        //   this.unit.push(record.unit);
        // });
        // console.log(this.unit);
        // this.drawcanvas();
        // this.hrp.getLabtTest(this.auth.userId, this.id)
        //   .subscribe(records => {
        //     this.records = records;
        //     console.log(this.records);
        //     if (this.records.length != 0) {
        //       // set extension panel of first category in record history in 'open' status
        //       this.records[0]['open'] = true;
        //       for (let i = 1; i < this.records.length; i++) {
        //         this.records[i]['open'] = false;
        //       }
        //       //get unit array
        //       this.unit = [];
        //       this.records.forEach(record => {
        //         this.unit.push(record.unit);
        //       });
        //     }
        //     this.data = this.records;
        //     console.log(this.data);
        //     if (this.data.length != 0) this.drawcanvas();
        //   },
        //     errmess => this.errMess = <any>errmess);
    }
    LabTestDetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, i;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.hrp.getLabTest(this.auth.userId, this.id).toPromise()];
                    case 1:
                        _a.records = (_b.sent());
                        console.log(this.records);
                        if (this.records.length != 0) {
                            // set extension panel of first category in record history in 'open' status
                            this.records[0]['open'] = true;
                            for (i = 1; i < this.records.length; i++) {
                                this.records[i]['open'] = false;
                            }
                            this.unit = [];
                            this.records.forEach(function (record) {
                                // get unit array
                                _this.unit.push(record.unit);
                                // control chart display
                                if (record.unit.length != 0)
                                    _this.showChart = true;
                            });
                            console.log(this.showChart);
                        }
                        this.data = this.records;
                        console.log(this.data);
                        if (this.data.length != 0)
                            this.drawcanvas();
                        return [2 /*return*/];
                }
            });
        });
    };
    LabTestDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LabTestDetailPage');
    };
    LabTestDetailPage.prototype.drawcanvas = function () {
        var _this = this;
        this.charts = [];
        for (var i = 0; i < this.data.length; i++) {
            this.date = [];
            this.results = [];
            this.abnormalColor = [];
            if (this.data[i].unit.length != 0) {
                this.data[i].results.forEach(function (result) {
                    _this.date.push(__WEBPACK_IMPORTED_MODULE_6_moment__(result.date).format('MM/DD'));
                    _this.results.push(result.result);
                    if (result.abnormal == true)
                        _this.abnormalColor.push('red');
                    else
                        _this.abnormalColor.push('rgba(148,159,177,1)');
                });
                this.date.reverse();
                this.results.reverse();
                this.abnormalColor.reverse();
                console.log(this.abnormalColor);
                this.lineChartLabels = this.date;
                this.lineChartData = [{ data: this.results, label: this.data[i].subtest }];
                this.lineChartColors = [{
                        backgroundColor: 'rgba(148,159,177,0.2)',
                        borderColor: 'rgba(148,159,177,1)',
                        pointBackgroundColor: this.abnormalColor,
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                    }];
                this.charts.push({
                    lineChartData: this.lineChartData,
                    lineChartLabels: this.lineChartLabels,
                    lineChartOptions: this.lineChartOptions,
                    lineChartColors: this.lineChartColors,
                    lineChartLegend: this.lineChartLegend,
                    lineChartType: this.lineChartType
                });
            }
            console.log(this.charts);
        }
    };
    LabTestDetailPage.prototype.toggleSection = function (i) {
        this.data[i].open = !this.data[i].open;
    };
    LabTestDetailPage.prototype.showNotes = function (i, j) {
        var alert = this.alertCtrl.create({
            message: 'Notes: ' + this.data[i].results[j].note,
            enableBackdropDismiss: true
        });
        alert.present();
    };
    LabTestDetailPage.prototype.chartHovered = function ($event) {
    };
    LabTestDetailPage.prototype.chartClicked = function ($event) {
    };
    LabTestDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payload = this.form.value;
        console.log(payload);
        this.hrp.addLabTest(this.auth.userId, this.id, payload)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.hrp.getLabTest(_this.auth.userId, _this.id)
                .subscribe(function (records) {
                _this.records = records;
                console.log(_this.records);
                if (_this.records.length != 0) {
                    // set extension panel of first category in record history in 'open' status
                    _this.records[0]['open'] = true;
                    for (var i = 1; i < _this.records.length; i++) {
                        _this.records[i]['open'] = false;
                    }
                    _this.unit = [];
                    _this.records.forEach(function (record) {
                        // get unit array
                        _this.unit.push(record.unit);
                        // control chart display
                        if (record.unit.length != 0)
                            _this.showChart = true;
                    });
                }
                _this.data = _this.records;
                console.log(_this.data);
                if (_this.data.length != 0)
                    _this.drawcanvas();
                _this.tab = 'history';
            }, function (errmess) { return _this.errMess = errmess; });
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    LabTestDetailPage.prototype.deleteRecord = function (i, j) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.hrp.deleteLabTest(_this.auth.userId, _this.id, i, j)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.hrp.getLabTest(_this.auth.userId, _this.id)
                                .subscribe(function (records) {
                                _this.records = records;
                                console.log(_this.records);
                                if (_this.records.length != 0) {
                                    // set extension panel of first category in record history in 'open' status
                                    _this.records[0]['open'] = true;
                                    for (var i_1 = 1; i_1 < _this.records.length; i_1++) {
                                        _this.records[i_1]['open'] = false;
                                    }
                                    _this.unit = [];
                                    _this.records.forEach(function (record) {
                                        // get unit array
                                        _this.unit.push(record.unit);
                                        // control chart display
                                        if (record.unit.length != 0)
                                            _this.showChart = true;
                                    });
                                }
                                _this.data = _this.records;
                                console.log(_this.data);
                                if (_this.data.length != 0)
                                    _this.drawcanvas();
                                _this.tab = 'history';
                            }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    LabTestDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    LabTestDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LabTestDetailPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    LabTestDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lab-test-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/lab-test-detail/lab-test-detail.html"*/'<!--\n  Generated template for the MedicalRecordDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar [color]="navcolor">\n    <ion-title>{{title | titlecase}}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar [color]="navcolor">\n    <ion-segment color="light" [(ngModel)]="tab">\n      <ion-segment-button value="form">\n        TRACK\n      </ion-segment-button>\n      <ion-segment-button value="history">\n        HISTORY\n      </ion-segment-button>\n      <ion-segment-button value="chart">\n        CHART\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="tab">\n    <div *ngSwitchCase="\'form\'">\n      <ion-card>\n        <ion-card-content>\n          <div>\n            <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n              <div *ngFor="let question of questions">\n                <ion-item>\n                  <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n                </ion-item>\n              </div>\n\n              <div>\n                <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n              </div>\n\n            </form>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'history\'">\n      <ion-list *ngIf="data.length!=0">\n        <ion-card *ngFor="let d of data; let i = index">\n          <ion-card-header>\n            <ion-item (click)="toggleSection(i)" no-padding>\n              <ion-label text-wrap>{{d.subtest}}</ion-label>\n              <ion-icon item-right name="arrow-forward" *ngIf="!d.open"></ion-icon>\n              <ion-icon item-right name="arrow-down" *ngIf="d.open"></ion-icon>\n            </ion-item>\n          </ion-card-header>\n          <ion-list *ngIf="d.open && d.results" no-padding>\n            <ion-item-sliding *ngFor="let r of d.results; let j = index">\n              <ion-item (click)="showNotes(i, j)">\n                <h3 *ngIf="!r.abnormal">{{r.result}} {{unit[i]}}</h3>\n                <h3 *ngIf="r.abnormal" style="color:red">{{r.result}} {{unit[i]}}</h3>\n                <ion-note item-right>{{r.date | date}}</ion-note>\n              </ion-item>\n              <ion-item-options side="right" icon-start>\n                <button ion-button color="danger" (click)="deleteRecord(i, j)">\n                  <ion-icon name="trash"></ion-icon>\n                  Delete\n                </button>\n              </ion-item-options>\n            </ion-item-sliding>\n          </ion-list>\n        </ion-card>\n      </ion-list>\n      <ion-card [hidden]="data.length!=0">\n        <ion-card-header>No record.</ion-card-header>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'chart\'">\n      <div *ngIf="showChart">\n        <div *ngFor="let chart of charts" style="display: block;">\n          <canvas baseChart [datasets]="chart.lineChartData" [labels]="chart.lineChartLabels" [options]="chart.lineChartOptions" [colors]="chart.lineChartColors"\n            [legend]="chart.lineChartLegend" [chartType]="chart.lineChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n        </div>\n      </div>\n      <ion-card [hidden]="showChart">\n        <ion-card-header>No record.</ion-card-header>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/lab-test-detail/lab-test-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_7__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], LabTestDetailPage);
    return LabTestDetailPage;
}());

//# sourceMappingURL=lab-test-detail.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medication_detail_medication_detail__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MedicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicationPage = (function () {
    function MedicationPage(navCtrl, navParams, modalCtrl, auth, alertCtrl, toastCtrl, hrp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.hrp = hrp;
        this.records = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        // this.records = [
        //   {
        //     name: 'Aspirin',
        //     frequency: 'Take 1 with food',
        //     date: '2018/02/08'
        //   },
        //   {
        //     name: 'Lyrica',
        //     frequency: '75mg, Take 1 with food',
        //     date: '2018/04/03'
        //   }
        // ];
        // get records
        this.hrp.getMedication(this.auth.userId)
            .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
    }
    MedicationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicationPage');
    };
    MedicationPage.prototype.addMedication = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__medication_detail_medication_detail__["a" /* MedicationDetailPage */]);
        modal.present();
        modal.onWillDismiss(function () {
            _this.hrp.getMedication(_this.auth.userId)
                .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    MedicationPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.hrp.deleteMedication(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.hrp.getMedication(_this.auth.userId)
                                .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    MedicationPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    MedicationPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MedicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-medication',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medication/medication.html"*/'<!--\n  Generated template for the MedicationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MEDICATION</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.length!=0">\n    <ion-list-header>Medication History</ion-list-header>\n    <ion-item-sliding *ngFor="let record of records; let i = index">\n      <ion-item>\n        <h3>Medication: {{record.name}}</h3>\n        <h3>Frequency: {{record.frequency}}</h3>\n        <p>Date: {{record.date | date}}</p>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No medication record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addMedication()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medication/medication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], MedicationPage);
    return MedicationPage;
}());

//# sourceMappingURL=medication.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__immunization_immunization__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ImmunizationHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImmunizationHistoryPage = (function () {
    function ImmunizationHistoryPage(navCtrl, navParams, auth, alertCtrl, toastCtrl, hrp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.hrp = hrp;
        this.records = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        // this.records = [
        //   {
        //     vaccine: 'MMR',
        //     schedule: '1 or 2 doses depending on indication',
        //     ageGroup: 'Adult',
        //     date: '2018/02/08',
        //     age: 30
        //   },
        //   {
        //     vaccine: 'Influenza',
        //     schedule: 'Annual vaccination (IIV) 1 or 2 doses',
        //     ageGroup: 'Child and Adolescent',
        //     date: '2018/04/15',
        //     age: 12
        //   }
        // ];
        // get records
        this.hrp.getImmunization(this.auth.userId)
            .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
    }
    ImmunizationHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImmunizationHistoryPage');
    };
    ImmunizationHistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.hrp.getImmunization(this.auth.userId)
            .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
    };
    ImmunizationHistoryPage.prototype.addImmunization = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__immunization_immunization__["a" /* ImmunizationPage */]);
    };
    ImmunizationHistoryPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.hrp.deleteImmunization(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.hrp.getImmunization(_this.auth.userId)
                                .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    ImmunizationHistoryPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    ImmunizationHistoryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ImmunizationHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-immunization-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization-history/immunization-history.html"*/'<!--\n  Generated template for the AllergyHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>IMMUNIZATION</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.length!=0">\n    <ion-list-header>Immunization History</ion-list-header>\n    <ion-item-sliding *ngFor="let record of records; let i = index">\n      <ion-item>\n        <div class="white-space">\n          <h3>Vaccine: {{record.vaccine}}</h3>\n          <h3 *ngIf="record.age.length!=0">Age: {{record.age}}</h3>\n          <h3 *ngIf="record.immunizationdate.length!=0">Schedule Date: {{record.immunizationdate | date: \'MMM yyyy\'}}</h3>\n          <h3>Note: {{record.note}}</h3>\n        </div>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No immunization record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addImmunization()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization-history/immunization-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], ImmunizationHistoryPage);
    return ImmunizationHistoryPage;
}());

//# sourceMappingURL=immunization-history.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorVisitNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_visit_notes_detail_doctor_visit_notes_detail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DoctorVisitNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoctorVisitNotesPage = (function () {
    function DoctorVisitNotesPage(navCtrl, navParams, modalCtrl, auth, alertCtrl, toastCtrl, hrp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.hrp = hrp;
        this.records = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        // this.records = [
        //   {
        //     diagnosis: 'influenza',
        //     doctor: 'Aaric Falconi',
        //     prescription: 'Have some rest',
        //     date: '2018/05/21',
        //     reason: 'feel a headache'
        //   }
        // ];
        this.hrp.getDoctorVisitNotes(this.auth.userId)
            .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
    }
    DoctorVisitNotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctorVisitNotesPage');
    };
    DoctorVisitNotesPage.prototype.addNotes = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__doctor_visit_notes_detail_doctor_visit_notes_detail__["a" /* DoctorVisitNotesDetailPage */]);
        modal.present();
        modal.onWillDismiss(function () {
            _this.hrp.getDoctorVisitNotes(_this.auth.userId)
                .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    DoctorVisitNotesPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.hrp.deleteDoctorVisitNotes(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.hrp.getDoctorVisitNotes(_this.auth.userId)
                                .subscribe(function (records) { console.log(records); _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    DoctorVisitNotesPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    DoctorVisitNotesPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    DoctorVisitNotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-doctor-visit-notes',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/doctor-visit-notes/doctor-visit-notes.html"*/'<!--\n  Generated template for the DoctorVisitNotesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>DOCTOR VISIT NOTES</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.length!=0">\n    <ion-list-header>Doctor Visit Notes</ion-list-header>\n    <ion-item-sliding *ngFor="let record of records; let i = index">\n      <ion-item>\n        <p>{{record.date | date}}</p>\n        <h3>Diagnosis: {{record.diagnosis}}</h3>\n        <h3>Doctor: {{record.doctor}}</h3>\n        <h3>Prescription: {{record.prescription}}</h3>\n        <h3>Reason of Visit: {{record.reason}}</h3>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No doctor visit notes.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addNotes()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/doctor-visit-notes/doctor-visit-notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], DoctorVisitNotesPage);
    return DoctorVisitNotesPage;
}());

//# sourceMappingURL=doctor-visit-notes.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticProcedureClassificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the DiagnosticProcedureClassificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DiagnosticProcedureClassificationProvider = (function () {
    function DiagnosticProcedureClassificationProvider() {
    }
    DiagnosticProcedureClassificationProvider.prototype.getMenu = function (id) {
        var arr = [];
        if (id === 0) {
            arr = [
                { id: 1, name: 'ECG', menu: 'diagnostic-procedure', end: true },
                { id: 2, name: 'X-Ray', menu: 'diagnostic-procedure', end: true },
                { id: 3, name: 'CT Scan', menu: 'diagnostic-procedure', end: true },
                { id: 4, name: 'MRI', menu: 'diagnostic-procedure', end: true },
                { id: 5, name: 'Ultrasound', menu: 'diagnostic-procedure', end: true },
                { id: 6, name: 'Sleep Study', menu: 'diagnostic-procedure', end: true },
                { id: 7, name: 'Pulmonary Function Tests', menu: 'diagnostic-procedure', end: true },
                { id: 8, name: 'Miscellaneous', menu: 'diagnostic-procedure', end: true }
            ];
        }
        // else if (id === 1) {
        //   arr = [
        //     { id: 101, name: 'ECG', menu: 'diagnostic-procedure', end: true },
        //     { id: 102, name: 'Echocardiogram', menu: 'diagnostic-procedure', end: true },
        //     { id: 103, name: '24 Hour Holter', menu: 'diagnostic-procedure', end: true },
        //     { id: 104, name: '30 Day Event Monitor', menu: 'diagnostic-procedure', end: true },
        //     { id: 105, name: 'Nuclear exercise stress test - Lexiscan', menu: 'diagnostic-procedure', end: true },
        //     { id: 106, name: 'Nuclear stress test - Adenosine', menu: 'diagnostic-procedure', end: true },
        //     { id: 107, name: 'Stress echocardiogram', menu: 'diagnostic-procedure', end: true }
        //   ];
        // }
        // else if (id === 2) {
        //   arr = [
        //     { id: 200, name: 'Mammogram', menu: 'diagnostic-procedure', end: true },
        //     { id: 201, name: 'CXR', menu: 'diagnostic-procedure', end: true },
        //     { id: 202, name: 'AXR - KUB', menu: 'diagnostic-procedure', end: true },
        //     { id: 203, name: 'AXR - 4 View', menu: 'diagnostic-procedure', end: true },
        //     { id: 204, name: 'X- Ray', menu: 'diagnostic-procedure', end: true },
        //     { id: 205, name: 'CT Scan', menu: 'diagnostic-procedure', end: true },
        //     { id: 206, name: 'MRI', menu: 'diagnostic-procedure', end: true },
        //     { id: 207, name: 'Ultrasound', menu: 'diagnostic-procedure', end: true },
        //     { id: 208, name: 'Venous Dopplers', menu: 'diagnostic-procedure', end: true },
        //     { id: 209, name: 'Arterial Dopllers', menu: 'diagnostic-procedure', end: true },
        //     { id: 210, name: 'Dexa Scan', menu: 'diagnostic-procedure', end: true },
        //     { id: 211, name: 'Bone Scan', menu: 'diagnostic-procedure', end: true },
        //     { id: 212, name: 'CT Angiogram', menu: 'diagnostic-procedure', end: true }
        //   ];
        // }
        // else if (id === 3) {
        //   arr = [
        //     { id: 302, name: 'Sleep Study', menu: 'diagnostic-procedure', end: true },
        //     { id: 303, name: 'Pulmonary Function Tests', menu: 'diagnostic-procedure', end: true }
        //   ];
        // }
        // else if (id === 4) {
        //   arr = [
        //     { id: 401, name: "EMG and NCV's", menu: 'diagnostic-procedure', end: true },
        //     { id: 402, name: 'Other Tests', menu: 'diagnostic-procedure', end: true }
        //   ];
        // }
        return arr;
    };
    DiagnosticProcedureClassificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DiagnosticProcedureClassificationProvider);
    return DiagnosticProcedureClassificationProvider;
}());

//# sourceMappingURL=diagnostic-procedure-classification.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__encryption_encryption__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = (function () {
    function UserProvider(http, processHttpmsgService, ep) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        this.ep = ep;
    }
    UserProvider.prototype.getProfile = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/profile/' + id)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    UserProvider.prototype.editProfile = function (id, profile) {
        var _this = this;
        this.ep.traversal(profile, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/profile/' + id, profile)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
            __WEBPACK_IMPORTED_MODULE_4__encryption_encryption__["a" /* EncryptionProvider */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__encryption_encryption__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ResourcesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ResourcesProvider = (function () {
    function ResourcesProvider(http, processHttpmsgService, ep) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        this.ep = ep;
        console.log('Hello ResourcesProvider Provider');
    }
    ResourcesProvider.prototype.getResources = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'resources/' + id)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    ResourcesProvider.prototype.addResource = function (id, resource) {
        var _this = this;
        this.ep.traversal(resource, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'resources/' + id, resource)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    ResourcesProvider.prototype.deleteResource = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'resources/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    ResourcesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
            __WEBPACK_IMPORTED_MODULE_4__encryption_encryption__["a" /* EncryptionProvider */]])
    ], ResourcesProvider);
    return ResourcesProvider;
}());

//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_question_control_question_control__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_history_history__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AllergyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllergyDetailPage = (function () {
    function AllergyDetailPage(navCtrl, navParams, qcp, qp, viewCtrl, loadingCtrl, toastCtrl, historyProvider, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qcp = qcp;
        this.qp = qp;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.auth = auth;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({});
        this.color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        this.questions = this.qp.getAllergyQuestions();
        this.form = this.qcp.toFormGroup(this.questions);
        this.navcolor = this.color[(this.id - 1) % 3];
    }
    AllergyDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllergyDetailPage');
    };
    AllergyDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AllergyDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payload = this.form.value;
        payload['category'] = this.title;
        console.log(payload);
        this.historyProvider.addAllergy(this.auth.userId, payload)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add allergy record.');
        });
    };
    AllergyDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    AllergyDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AllergyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-allergy-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy-detail/allergy-detail.html"*/'<!--\n  Generated template for the AllergyDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar [color]="navcolor">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n      \n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n      \n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n          </div>\n      \n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy-detail/allergy-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AllergyDetailPage);
    return AllergyDetailPage;
}());

//# sourceMappingURL=allergy-detail.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allergy_allergy__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_history_history__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AllergyHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllergyHistoryPage = (function () {
    function AllergyHistoryPage(navCtrl, navParams, historyProvider, auth, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.historyProvider = historyProvider;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.records = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        // this.records = [
        //   {
        //     category: 'Food Allergy',
        //     trigger: 'Eggs',
        //     symptom: 'Shortness of breath',
        //     threatening: true,
        //     date: '2018/01/09'
        //   },
        //   {
        //     category: 'Pet Allergy',
        //     trigger: 'Cat',
        //     symptom: 'Sneezing',
        //     threatening: false,
        //     date: '2017/10/21'
        //   },
        //   {
        //     category: 'Drug Allergy',
        //     trigger: 'Penicillin and related antibiotics',
        //     symptom: 'Skin rash',
        //     threatening: false,
        //     date: '2017/12/12'
        //   }
        // ];
        // get sorted records
        this.historyProvider.getAllergy(this.auth.userId)
            .subscribe(function (allergy) { return _this.records = allergy; }, function (errmess) { return _this.errMess = errmess; });
    }
    AllergyHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllergyHistoryPage');
    };
    AllergyHistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.historyProvider.getAllergy(this.auth.userId)
            .subscribe(function (allergy) { return _this.records = allergy; }, function (errmess) { return _this.errMess = errmess; });
    };
    AllergyHistoryPage.prototype.checkLifeThreatening = function (i) {
        return this.records[i].threatening;
    };
    AllergyHistoryPage.prototype.addAllergy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__allergy_allergy__["a" /* AllergyPage */]);
    };
    AllergyHistoryPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.historyProvider.deleteAllergy(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.historyProvider.getAllergy(_this.auth.userId)
                                .subscribe(function (allergy) { return _this.records = allergy; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    AllergyHistoryPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    AllergyHistoryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AllergyHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-allergy-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy-history/allergy-history.html"*/'<!--\n  Generated template for the AllergyHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ALLERGY</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.length!=0">\n    <ion-list-header>Allergy History</ion-list-header>\n    <ion-item-sliding *ngFor="let record of records; let i = index">\n      <ion-item>\n        <div class="white-space">\n          <h3 *ngIf="checkLifeThreatening(i)">Symptom:\n            <span style="color:red">{{record.symptom}}</span>\n          </h3>\n          <h3 *ngIf="!checkLifeThreatening(i)">Symptom: {{record.symptom}}</h3>\n          <h3 *ngIf="checkLifeThreatening(i)">Trigger:\n            <span style="color:red">{{record.trigger}}</span>\n          </h3>\n          <h3 *ngIf="!checkLifeThreatening(i)">Trigger: {{record.trigger}}</h3>\n          <p>{{record.date | date}}</p>\n        </div>\n        <p item-end>{{record.category}}</p>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No allergy record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addAllergy()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy-history/allergy-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], AllergyHistoryPage);
    return AllergyHistoryPage;
}());

//# sourceMappingURL=allergy-history.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_allergy_classification_allergy_classification__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AllergyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllergyPage = (function () {
    function AllergyPage(navCtrl, navParams, acp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.acp = acp;
        // get Main Menu
        this.tiles = this.acp.getMenu(0);
    }
    AllergyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllergyPage');
    };
    AllergyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-allergy',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy/allergy.html"*/'<!--\n  Generated template for the AllergyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ALLERGY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <tile [tiles]="tiles"></tile>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy/allergy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_allergy_classification_allergy_classification__["a" /* AllergyClassificationProvider */]])
    ], AllergyPage);
    return AllergyPage;
}());

//# sourceMappingURL=allergy.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, fb, menuCtrl, toastCtrl, loadingCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.loginForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Authenticating...');
        var credentials = this.loginForm.value;
        credentials['username'] = this.loginForm.value.username.toLowerCase();
        console.log(credentials);
        this.authService.login(credentials)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
            _this.menuCtrl.enable(true);
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Login failed! Please try again. ' + err);
            console.log(err);
        });
    };
    LoginPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>LOGIN</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]=\'loginForm\' (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" formControlName="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <button ion-button block class="btn" type="submit" [disabled]="!loginForm.valid">Signin</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentAddAppointmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_add_contacts_contact_add_contacts__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_contacts_contacts__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appointment_appointment__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the AppointmentAddAppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppointmentAddAppointmentsPage = (function () {
    function AppointmentAddAppointmentsPage(navCtrl, navParams, modalCtrl, fb, viewCtrl, toastCtrl, loadingCtrl, contactsProvider, ap, auth) {
        //get doctors in such structure
        // this.doctors = [
        //   {
        //     id: 0,
        //     firstname: "Scott",
        //     lastname: "Williamson",
        //     locations: [
        //       "1100 Fifth Ave",
        //       "1090 Centre Ave"
        //     ]
        //   },
        //   {
        //     id: 1,
        //     firstname: "Aaric",
        //     lastname: "Falconi",
        //     locations: [
        //       "5542 Walnut St",
        //       "5819 Elwood St",
        //       "1001 Fifth Ave"
        //     ]
        //   }
        // ];
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.contactsProvider = contactsProvider;
        this.ap = ap;
        this.auth = auth;
        this.doctors = [];
        this.newAppointmentForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({});
        this.locations = [];
        this.newAppointmentForm = this.fb.group({
            time: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            doctor: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            location: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]]
        });
    }
    AppointmentAddAppointmentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentAddAppointmentsPage');
    };
    AppointmentAddAppointmentsPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.contactsProvider.getDoctors(this.auth.userId).toPromise()];
                    case 1:
                        _a.doctors = (_b.sent());
                        return [2 /*return*/];
                }
            });
        });
    };
    AppointmentAddAppointmentsPage.prototype.selectDate = function ($event) {
        this.date = $event;
        console.log(this.date);
    };
    AppointmentAddAppointmentsPage.prototype.selectDoctor = function ($event) {
        var _this = this;
        //reset location formContrl value
        this.newAppointmentForm.patchValue({
            location: ''
        });
        this.locations = [];
        this.doctors.forEach(function (doctor) {
            if (doctor.id == $event)
                _this.locations = doctor.locations;
        });
        console.log(this.locations);
    };
    AppointmentAddAppointmentsPage.prototype.addContact = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */]);
        modal.present();
        modal.onWillDismiss(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.contactsProvider.getDoctors(this.auth.userId).toPromise()];
                    case 1:
                        _a.doctors = (_b.sent());
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AppointmentAddAppointmentsPage.prototype.check_valid = function () {
        if (this.date == undefined)
            return false;
        else
            return true;
    };
    AppointmentAddAppointmentsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AppointmentAddAppointmentsPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        //http post date + form.value
        var appForm = this.newAppointmentForm.value;
        var firstname, lastname;
        this.doctors.forEach(function (doctor) {
            if (doctor.id == appForm.doctor) {
                firstname = doctor.firstname;
                lastname = doctor.lastname;
            }
        });
        var app = {
            doctorid: appForm.doctor,
            date: this.date,
            time: appForm.time,
            firstname: firstname,
            lastname: lastname,
            location: appForm.location
        };
        console.log(app);
        this.ap.addAppointment(this.auth.userId, app)
            .subscribe(function (app) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added a new appointment.');
            _this.viewCtrl.dismiss();
        }, function (error) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + error);
        });
    };
    AppointmentAddAppointmentsPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    AppointmentAddAppointmentsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AppointmentAddAppointmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appointment-add-appointments',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/appointment-add-appointments/appointment-add-appointments.html"*/'<!--\n  Generated template for the AppointmentAddAppointmentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>New Appointment</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="newAppointmentForm" (ngSubmit)="onSubmit()">\n    <ion-list radio-group formControlName="doctor">\n      <ion-list-header>Choose one doctor</ion-list-header>\n      <ion-item *ngFor="let doctor of doctors">\n        <ion-label>\n          <h2>{{doctor.firstname | titlecase}} {{doctor.lastname | titlecase}}</h2>\n        </ion-label>\n        <ion-radio value="{{doctor.id}}" (ionSelect)="selectDoctor($event)"></ion-radio>\n      </ion-item>\n      <button ion-button type="button" clear color="primary" (click)="addContact()">Add Contact</button>\n    </ion-list>\n    <ion-list radio-group formControlName="location">\n      <ion-list-header>Choose one Location</ion-list-header>\n      <ion-item *ngFor="let location of locations">\n        <ion-label text-wrap>\n          <h2>{{location}}</h2>\n        </ion-label>\n        <ion-radio value="{{location}}"></ion-radio>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>Choose a Date</ion-list-header>\n      <ion-card>\n        <calendar (selectDate)="selectDate($event)"></calendar>\n      </ion-card>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>Choose the time</ion-list-header>\n      <ion-item>\n        <ion-label fixed>Time</ion-label>\n        <ion-datetime displayFormat="hh:mm A" formControlName="time"></ion-datetime>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!check_valid() || !newAppointmentForm.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/appointment-add-appointments/appointment-add-appointments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_contacts_contacts__["a" /* ContactsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appointment_appointment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AppointmentAddAppointmentsPage);
    return AppointmentAddAppointmentsPage;
}());

//# sourceMappingURL=appointment-add-appointments.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appointment_appointment__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_contacts_contacts__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_add_contacts_contact_add_contacts__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the AppointmentEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppointmentEditPage = (function () {
    function AppointmentEditPage(navCtrl, navParams, fb, ap, auth, contactsProvider, toastCtrl, modalCtrl, loadingCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.ap = ap;
        this.auth = auth;
        this.contactsProvider = contactsProvider;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.appointment = {};
        this.doctors = [];
        this.appointmentForm = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"]({});
        this.locations = [];
        this.recordid = this.navParams.get("recordid");
        this.ap.getAppointment(this.auth.userId)
            .subscribe(function (app) {
            _this.appointment = app[_this.recordid];
            console.log(_this.appointment);
            _this.locations = [app[_this.recordid].location];
            _this.defalutTime = __WEBPACK_IMPORTED_MODULE_7_moment__(_this.appointment.date + " " + _this.appointment.time).format();
        }, function (errmess) { return _this.errMess = errmess; });
        this.appointmentForm = this.fb.group({
            time: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            doctor: [this.appointment.doctorid, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            location: [this.appointment.location, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required]
        });
        console.log(this.appointmentForm);
        console.log(this.defalutTime);
    }
    AppointmentEditPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.contactsProvider.getDoctors(this.auth.userId).toPromise()];
                    case 1:
                        _a.doctors = (_b.sent());
                        return [2 /*return*/];
                }
            });
        });
    };
    AppointmentEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentEditPage');
    };
    AppointmentEditPage.prototype.selectDate = function ($event) {
        this.date = $event;
        console.log(this.date);
    };
    AppointmentEditPage.prototype.selectDoctor = function ($event) {
        var _this = this;
        //reset location formContrl value
        this.appointmentForm.patchValue({
            location: ''
        });
        this.locations = [];
        this.doctors.forEach(function (doctor) {
            if (doctor.id == $event)
                _this.locations = doctor.locations;
        });
        console.log(this.locations);
    };
    AppointmentEditPage.prototype.addContact = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */]);
        modal.present();
        modal.onWillDismiss(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.contactsProvider.getDoctors(this.auth.userId).toPromise()];
                    case 1:
                        _a.doctors = (_b.sent());
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AppointmentEditPage.prototype.check_valid = function () {
        if (this.date == undefined)
            return false;
        else
            return true;
    };
    AppointmentEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AppointmentEditPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('editing...');
        //http post date + form.value
        var appForm = this.appointmentForm.value;
        var firstname, lastname;
        this.doctors.forEach(function (doctor) {
            if (doctor.id == appForm.doctor) {
                firstname = doctor.firstname;
                lastname = doctor.lastname;
            }
        });
        var app = {
            doctorid: appForm.doctor,
            date: this.date,
            time: appForm.time,
            firstname: firstname,
            lastname: lastname,
            location: appForm.location
        };
        console.log(app);
        this.ap.editAppointment(this.auth.userId, this.recordid, app)
            .subscribe(function (app) {
            _this.loading.dismiss();
            _this.presentToast('Successfully edited.');
            _this.viewCtrl.dismiss();
        }, function (error) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + error);
        });
    };
    AppointmentEditPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    AppointmentEditPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AppointmentEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-appointment-edit',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/appointment-edit/appointment-edit.html"*/'<!--\n  Generated template for the AppointmentAddAppointmentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Edit Appointment</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="appointmentForm" (ngSubmit)="onSubmit()">\n    <ion-list radio-group formControlName="doctor">\n      <ion-list-header>Choose one doctor</ion-list-header>\n      <ion-item *ngFor="let doctor of doctors">\n        <ion-label>\n          <h2>{{doctor.firstname | titlecase}} {{doctor.lastname | titlecase}}</h2>\n        </ion-label>\n        <ion-radio value="{{doctor.id}}" (ionSelect)="selectDoctor($event)" [checked]="doctor.id==appointment.doctor"></ion-radio>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label>\n          <h2>Test Name</h2>\n        </ion-label>\n        <ion-radio [value]="0" checked></ion-radio> \n      </ion-item> -->\n      <button ion-button type="button" clear color="primary" (click)="addContact()">Add Contact</button>\n    </ion-list>\n    <ion-list radio-group formControlName="location">\n      <ion-list-header>Choose one Location</ion-list-header>\n      <ion-item *ngFor="let location of locations">\n        <ion-label text-wrap>\n          <h2>{{location}}</h2>\n        </ion-label>\n        <ion-radio value="{{location}}" [checked]="location==appointment.location"></ion-radio>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>Choose a Date</ion-list-header>\n      <ion-card>\n        <calendar (selectDate)="selectDate($event)" ></calendar>\n      </ion-card>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>Choose the time</ion-list-header>\n      <ion-item>\n        <ion-label fixed>Time</ion-label>\n        <ion-datetime displayFormat="hh:mm A" formControlName="time"></ion-datetime>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!check_valid() || !appointmentForm.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/appointment-edit/appointment-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__providers_appointment_appointment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_contacts_contacts__["a" /* ContactsProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"]])
    ], AppointmentEditPage);
    return AppointmentEditPage;
}());

//# sourceMappingURL=appointment-edit.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_health_records_health_records__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MedicationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicationDetailPage = (function () {
    function MedicationDetailPage(navCtrl, navParams, qp, qcp, loadingCtrl, toastCtrl, viewCtrl, auth, hrp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.auth = auth;
        this.hrp = hrp;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({});
        this.questions = this.qp.getMedicationQuestions();
        this.form = this.qcp.toFormGroup(this.questions);
    }
    MedicationDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicationDetailPage');
    };
    MedicationDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MedicationDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payload = this.form.value;
        console.log(payload);
        this.hrp.addMedication(this.auth.userId, payload)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add the record.');
        });
    };
    MedicationDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    MedicationDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MedicationDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-medication-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medication-detail/medication-detail.html"*/'<!--\n  Generated template for the MedicationDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Medication</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n\n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n          </div>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medication-detail/medication-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], MedicationDetailPage);
    return MedicationDetailPage;
}());

//# sourceMappingURL=medication-detail.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_immunization_classification_immunization_classification__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ImmunizationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImmunizationPage = (function () {
    function ImmunizationPage(navCtrl, navParams, icp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icp = icp;
        this.tiles = this.icp.getMenu(0);
    }
    ImmunizationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImmunizationPage');
    };
    ImmunizationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-immunization',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization/immunization.html"*/'<!--\n  Generated template for the ImmunizationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>IMMUNIZATION</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <tile [tiles]="tiles"></tile>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization/immunization.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_immunization_classification_immunization_classification__["a" /* ImmunizationClassificationProvider */]])
    ], ImmunizationPage);
    return ImmunizationPage;
}());

//# sourceMappingURL=immunization.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorVisitNotesDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_question_control_question_control__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_add_contacts_contact_add_contacts__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_health_records_health_records__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the DoctorVisitNotesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoctorVisitNotesDetailPage = (function () {
    function DoctorVisitNotesDetailPage(navCtrl, navParams, qp, qcp, modalCtrl, loadingCtrl, toastCtrl, viewCtrl, hrp, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.hrp = hrp;
        this.auth = auth;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({});
    }
    DoctorVisitNotesDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctorVisitNotesDetailPage');
    };
    DoctorVisitNotesDetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.qp.getDoctorVisitNotesQuestions(this.auth.userId)];
                    case 1:
                        _a.questions = (_b.sent());
                        this.form = this.qcp.toFormGroup(this.questions);
                        return [2 /*return*/];
                }
            });
        });
    };
    DoctorVisitNotesDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DoctorVisitNotesDetailPage.prototype.addContact = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */]);
        modal.present();
        modal.onWillDismiss(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.qp.getDoctorVisitNotesQuestions(this.auth.userId)];
                    case 1:
                        _a.questions = (_b.sent());
                        this.form = this.qcp.toFormGroup(this.questions);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DoctorVisitNotesDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payload = this.form.value;
        console.log(payload);
        this.hrp.addDoctorVisitNotes(this.auth.userId, payload)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add the record.');
        });
    };
    DoctorVisitNotesDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    DoctorVisitNotesDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    DoctorVisitNotesDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-doctor-visit-notes-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/doctor-visit-notes-detail/doctor-visit-notes-detail.html"*/'<!--\n  Generated template for the DoctorVisitNotesDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Visit Notes</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n\n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n            <button ion-button type="button" clear color="primary" (click)="addContact()">Add Contact</button>\n          </div>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/doctor-visit-notes-detail/doctor-visit-notes-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_7__providers_health_records_health_records__["a" /* HealthRecordsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], DoctorVisitNotesDetailPage);
    return DoctorVisitNotesDetailPage;
}());

//# sourceMappingURL=doctor-visit-notes-detail.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, fb, menuCtrl, toastCtrl, loadingCtrl, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.formErrors = {
            "username": '',
            "password": '',
            "confirmPassword": '',
            "email": '',
            "securityQuestion": '',
            "securityAnswer": '',
            "firstname": '',
            "lastname": '',
            "tel": '',
            "birthday": ''
        };
        this.validationMessages = {
            "username": {
                "required": "Username is required.",
                "minlength": "Username must be at least 2 characters long.",
                "maxlength": "Username cannot be more than 25 characters long."
            },
            "password": {
                "required": "Password is required.",
                "pattern": "Password must be 8-17 characters long and contains at least one number, one letter and one unique character such as !@#$%^&*?\"';:"
            },
            "confirmPassword": {
                "required": "Confirm password is required.",
                "notEquivalent": "Password doesn't match."
            },
            "email": {
                "required": "Email is required.",
                "email": "Please enter a valid email address."
            },
            "securityQuestion": {
                "required": "Please choose a security question."
            },
            "securityAnswer": {
                "required": "Please enter the question's answer."
            },
            "firstname": {
                "minlength": "Firstname must be at least 2 characters long.",
                "maxlength": "Firstname cannot be more than 25 characters long."
            },
            "lastname": {
                "minlength": "Lastname must be at least 2 characters long.",
                "maxlength": "Lastname cannot be more than 25 characters long."
            },
            "tel": {
                "pattern": "Please enter a valid 10-digit phone number. For example: 4123456789."
            },
            "birthday": {
                "pattern": "Please enter your birthday in MM/DD/YYYY format."
            }
        };
        this.secQuestions = [
            {
                "quesNum": 0,
                "question": "What is the first and last name of your first boyfriend or girlfriend?"
            },
            {
                "quesNum": 1,
                "question": "What is the name of your favorite pet?"
            },
            {
                "quesNum": 2,
                "question": "In what city were you born?"
            },
            {
                "quesNum": 3,
                "question": "What is the name of your first school?"
            },
            {
                "quesNum": 4,
                "question": "What is your favorite movie?"
            },
            {
                "quesNum": 5,
                "question": "What is your mother's maiden name?"
            },
            {
                "quesNum": 6,
                "question": "What is your favorite color?"
            }
        ];
        this.registerForm = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[\!\@\#\$\%\^\&\*\?\"\'\;\:]).*$')]],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]],
            securityQuestion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            securityAnswer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            tel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{10}')],
            address: [''],
            birthday: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('(^(((0[1-9]|1[012])/(0[1-9]|1[0-9]|2[0-8]))|((0[13578]|1[02])/(29|30|31))|((0[469]|11)/(29|30)))/(19|20)\\d\\d$)|(^02/29/(19(04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)|20(([02468][048])|([13579][26])))$)')],
            gender: [''],
            race: ['']
        }, { validator: this.pwdMatchValidator('password', 'confirmPassword') });
        this.registerForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    SignupPage.prototype.onValueChanged = function (data) {
        if (!this.registerForm) {
            return;
        }
        var form = this.registerForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    SignupPage.prototype.pwdMatchValidator = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    SignupPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Registering...');
        var register = this.registerForm.value;
        register['username'] = this.registerForm.value.username.toLowerCase();
        delete register.confirmPassword;
        console.log(register);
        this.authService.register(register)
            .subscribe(function (res) {
            _this.loading.dismiss();
            if (res.exist == false) {
                _this.presentToast('Successfully registered!');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
                _this.menuCtrl.enable(true);
            }
            else {
                _this.presentToast('Username already exists. Please enter another one.');
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Connection Error! ' + err);
            console.log(err);
        });
    };
    SignupPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    SignupPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form novalidate [formGroup]="registerForm" (ngSubmit)="onSubmit()">\n    <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-label stacked>Username<span class="color-red">*</span></ion-label>\n          <ion-input type="text" formControlName="username"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.username)">{{formErrors.username}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Password<span class="color-red">*</span></ion-label>\n          <ion-input type="password" formControlName="password"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.password)">{{formErrors.password}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Confirm Password<span class="color-red">*</span></ion-label>\n          <ion-input type="password" formControlName="confirmPassword"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.confirmPassword)">{{formErrors.confirmPassword}}</span>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header text-wrap color="primary">\n        <div class="pull-right">The information below are only used to record your health data.</div>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label stacked>Email<span class="color-red">*</span></ion-label>\n          <ion-input type="email" formControlName="email" email></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.email)">{{formErrors.email}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Security Question<span class="color-red">*</span></ion-label>\n          <ion-select formControlName="securityQuestion">\n            <ion-option *ngFor="let sq of secQuestions" [value]="sq.question">\n              {{sq.question}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.securityQuestion)">{{formErrors.securityQuestion}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Security Answer<span class="color-red">*</span></ion-label>\n          <ion-input type="text" formControlName="securityAnswer"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.securityAnswer)">{{formErrors.securityAnswer}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>First Name</ion-label>\n          <ion-input type="text" formControlName="firstname"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.firstname)">{{formErrors.firstname}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Last Name</ion-label>\n          <ion-input type="text" formControlName="lastname"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.lastname)">{{formErrors.lastname}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Tel. Number</ion-label>\n          <ion-input type="tel" formControlName="tel" placeholder="enter only numbers"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.tel)">{{formErrors.tel}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Address</ion-label>\n          <ion-textarea type="text" formControlName="address"></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Birthday</ion-label>\n          <ion-input type="text" formControlName="birthday" placeholder="MM/DD/YYYY"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.birthday)">{{formErrors.birthday}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Gender</ion-label>\n          <ion-select formControlName="gender">\n            <ion-option value="female">Female</ion-option>\n            <ion-option value="male">Male</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Race and Ethnicity</ion-label>\n          <ion-select formControlName="race">\n            <ion-option>Hispanic or Latino</ion-option>\n            <ion-option>White</ion-option>\n            <ion-option>Black or African American</ion-option>\n            <ion-option>Native Hawaiian or Other Pacific Islander</ion-option>\n            <ion-option>Asian</ion-option>\n            <ion-option>American Indian or Alaskan Native</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <button ion-button block type="submit" [disabled]="!registerForm.valid">Register</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PasswordResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordResetPage = (function () {
    function PasswordResetPage(navCtrl, navParams, fb, viewCtrl, loadingCtrl, toastCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.emailAddress = '';
        this.securityQuestion = '';
        this.securityAnswer = '';
        this.validEmail = false;
        this.validSecQues = false;
        this.formErrors = {
            "password": '',
            "confirmPassword": ''
        };
        this.validationMessages = {
            "password": {
                "required": "New password is required.",
                "pattern": "Password must be 8-17 characters long and contains at least one number, one letter and one unique character such as !@#$%^&*?\"';:"
            },
            "confirmPassword": {
                "required": "Please enter your password again.",
                "notEquivalent": "Password doesn't match."
            }
        };
        this.resetpasswordForm = this.fb.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[\!\@\#\$\%\^\&\*\?\"\'\;\:]).*$')]],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required]
        }, { validator: this.pwdMatchValidator('password', 'confirmPassword') });
        this.resetpasswordForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    }
    PasswordResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordResetPage');
    };
    PasswordResetPage.prototype.onValueChanged = function (data) {
        if (!this.resetpasswordForm) {
            return;
        }
        var form = this.resetpasswordForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    PasswordResetPage.prototype.pwdMatchValidator = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    PasswordResetPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PasswordResetPage.prototype.verifyEmail = function () {
        var _this = this;
        this.showLoader('Authenticating...');
        console.log(this.emailAddress);
        this.auth.verifyEmail_getSecQues(this.emailAddress)
            .subscribe(function (res) {
            if (res == -1) {
                _this.loading.dismiss();
                _this.presentToast("Email address doesn't exist!");
            }
            else {
                _this.loading.dismiss();
                _this.securityQuestion = res.securityQuestion;
                _this.userId = res.id;
                _this.validEmail = true;
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    PasswordResetPage.prototype.verifySecQues = function () {
        var _this = this;
        this.showLoader('Authenticating...');
        console.log(this.securityAnswer);
        this.auth.verifySecAns(this.userId, this.securityAnswer)
            .subscribe(function (res) {
            if (res == -1) {
                _this.loading.dismiss();
                _this.presentToast("Wrong answer. Please try again.");
            }
            else {
                _this.loading.dismiss();
                _this.validEmail = false;
                _this.validSecQues = true;
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    PasswordResetPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Authenticating...');
        var payload = this.resetpasswordForm.value;
        delete payload.confirmPassword;
        console.log(payload);
        this.auth.resetPassword(this.userId, payload)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successful!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    PasswordResetPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    PasswordResetPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PasswordResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-password-reset',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/password-reset/password-reset.html"*/'<!--\n  Generated template for the PasswordResetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Reset Password</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form *ngIf="!validEmail && !validSecQues" #emailVerification="ngForm" (ngSubmit)="verifyEmail()">\n    <ion-item>\n      <ion-label stacked color="primary">Registered Email\n        <span class="color-red">*</span>\n      </ion-label>\n      <ion-input type="email" [(ngModel)]="emailAddress" name="email" #email="ngModel" required email></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="email.pristine">\n        <span [hidden]="!email.errors?.required">Email is required.</span>\n        <span [hidden]="!email.errors?.email">Please enter a valid email address.</span>\n      </span>\n    </div>\n    <button ion-button block type="submit" [disabled]="!emailVerification.form.valid">Next</button>\n  </form>\n\n  <form *ngIf="validEmail" #secQuesVerification="ngForm" (ngSubmit)="verifySecQues()">\n    <ion-item>\n      <ion-label stacked color="primary">Security Question\n        <span class="color-red">*</span>\n      </ion-label>\n      <ion-input type="text" placeholder={{securityQuestion}} value={{securityQuestion}} readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Security Answer\n        <span class="color-red">*</span>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="securityAnswer" name="secAns" #secAns="ngModel" required></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="secAns.pristine">\n        <span [hidden]="!secAns.errors?.required">Security answer is required.</span>\n      </span>\n    </div>\n    <button ion-button block type="submit" [disabled]="!secQuesVerification.form.valid">Next</button>\n  </form>\n\n  <form *ngIf="validSecQues" [formGroup]=\'resetpasswordForm\' (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label stacked color="primary">New Password\n        <span class="color-red">*</span>\n      </ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.password)">{{formErrors.password}}</span>\n    </div>\n    <ion-item>\n      <ion-label stacked color="primary">Confirm Password\n        <span class="color-red">*</span>\n      </ion-label>\n      <ion-input type="password" formControlName="confirmPassword"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.confirmPassword)">{{formErrors.confirmPassword}}</span>\n    </div>\n    <button ion-button block type="submit" [disabled]="!resetpasswordForm.valid">Submit</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/password-reset/password-reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], PasswordResetPage);
    return PasswordResetPage;
}());

//# sourceMappingURL=password-reset.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contacts_contacts__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ContactDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactDetailPage = (function () {
    function ContactDetailPage(navCtrl, navParams, auth, alertCtrl, contactsProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.contactsProvider = contactsProvider;
        this.contacts = [];
        this.tel = [];
        this.fax = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        this.category = this.navParams.get('name');
        console.log(this.category);
        // this.contacts = [
        //   {
        //     firstname: "Aaric",
        //     lastname: "Falconi",
        //     tel: "4123457680",
        //     fax: "4123457680",
        //     relationship: "",
        //     specialty: "physician",
        //     location1: "5542 Walnut St",
        //     location2: "5819 Elwood St",
        //     location3: "1001 Fifth Ave",
        //     group: "friend,doctor"
        //   },
        //   {
        //     firstname: "Alivia",
        //     lastname: "Ryan",
        //     tel: "4123457680",
        //     fax: "",
        //     relationship: "husband",
        //     specialty: "",
        //     location1: "999 N Negley Str",
        //     location2: "",
        //     location3: "",
        //     group: "family,emergency"
        //   },
        //   {
        //     firstname: "Martin",
        //     lastname: "DOUGLAS",
        //     tel: "4123457680",
        //     fax: "",
        //     relationship: "father",
        //     specialty: "",
        //     location1: "132 Centre Ave",
        //     location2: "",
        //     location3: "",
        //     group: "family"
        //   },
        //   {
        //     firstname: "Scott",
        //     lastname: "Williamson",
        //     tel: "4123457680",
        //     fax: "4123457680",
        //     relationship: "",
        //     specialty: "dermatologist",
        //     location1: "1100 Fifth Ave",
        //     location2: "1090 Centre Ave",
        //     location3: "",
        //     group: "doctor"
        //   },
        // ];
        // get all contacts' data
        this.contactsProvider.getContactsDetail(this.auth.userId)
            .subscribe(function (contacts) {
            _this.contacts = contacts;
            _this.getTelArray();
            _this.getFaxArray();
        }, function (errmess) { return _this.errMess = errmess; });
    }
    ContactDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactDetailPage');
    };
    ContactDetailPage.prototype.getTelArray = function () {
        var arr;
        for (var i = 0; i < this.contacts.length; i++) {
            arr = ("" + this.contacts[i].tel).split("");
            this.tel.push("(" + arr[0] + arr[1] + arr[2] + ") " + arr[3] + arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9]);
        }
    };
    ContactDetailPage.prototype.getFaxArray = function () {
        var arr = [];
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].fax != "") {
                arr = ("" + this.contacts[i].fax).split("");
                this.fax.push("(" + arr[0] + arr[1] + arr[2] + ") " + arr[3] + arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9]);
            }
            else {
                this.fax.push("");
            }
        }
    };
    ContactDetailPage.prototype.isCategory = function (i) {
        var groups = this.contacts[i].group.split(",");
        for (var j = 0; j < groups.length; j++) {
            if (this.category == groups[j])
                return true;
        }
        return false;
    };
    ContactDetailPage.prototype.checkFamilyorEmergency = function (i) {
        var groups = this.contacts[i].group.split(",");
        for (var j = 0; j < groups.length; j++) {
            if (groups[j] == "family" || groups[j] == "emergency")
                return true;
        }
        return false;
    };
    ContactDetailPage.prototype.checkDoctor = function (i) {
        var groups = this.contacts[i].group.split(",");
        for (var j = 0; j < groups.length; j++) {
            if (groups[j] == "doctor")
                return true;
        }
        return false;
    };
    ContactDetailPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    ContactDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact-detail/contact-detail.html"*/'<!--\n  Generated template for the ContactDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contacts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let contact of contacts; let i = index">\n    <div *ngIf="isCategory(i)">\n      <ion-list-header>{{contact.firstname}} {{contact.lastname}}</ion-list-header>\n      <ion-item>\n        Tel: {{tel[i]}}\n        <a href="tel:{{contact.tel}}" item-end>\n          <ion-icon name="call"></ion-icon>\n        </a>\n      </ion-item>\n      <ion-item *ngIf="contact.fax&&contact.fax!=\'\'">Fax: {{fax[i]}}</ion-item>\n      <ion-item *ngIf="checkDoctor(i)" text-wrap>Specialty: {{contact.specialty}}</ion-item>\n      <ion-item *ngIf="!((contact.location2&&contact.location2!=\'\') || (contact.location3&&contact.location3!=\'\'))" text-wrap>Address: {{contact.location1}}</ion-item>\n      <ion-item *ngIf="(contact.location2&&contact.location2!=\'\') || (contact.location3&&contact.location3!=\'\')" text-wrap>Address1: {{contact.location1}}</ion-item>\n      <ion-item *ngIf="contact.location2&&contact.location2!=\'\'" text-wrap>Address2: {{contact.location2}}</ion-item>\n      <ion-item *ngIf="contact.location3&&contact.location3!=\'\'" text-wrap>Address3: {{contact.location3}}</ion-item>\n      <ion-item *ngIf="checkFamilyorEmergency(i)" text-wrap>Relationship: {{contact.relationship}}</ion-item>\n    </div>\n  </ion-list>\n  <!-- <ion-card [hidden]="matchCategory">\n    <ion-card-header>\n      No record!\n    </ion-card-header>\n  </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact-detail/contact-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_contacts_contacts__["a" /* ContactsProvider */]])
    ], ContactDetailPage);
    return ContactDetailPage;
}());

//# sourceMappingURL=contact-detail.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_detail_contact_detail__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_add_contacts_contact_add_contacts__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.contacts = [
            {
                category: 'Emergency Contacts',
                name: 'emergency'
            },
            {
                category: 'Friend',
                name: 'friend'
            },
            {
                category: 'Family Members',
                name: 'family'
            },
            {
                category: 'Doctor',
                name: 'doctor'
            }
        ];
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.openPage = function (name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_detail_contact_detail__["a" /* ContactDetailPage */], { name: name });
    };
    ContactPage.prototype.addContact = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */]);
        modal.present();
        modal.onDidDismiss(function () {
            console.log("add contact");
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contacts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-list-header>\n        Category\n      </ion-list-header>\n    <button ion-item *ngFor="let contact of contacts" (click)="openPage(contact.name)">\n      {{contact.category}}\n    </button>\n  </ion-list>\n  <button ion-button block (click)="addContact()">Add Contacts</button>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticProcedureDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_question_control_question_control__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_health_records_health_records__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DiagnosticProcedureDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiagnosticProcedureDetailPage = (function () {
    function DiagnosticProcedureDetailPage(navCtrl, navParams, qp, qcp, auth, loadingCtrl, toastCtrl, alertCtrl, hrp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.hrp = hrp;
        this.tab = 'form';
        this.color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
        this.records = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        this.questions = this.qp.getDiagnosticProcedureQuestions(this.title, this.id);
        this.form = this.qcp.toFormGroup(this.questions);
        this.navcolor = this.color[(this.id + 1) % 3];
        // if (this.id == 2 || this.id == 5) {
        //   this.records = [
        //     {
        //       "organ": "liver",
        //       "results": [
        //         {
        //           "result": "BB",
        //           "date": "2018-06-15T01:37:58-04:00",
        //           "note": ""
        //         },
        //         {
        //           "result": "BBB",
        //           "date": "2018-06-12T01:37:58-04:00",
        //           "note": ""
        //         }
        //       ]
        //     },
        //     {
        //       "organ": "lung",
        //       "results": [
        //         {
        //           "result": "BB",
        //           "date": "2018-06-15T01:37:58-04:00",
        //           "note": ""
        //         }
        //       ]
        //     }
        //   ];
        // }
        // else if (this.id == 3 || this.id == 4) {
        //   this.records = [
        //     {
        //       "organ": "liver",
        //       "results": [
        //         {
        //           "result": "AA",
        //           "contrast": true,
        //           "date": "2018-06-15T01:37:58-04:00",
        //           "note": ":("
        //         },
        //         {
        //           "result": "AAA",
        //           "contrast": false,
        //           "date": "2018-06-12T01:37:58-04:00",
        //           "note": ""
        //         }
        //       ]
        //     },
        //     {
        //       "organ": "lung",
        //       "results": [
        //         {
        //           "result": "AA",
        //           "contrast": true,
        //           "date": "2018-06-15T01:37:58-04:00",
        //           "note": ""
        //         }
        //       ]
        //     }
        //   ]
        // }
        // else {
        //   this.records = [
        //     {
        //       "name": "Sleep Study",
        //       "results": [
        //         {
        //           "result": "AAA",
        //           "date": "2018-06-15T01:37:58-04:00",
        //           "note": ""
        //         },
        //         {
        //           "result": "BBB",
        //           "date": "2018-06-12T01:37:58-04:00",
        //           "note": ""
        //         }
        //       ]
        //     }
        //   ];
        // }
        // this.records[0]['open'] = true;
        // for (let i = 1; i < this.records.length; i++) {
        //   this.records[i]['open'] = false;
        // }
        this.hrp.getDiagnosticProcedure(this.auth.userId, this.id)
            .subscribe(function (records) {
            _this.records = records;
            if (_this.records.length != 0) {
                _this.records[0]['open'] = true;
                for (var i = 1; i < _this.records.length; i++) {
                    _this.records[i]['open'] = false;
                }
            }
            console.log(_this.records);
        }, function (errmess) { return _this.errMess = errmess; });
        console.log(this.records);
    }
    DiagnosticProcedureDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiagnosticProcedureDetailPage');
    };
    DiagnosticProcedureDetailPage.prototype.toggleSection = function (i) {
        this.records[i].open = !this.records[i].open;
    };
    DiagnosticProcedureDetailPage.prototype.showNotes = function (i, j) {
        var alert = this.alertCtrl.create({
            message: 'Notes: ' + this.records[i].results[j].note,
            enableBackdropDismiss: true
        });
        alert.present();
    };
    DiagnosticProcedureDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payload = this.form.value;
        console.log(payload);
        this.hrp.addDiagnosticProcedure(this.auth.userId, this.id, payload)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.hrp.getDiagnosticProcedure(_this.auth.userId, _this.id)
                .subscribe(function (records) {
                _this.records = records;
                if (_this.records.length != 0) {
                    _this.records[0]['open'] = true;
                    for (var i = 1; i < _this.records.length; i++) {
                        _this.records[i]['open'] = false;
                    }
                }
                console.log(_this.records);
                _this.tab = 'history';
            }, function (errmess) { return _this.errMess = errmess; });
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    DiagnosticProcedureDetailPage.prototype.deleteRecord = function (i, j) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.hrp.deleteDiagnosticProcedure(_this.auth.userId, _this.id, i, j)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.hrp.getDiagnosticProcedure(_this.auth.userId, _this.id)
                                .subscribe(function (records) {
                                _this.records = records;
                                if (_this.records.length != 0) {
                                    _this.records[0]['open'] = true;
                                    for (var i_1 = 1; i_1 < _this.records.length; i_1++) {
                                        _this.records[i_1]['open'] = false;
                                    }
                                }
                                console.log(_this.records);
                                _this.tab = 'history';
                            }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    DiagnosticProcedureDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    DiagnosticProcedureDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    DiagnosticProcedureDetailPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    DiagnosticProcedureDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-diagnostic-procedure-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/diagnostic-procedure-detail/diagnostic-procedure-detail.html"*/'<!--\n  Generated template for the DiagnosticProcedureDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar [color]="navcolor">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar [color]="navcolor">\n    <ion-segment color="light" [(ngModel)]="tab">\n      <ion-segment-button value="form">\n        TRACK\n      </ion-segment-button>\n      <ion-segment-button value="history">\n        HISTORY\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="tab">\n    <div *ngSwitchCase="\'form\'">\n      <ion-card>\n        <ion-card-content>\n          <div>\n            <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n              <div *ngFor="let question of questions">\n                <ion-item>\n                  <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n                </ion-item>\n              </div>\n\n              <div>\n                <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n              </div>\n\n            </form>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'history\'">\n      <ion-list *ngIf="records.length!=0">\n        <div>\n          <ion-card *ngFor="let d of records; let i = index">\n            <ion-card-header>\n              <ion-item (click)="toggleSection(i)" no-padding>\n                <ion-label *ngIf="d.organ" text-wrap>{{d.organ}}</ion-label>\n                <ion-label *ngIf="d.name" text-wrap>{{d.name}}</ion-label>\n                <ion-icon item-right name="arrow-forward" *ngIf="!d.open"></ion-icon>\n                <ion-icon item-right name="arrow-down" *ngIf="d.open"></ion-icon>\n              </ion-item>\n            </ion-card-header>\n            <ion-list *ngIf="d.open && d.results" no-padding>\n              <ion-item-sliding *ngFor="let r of d.results; let j = index">\n                <ion-item (click)="showNotes(i, j)">\n                  <div>\n                    <h3 text-wrap>{{r.result}}</h3>\n                    <ion-note *ngIf="r.contrast!=undefined">{{r.date | date}}</ion-note>\n                  </div>\n                  <ion-note *ngIf="r.contrast==undefined" item-right>{{r.date | date}}</ion-note>\n                  <ion-note *ngIf="r.contrast==true" item-right>With Contrast</ion-note>\n                </ion-item>\n                <ion-item-options side="right" icon-start>\n                  <button ion-button color="danger" (click)="deleteRecord(i, j)">\n                    <ion-icon name="trash"></ion-icon>\n                    Delete\n                  </button>\n                </ion-item-options>\n              </ion-item-sliding>\n            </ion-list>\n          </ion-card>\n        </div>\n      </ion-list>\n      <ion-card [hidden]="records.length!=0">\n        <ion-card-header>No record.</ion-card-header>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/diagnostic-procedure-detail/diagnostic-procedure-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], DiagnosticProcedureDetailPage);
    return DiagnosticProcedureDetailPage;
}());

//# sourceMappingURL=diagnostic-procedure-detail.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticProcedurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_diagnostic_procedure_classification_diagnostic_procedure_classification__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DiagnosticProcedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiagnosticProcedurePage = (function () {
    function DiagnosticProcedurePage(navCtrl, navParams, dpcp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dpcp = dpcp;
        this.tiles = this.dpcp.getMenu(0);
    }
    DiagnosticProcedurePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiagnosticProcedurePage');
    };
    DiagnosticProcedurePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-diagnostic-procedure',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/diagnostic-procedure/diagnostic-procedure.html"*/'<!--\n  Generated template for the DiagnosticProcedurePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Diagnostic Procedure</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <tile [tiles]="tiles"></tile>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/diagnostic-procedure/diagnostic-procedure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_diagnostic_procedure_classification_diagnostic_procedure_classification__["a" /* DiagnosticProcedureClassificationProvider */]])
    ], DiagnosticProcedurePage);
    return DiagnosticProcedurePage;
}());

//# sourceMappingURL=diagnostic-procedure.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyHistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_history_history__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the FamilyHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FamilyHistoryDetailPage = (function () {
    function FamilyHistoryDetailPage(navCtrl, navParams, qp, qcp, viewCtrl, loadingCtrl, toastCtrl, historyProvider, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.auth = auth;
        this.form = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"]({});
        this.questions = this.qp.getFamilyHistoryQuestions();
        this.form = this.qcp.toFormGroup(this.questions);
    }
    FamilyHistoryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FamilyHistoryDetailPage');
    };
    FamilyHistoryDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FamilyHistoryDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payload = this.form.value;
        console.log(payload);
        this.historyProvider.addFamilyHistory(this.auth.userId, payload)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add medical history record.');
        });
    };
    FamilyHistoryDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    FamilyHistoryDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    FamilyHistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-family-history-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/family-history-detail/family-history-detail.html"*/'<!--\n  Generated template for the FamilyHistoryDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Family History</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n\n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n          </div>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/family-history-detail/family-history-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], FamilyHistoryDetailPage);
    return FamilyHistoryDetailPage;
}());

//# sourceMappingURL=family-history-detail.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_reset_password_reset__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, menuCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    WelcomePage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.resetPassword = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__password_reset_password_reset__["a" /* PasswordResetPage */]);
        modal.present();
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/welcome/welcome.html"*/'<ion-content padding class="content">\n  <div class="title-wrapper">\n    <div>\n      <a>\n        PITT\n        <br> MOBILE\n        <br> PHR\n      </a>\n    </div>\n    <p class="font">A way to manage your health data</p>\n  </div>\n\n  <div class="botton-wrapper">\n    <button ion-button block (click)="signup()">SIGNUP</button>\n    <button ion-button class="botton-space" block color="primary-pale" (click)="login()">LOGIN</button>\n    <button ion-button clear color="light" (click)="resetPassword()" no-padding>Forget password?</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__family_history_detail_family_history_detail__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_history_history__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FamilyHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FamilyHistoryPage = (function () {
    function FamilyHistoryPage(navCtrl, navParams, modalCtrl, auth, alertCtrl, toastCtrl, historyProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.records = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        // get sorted records
        // this.records = [
        //   {
        //     relationship: 'Father',
        //     name: 'Martin Perkins',
        //     alive: true,
        //     disease: 'diabetes',
        //     date: '2008/08/26'
        //   },
        //   {
        //     relationship: 'Sister',
        //     name: 'Ross Perkins',
        //     alive: true,
        //     disease: 'hypertension',
        //     date: '2017/02/19'
        //   }
        // ];
        this.historyProvider.getFamilyHistory(this.auth.userId)
            .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
    }
    FamilyHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FamilyHistoryPage');
    };
    FamilyHistoryPage.prototype.addFamilyHistory = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__family_history_detail_family_history_detail__["a" /* FamilyHistoryDetailPage */]);
        modal.present();
        modal.onWillDismiss(function () {
            _this.historyProvider.getFamilyHistory(_this.auth.userId)
                .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    FamilyHistoryPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.historyProvider.deleteFamilyHistory(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.historyProvider.getFamilyHistory(_this.auth.userId)
                                .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    FamilyHistoryPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    FamilyHistoryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    FamilyHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-family-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/family-history/family-history.html"*/'<!--\n  Generated template for the FamilyHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>FAMILY HISTORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.length!=0">\n    <ion-list-header>Family History</ion-list-header>\n    <ion-item-sliding *ngFor="let record of records; let i = index">\n      <ion-item>\n        <div class="white-space">\n          <h3 *ngIf="record.name">Name: {{record.name | titlecase}}</h3>\n          <h3>Disease: {{record.disease}}</h3>\n          <p>{{record.date | date}}</p>\n        </div>\n        <p item-end>{{record.relationship}}</p>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No family history record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addFamilyHistory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/family-history/family-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_history_history__["a" /* HistoryProvider */]])
    ], FamilyHistoryPage);
    return FamilyHistoryPage;
}());

//# sourceMappingURL=family-history.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ImmunizationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImmunizationDetailPage = (function () {
    function ImmunizationDetailPage(navCtrl, navParams, qp, loadingCtrl, toastCtrl, viewCtrl, auth, hrp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.auth = auth;
        this.hrp = hrp;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({});
        this.color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        this.questions = this.qp.getImmunizationQuestions(this.title);
        this.form = this.toFormGroup();
        this.navcolor = this.color[(this.id - 1) % 3];
    }
    ImmunizationDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImmunizationDetailPage');
    };
    ImmunizationDetailPage.prototype.toFormGroup = function () {
        var group = {};
        for (var i = 0; i < this.questions.length; i++) {
            var val = (this.questions[i].value == undefined) ? '' : this.questions[i].value;
            if (i == 1) {
                group[this.questions[i].selectkey] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.questions[i].selectvalue, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
                group[this.questions[i].inputkey] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.questions[i].inputvalue, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
                group[this.questions[i].datetimekey] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.questions[i].datetimevalue, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
            }
            else {
                group[this.questions[i].key] = this.questions[i].required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](val, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required) : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](val);
            }
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](group);
    };
    ImmunizationDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ImmunizationDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payload = this.form.value;
        payload['date'] = __WEBPACK_IMPORTED_MODULE_6_moment__().format();
        console.log(payload);
        this.hrp.addImmunization(this.auth.userId, payload)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    ImmunizationDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    ImmunizationDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ImmunizationDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-immunization-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization-detail/immunization-detail.html"*/'<!--\n  Generated template for the ImmunizationDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar [color]="navcolor">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n\n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n          </div>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization-detail/immunization-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], ImmunizationDetailPage);
    return ImmunizationDetailPage;
}());

//# sourceMappingURL=immunization-detail.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lab_test_detail_lab_test_detail__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_health_records_health_records__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_search_filter_search_filter__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LabTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LabTestPage = (function () {
    function LabTestPage(navCtrl, navParams, hrp, sfp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hrp = hrp;
        this.sfp = sfp;
        this.list = [];
        // set an empty array with 26 initials.
        for (var i = 0; i < 26; i++) {
            this.list.push({ initial: String.fromCharCode(65 + i), category: new Array(0) });
        }
        console.log(this.list);
        // get common lab test list
        this.hrp.getLabTestCategory()
            .subscribe(function (list) {
            console.log(list);
            list.forEach(function (title) {
                // insert each category into corresponding initial
                if (title.name.charCodeAt(0) > 90) {
                    _this.list[title.name.charCodeAt(0) - 97].category.push(title);
                }
                else {
                    _this.list[title.name.charCodeAt(0) - 65].category.push(title);
                }
            });
            // delete empty initials
            for (var i = 0; i < _this.list.length; i++) {
                if (_this.list[i].category.length == 0) {
                    _this.list.splice(i, 1);
                    i--;
                }
            }
        }, function (errmess) { return _this.errMess = errmess; });
        console.log(this.list);
    }
    LabTestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LabTestPage');
    };
    LabTestPage.prototype.onItemSelected = function (event) {
        console.log(event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lab_test_detail_lab_test_detail__["a" /* LabTestDetailPage */], {
            'id': event.id,
            'title': event.name,
            'subtest': event.subtest
        });
    };
    LabTestPage.prototype.goToCategory = function (i, j) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lab_test_detail_lab_test_detail__["a" /* LabTestDetailPage */], {
            'id': this.list[i].category[j].id,
            'title': this.list[i].category[j].name,
            'subtest': this.list[i].category[j].subtest
        });
    };
    LabTestPage.prototype.goToOtherTest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lab_test_detail_lab_test_detail__["a" /* LabTestDetailPage */], {
            'id': 0,
            'title': 'Other Tests',
            'subtest': []
        });
    };
    LabTestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lab-test',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/lab-test/lab-test.html"*/'<!--\n  Generated template for the MedicalrecordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Lab Test</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-auto-complete [dataProvider]="sfp" (itemSelected)="onItemSelected($event)" #searchbar></ion-auto-complete>\n\n  <ion-list>\n    <ion-list-header>Common Tests</ion-list-header>\n    <ion-item-group *ngFor="let l of list; let i = index">\n      <ion-item-divider color="light">{{l.initial}}</ion-item-divider>\n      <div *ngFor="let c of l.category; let j = index">\n        <button ion-item (click)="goToCategory(i,j)" text-wrap>{{c.name}}</button>\n      </div>\n    </ion-item-group>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>Other Tests</ion-list-header>\n    <button ion-item color="light" (click)="goToOtherTest()">Add other tests\' records</button>\n  </ion-list>\n\n  <!-- <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="goToHome($event)">\n      <ion-icon name="home"></ion-icon>\n    </button>\n  </ion-fab> -->\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/lab-test/lab-test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_health_records_health_records__["a" /* HealthRecordsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_search_filter_search_filter__["a" /* SearchFilterProvider */]])
    ], LabTestPage);
    return LabTestPage;
}());

//# sourceMappingURL=lab-test.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalHistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_history_history__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MedicalHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicalHistoryDetailPage = (function () {
    function MedicalHistoryDetailPage(navCtrl, navParams, qp, qcp, viewCtrl, loadingCtrl, toastCtrl, historyProvider, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.auth = auth;
        this.form = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"]({});
        this.questions = this.qp.getMedicalHistoryQuestions();
        this.form = this.qcp.toFormGroup(this.questions);
    }
    MedicalHistoryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicalHistoryDetailPage');
    };
    MedicalHistoryDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MedicalHistoryDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payload = this.form.value;
        console.log(payload);
        this.historyProvider.addMedicalHistory(this.auth.userId, payload)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add medical history record.');
        });
    };
    MedicalHistoryDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    MedicalHistoryDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MedicalHistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-medical-history-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medical-history-detail/medical-history-detail.html"*/'<!--\n  Generated template for the MedicalHistoryDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Medical History</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n\n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n          </div>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medical-history-detail/medical-history-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], MedicalHistoryDetailPage);
    return MedicalHistoryDetailPage;
}());

//# sourceMappingURL=medical-history-detail.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medical_history_detail_medical_history_detail__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_history_history__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MedicalHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicalHistoryPage = (function () {
    function MedicalHistoryPage(navCtrl, navParams, modalCtrl, auth, alertCtrl, toastCtrl, historyProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.records = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        // this.records = [
        //   {
        //     diagnosis: 'diabetes',
        //     date: '2008/08/26'
        //   },
        //   {
        //     diagnosis: 'hypertension',
        //     date: '2017/02/19'
        //   }
        // ];
        // get sorted records
        this.historyProvider.getMedicalHistory(this.auth.userId)
            .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
    }
    MedicalHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicalHistoryPage');
    };
    MedicalHistoryPage.prototype.addMedicalHistory = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__medical_history_detail_medical_history_detail__["a" /* MedicalHistoryDetailPage */]);
        modal.present();
        modal.onWillDismiss(function () {
            _this.historyProvider.getMedicalHistory(_this.auth.userId)
                .subscribe(function (allergy) { return _this.records = allergy; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    MedicalHistoryPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.historyProvider.deleteMedicalHistory(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.historyProvider.getMedicalHistory(_this.auth.userId)
                                .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    MedicalHistoryPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    MedicalHistoryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MedicalHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-medical-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medical-history/medical-history.html"*/'<!--\n  Generated template for the MedicalHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MEDICAL HISTORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.length!=0">\n    <ion-list-header>My Medical History</ion-list-header>\n    <ion-item-sliding *ngFor="let record of records; let i = index">\n      <ion-item>\n        <div class="white-space">\n          <h3>Diagnosis: {{record.diagnosis}}</h3>\n          <p>{{record.date | date}}</p>\n        </div>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No medical history record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addMedicalHistory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medical-history/medical-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_history_history__["a" /* HistoryProvider */]])
    ], MedicalHistoryPage);
    return MedicalHistoryPage;
}());

//# sourceMappingURL=medical-history.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PasswordEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordEditPage = (function () {
    function PasswordEditPage(navCtrl, navParams, fb, viewCtrl, loadingCtrl, toastCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.formErrors = {
            "currentPassword": '',
            "newPassword": '',
            "confirmPassword": ''
        };
        this.validationMessages = {
            "currentPassword": {
                "required": "Current password is required."
            },
            "newPassword": {
                "required": "New password is required.",
                "pattern": "Password must be 8-17 characters long and contains at least one number, one letter and one unique character such as !@#$%^&*?\"';:"
            },
            "confirmPassword": {
                "required": "Please enter your password again.",
                "notEquivalent": "Password doesn't match."
            }
        };
        this.editpasswordForm = this.fb.group({
            currentPassword: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            newPassword: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[\!\@\#\$\%\^\&\*\?\"\'\;\:]).*$')]],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required]
        }, { validator: this.pwdMatchValidator('newPassword', 'confirmPassword') });
        this.editpasswordForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    }
    PasswordEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordEditPage');
    };
    PasswordEditPage.prototype.onValueChanged = function (data) {
        if (!this.editpasswordForm) {
            return;
        }
        var form = this.editpasswordForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    PasswordEditPage.prototype.pwdMatchValidator = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    PasswordEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PasswordEditPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Editing...');
        var payload = this.editpasswordForm.value;
        delete payload.confirmPassword;
        console.log(payload);
        this.auth.editPassword(this.auth.userId, payload)
            .subscribe(function (res) {
            if (res == -1) {
                _this.loading.dismiss();
                _this.presentToast("Wrong password.");
            }
            else {
                _this.loading.dismiss();
                _this.presentToast('Successfully edited!');
                _this.viewCtrl.dismiss();
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    PasswordEditPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    PasswordEditPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PasswordEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-password-edit',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/password-edit/password-edit.html"*/'<!--\n  Generated template for the PasswordEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Edit Password</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]=\'editpasswordForm\' (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked color="primary">Current Password\n          <span class="color-red">*</span>\n        </ion-label>\n        <ion-input type="password" formControlName="currentPassword"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.currentPassword)">{{formErrors.currentPassword}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">New Password\n          <span class="color-red">*</span>\n        </ion-label>\n        <ion-input type="password" formControlName="newPassword"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.newPassword)">{{formErrors.newPassword}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">Confirm Password\n          <span class="color-red">*</span>\n        </ion-label>\n        <ion-input type="password" formControlName="confirmPassword"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.confirmPassword)">{{formErrors.confirmPassword}}</span>\n      </div>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!editpasswordForm.valid">Submit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/password-edit/password-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], PasswordEditPage);
    return PasswordEditPage;
}());

//# sourceMappingURL=password-edit.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfileEditablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileEditablePage = (function () {
    function ProfileEditablePage(navCtrl, navParams, fb, viewCtrl, toastCtrl, loadingCtrl, userProvider, auth) {
        // this.profile = {
        //   username: "km111",
        //   firstname: "Kelly",
        //   lastname: "Marsh",
        //   gender: "male",
        //   email: "KellyM@gmail.com",
        //   tel: "4125890011",
        //   address: "100 Fifth Ave\nApt 119",
        //   birthday: "11/11/1911",
        //   race: "White"
        // };
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userProvider = userProvider;
        this.auth = auth;
        this.profile = {};
        this.formErrors = {
            "firstname": '',
            "lastname": '',
            "email": '',
            "tel": '',
            "birthday": ''
        };
        this.validationMessages = {
            "firstname": {
                "minlength": "Firstname must be at least 2 characters long.",
                "maxlength": "Firstname cannot be more than 25 characters long."
            },
            "lastname": {
                "minlength": "Lastname must be at least 2 characters long.",
                "maxlength": "Lastname cannot be more than 25 characters long."
            },
            "email": {
                "required": "Email is required.",
                "email": "Please enter a valid email address."
            },
            "tel": {
                "pattern": "Please enter a valid 10-digit phone number. For example: 4123456789."
            },
            "birthday": {
                "pattern": "Please enter your birthday in MM/DD/YYYY format."
            }
        };
        // get profile from database
        this.userProvider.getProfile(this.auth.userId)
            .subscribe(function (profile) { return _this.profile = profile; }, function (errmess) { return _this.errMess = errmess; });
        this.profileForm = this.fb.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            gender: [this.profile.gender],
            race: [this.profile.race],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]],
            tel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{10}')],
            address: [''],
            birthday: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('(^(((0[1-9]|1[012])/(0[1-9]|1[0-9]|2[0-8]))|((0[13578]|1[02])/(29|30|31))|((0[469]|11)/(29|30)))/(19|20)\\d\\d$)|(^02/29/(19(04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)|20(([02468][048])|([13579][26])))$)')]
        });
        this.profileForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    }
    ProfileEditablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileEditablePage');
    };
    ProfileEditablePage.prototype.onValueChanged = function (data) {
        if (!this.profileForm) {
            return;
        }
        var form = this.profileForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ProfileEditablePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProfileEditablePage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('editing...');
        var profile = this.profileForm.value;
        console.log(profile);
        // post edited profile
        this.userProvider.editProfile(this.auth.userId, profile)
            .subscribe(function (profile) {
            _this.loading.dismiss();
            _this.presentToast('Successfully edited.');
            _this.viewCtrl.dismiss();
        }, function (error) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + error);
        });
    };
    ProfileEditablePage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    ProfileEditablePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ProfileEditablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile-editable',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/profile-editable/profile-editable.html"*/'<!--\n  Generated template for the ProfileEditablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form novalidate [formGroup]="profileForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked color="primary">Firstname</ion-label>\n        <ion-input value="{{profile.firstname | titlecase}}" type="text" formControlName="firstname"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.firstname)">{{formErrors.firstname}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">Lastname</ion-label>\n        <ion-input value="{{profile.lastname | titlecase}}" type="text" formControlName="lastname"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.lastname)">{{formErrors.lastname}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">Gender</ion-label>\n        <ion-select formControlName="gender">\n          <ion-option value="female">Female</ion-option>\n          <ion-option value="male">Male</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked color="primary">Race and Ethnicity</ion-label>\n        <ion-select formControlName="race">\n          <ion-option>Hispanic or Latino</ion-option>\n          <ion-option>White</ion-option>\n          <ion-option>Black or African American</ion-option>\n          <ion-option>Native Hawaiian or Other Pacific Islander</ion-option>\n          <ion-option>Asian</ion-option>\n          <ion-option>American Indian or Alaskan Native</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked color="primary">Email<span class="color-red">*</span></ion-label>\n        <ion-input value="{{profile.email}}" type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.email)">{{formErrors.email}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">Phone</ion-label>\n        <ion-input value="{{profile.tel}}" type="tel" formControlName="tel" placeholder="enter only numbers"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.tel)">{{formErrors.tel}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">Address</ion-label>\n        <ion-textarea value="{{profile.address}}" type="text" formControlName="address"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked color="primary">Birthday</ion-label>\n        <ion-input value="{{profile.birthday | date:\'MM/dd/yyyy\'}}" type="text" formControlName="birthday"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.birthday)">{{formErrors.birthday}}</span>\n      </div>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!profileForm.valid">Edit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/profile-editable/profile-editable.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ProfileEditablePage);
    return ProfileEditablePage;
}());

//# sourceMappingURL=profile-editable.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_editable_profile_editable__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__password_edit_password_edit__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, modalCtrl, userProvider, auth, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.userProvider = userProvider;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.profile = {};
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        //get profile from database
        this.userProvider.getProfile(this.auth.userId)
            .subscribe(function (profile) { return _this.profile = profile; }, function (errmess) { return _this.errMess = errmess; });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.editProfile = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__profile_editable_profile_editable__["a" /* ProfileEditablePage */]);
        modal.present();
        modal.onWillDismiss(function () {
            _this.userProvider.getProfile(_this.auth.userId)
                .subscribe(function (profile) { return _this.profile = profile; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    ProfilePage.prototype.editPassword = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__password_edit_password_edit__["a" /* PasswordEditPage */]);
        modal.present();
    };
    ProfilePage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item no-lines>\n      <ion-icon name="contact" color="primary" item-start></ion-icon>\n      <ion-label>\n        <b>{{profile.username}}</b>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Name</ion-label>\n      <ion-input value="{{profile.firstname | titlecase}} {{profile.lastname | titlecase}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Gender</ion-label>\n      <ion-input value="{{profile.gender | titlecase}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Race and Ethnicity</ion-label>\n      <ion-input value="{{profile.race}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Email</ion-label>\n      <ion-input value="{{profile.email}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Phone</ion-label>\n      <ion-input value="{{profile.tel}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Address</ion-label>\n      <ion-textarea value="{{profile.address}}" readonly></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Birthday</ion-label>\n      <ion-input value="{{profile.birthday | date}}" readonly></ion-input>\n    </ion-item>\n    <button ion-item (click)="editProfile()">\n      <ion-label color="primary">Edit Profile</ion-label>\n    </button>\n    <button ion-item (click)="editPassword()">\n      <ion-label color="primary">Edit Password</ion-label>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesAddResourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_resources_resources__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ResourcesAddResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResourcesAddResourcesPage = (function () {
    function ResourcesAddResourcesPage(navCtrl, navParams, fb, viewCtrl, toastCtrl, loadingCtrl, auth, resourcesProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.resourcesProvider = resourcesProvider;
        this.formErrors = {
            "title": '',
            "url": ''
        };
        this.validationMessages = {
            "title": {
                "required": "Name is required.",
            },
            "url": {
                "required": "URL is required.",
            }
        };
        this.newResourceForm = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            url: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required]
        });
        this.newResourceForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    }
    ResourcesAddResourcesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResourcesAddResourcesPage');
    };
    ResourcesAddResourcesPage.prototype.onValueChanged = function (data) {
        if (!this.newResourceForm) {
            return;
        }
        var form = this.newResourceForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ResourcesAddResourcesPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ResourcesAddResourcesPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var url = this.newResourceForm.value.url;
        var payload = this.newResourceForm.value;
        // delete "https" or "http" in url
        if (url.indexOf("https://") != -1) {
            payload["url"] = url.substr(8);
        }
        else if (url.indexOf("http://") != -1) {
            payload["url"] = url.substr(7);
        }
        console.log(payload);
        // post new resource info
        this.resourcesProvider.addResource(this.auth.userId, payload)
            .subscribe(function (resource) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added a new resource.');
            _this.viewCtrl.dismiss();
        }, function (error) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + error);
        });
    };
    ResourcesAddResourcesPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    ResourcesAddResourcesPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ResourcesAddResourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-resources-add-resources',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/resources-add-resources/resources-add-resources.html"*/'<!--\n  Generated template for the ResourcesAddResourcesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>New Resource</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="newResourceForm" (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label stacked>Resource name\n        <span class="color-red">*</span>\n      </ion-label>\n      <ion-input formControlName="title"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.title)">{{formErrors.title}}</span>\n    </div>\n    <ion-item>\n      <ion-label stacked>Resource URL\n        <span class="color-red">*</span>\n      </ion-label>\n      <ion-input formControlName="url"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.url)">{{formErrors.url}}</span>\n    </div>\n    <button ion-button block type="submit" [disabled]="!newResourceForm.valid">Add</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/resources-add-resources/resources-add-resources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_resources_resources__["a" /* ResourcesProvider */]])
    ], ResourcesAddResourcesPage);
    return ResourcesAddResourcesPage;
}());

//# sourceMappingURL=resources-add-resources.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resources_add_resources_resources_add_resources__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_resources_resources__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResourcesPage = (function () {
    function ResourcesPage(navCtrl, navParams, iab, modalCtrl, resourcesProvider, auth, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.modalCtrl = modalCtrl;
        this.resourcesProvider = resourcesProvider;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.resources = [];
        this.customizeResources = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        this.resources = [
            {
                title: "Immunization Schedules",
                url: "https://www.cdc.gov/vaccines/schedules/index.html"
            },
            {
                title: "Weight Management",
                url: "https://www.nutrition.gov/weight-management"
            },
            {
                title: "Physical Activity Guidelines",
                url: "https://health.gov/paguidelines/"
            },
            {
                title: "Lab Tests",
                url: "https://labtestsonline.org/"
            },
            {
                title: "Lab Test Reference Ranges",
                url: "http://laboratory.uchealth.com/tests/reference-ranges-pdf/"
            }
        ];
        //get customize resources
        this.resourcesProvider.getResources(this.auth.userId)
            .subscribe(function (resources) { return _this.customizeResources = resources; }, function (errmess) { return _this.errMess = errmess; });
    }
    ResourcesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResourcesPage');
    };
    ResourcesPage.prototype.openLink = function (i) {
        this.iab.create(this.resources[i].url, '_system', 'location=yes');
    };
    ResourcesPage.prototype.openCustomizeLink = function (j) {
        this.iab.create('//' + this.customizeResources[j].url, '_system', 'location=yes');
    };
    ResourcesPage.prototype.addResource = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__resources_add_resources_resources_add_resources__["a" /* ResourcesAddResourcesPage */]);
        modal.present();
        modal.onWillDismiss(function () {
            _this.resourcesProvider.getResources(_this.auth.userId)
                .subscribe(function (resources) { return _this.customizeResources = resources; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    ResourcesPage.prototype.deleteRecord = function (j) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this link?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.resourcesProvider.deleteResource(_this.auth.userId, j)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.resourcesProvider.getResources(_this.auth.userId)
                                .subscribe(function (resources) { return _this.customizeResources = resources; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    ResourcesPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    ResourcesPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ResourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resources',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/resources/resources.html"*/'<!--\n  Generated template for the ResourcesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Resources</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>Reference Links</ion-card-header>\n    <ion-card-content>\n      <ion-list *ngFor="let r of resources; let i = index;" no-padding>\n        <ion-item text-wrap>\n          <h3>\n            <a href="#" (click)="openLink(i)">{{r.title}}</a>\n          </h3>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="customizeResources.length!=0">\n    <ion-card-header>My Resources</ion-card-header>\n    <ion-card-content>\n      <ion-list no-padding>\n        <ion-item-sliding *ngFor="let cr of customizeResources; let j = index;">\n          <ion-item text-wrap>\n            <h3>\n              <a href="#" (click)="openCustomizeLink(j)">{{cr.title}}</a>\n            </h3>\n          </ion-item>\n          <ion-item-options side="right" icon-start>\n            <button ion-button color="danger" (click)="deleteRecord(j)">\n              <ion-icon name="trash"></ion-icon>\n              Delete\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addResource()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/resources/resources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_resources_resources__["a" /* ResourcesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ResourcesPage);
    return ResourcesPage;
}());

//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialHistoryCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_social_history_classification_social_history_classification__ = __webpack_require__(422);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SocialHistoryCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SocialHistoryCategoryPage = (function () {
    function SocialHistoryCategoryPage(navCtrl, navParams, scp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scp = scp;
        // get Main Menu
        this.tiles = this.scp.getMenu(0);
    }
    SocialHistoryCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SocialHistoryCategoryPage');
    };
    SocialHistoryCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-social-history-category',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history-category/social-history-category.html"*/'<!--\n  Generated template for the SocialHistoryCategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Social History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <tile [tiles]="tiles"></tile>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history-category/social-history-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_social_history_classification_social_history_classification__["a" /* SocialHistoryClassificationProvider */]])
    ], SocialHistoryCategoryPage);
    return SocialHistoryCategoryPage;
}());

//# sourceMappingURL=social-history-category.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialHistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_history_history__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SocialHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SocialHistoryDetailPage = (function () {
    function SocialHistoryDetailPage(navCtrl, navParams, qp, qcp, viewCtrl, loadingCtrl, toastCtrl, historyProvider, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.auth = auth;
        this.form = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"]({});
        this.color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        console.log(this.id);
        this.questions = this.qp.getSocialHistoryQuestions(this.id);
        this.form = this.qcp.toFormGroup(this.questions);
        this.navcolor = this.color[(this.id - 1) % 3];
    }
    SocialHistoryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SocialHistoryDetailPage');
    };
    SocialHistoryDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SocialHistoryDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payload = this.form.value;
        console.log(payload);
        this.historyProvider.addSocialHistory(this.auth.userId, this.title, payload)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
            console.log(err);
        });
    };
    SocialHistoryDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    SocialHistoryDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SocialHistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-social-history-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history-detail/social-history-detail.html"*/'<!--\n  Generated template for the SocialHistoryDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar [color]="navcolor">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n\n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n          </div>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history-detail/social-history-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SocialHistoryDetailPage);
    return SocialHistoryDetailPage;
}());

//# sourceMappingURL=social-history-detail.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_history_category_social_history_category__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_history_history__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SocialHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SocialHistoryPage = (function () {
    function SocialHistoryPage(navCtrl, navParams, auth, alertCtrl, toastCtrl, historyProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.records = { smoking: [], alcohol: [], drug: [], travel: [], housing: [] };
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        // get sorted records
        // this.records = {
        //   smoking: [
        //     {
        //       amount: 3,
        //       date: '2018/01/09'
        //     },
        //     {
        //       amount: 7,
        //       date: '2018/01/01'
        //     }
        //   ],
        //   alcohol: [
        //     {
        //       name: 'wine',
        //       amount: '6',
        //       alcohol: '13.8',
        //       date: '2018/04/18'
        //     }
        //   ],
        //   drug: [],
        //   travel: [
        //     {
        //       location: 'New York City',
        //       note: 'Nice experience',
        //       date: '2018/05/01'
        //     }
        //   ],
        //   housing: [
        //     {
        //       type: 'apartment',
        //       moveindate: '2017/08/01',
        //       moveoutdate: '2018/01/01',
        //       note: ''
        //     }
        //   ]
        // };
        this.historyProvider.getSocialHistory(this.auth.userId)
            .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
    }
    SocialHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SocialHistoryPage');
    };
    SocialHistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.historyProvider.getSocialHistory(this.auth.userId)
            .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
    };
    SocialHistoryPage.prototype.addSocialHistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__social_history_category_social_history_category__["a" /* SocialHistoryCategoryPage */]);
    };
    SocialHistoryPage.prototype.deleteRecord = function (type, i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.historyProvider.deleteSocialHistory(_this.auth.userId, type, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.historyProvider.getSocialHistory(_this.auth.userId)
                                .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    SocialHistoryPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    SocialHistoryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SocialHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-social-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history/social-history.html"*/'<!--\n  Generated template for the SocialHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SOCIAL HISTORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="records.length!=0">\n    <ion-list *ngIf="records.smoking.length!=0">\n      <ion-list-header>Smoking History</ion-list-header>\n      <ion-item-sliding *ngFor="let s of records.smoking; let i = index">\n        <ion-item>\n          <div class="white-space">\n            <h3>Cigarettes: {{s.amount}}</h3>\n            <p>{{s.date | date}}</p>\n          </div>\n        </ion-item>\n        <ion-item-options side="right" icon-start>\n          <button ion-button color="danger" (click)="deleteRecord(\'smoking\', i)">\n            <ion-icon name="trash"></ion-icon>\n            Delete\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <ion-list *ngIf="records.alcohol.length!=0">\n      <ion-list-header>Alcohol History</ion-list-header>\n      <ion-item-sliding *ngFor="let a of records.alcohol; let j = index">\n        <ion-item>\n          <div class="white-space">\n            <h3>Name: {{a.name}}</h3>\n            <h3>Amount: {{a.amount}} oz</h3>\n            <h3>Alcohol: {{a.alcohol}} %</h3>\n            <p>{{a.date | date}}</p>\n          </div>\n        </ion-item>\n        <ion-item-options side="right" icon-start>\n          <button ion-button color="danger" (click)="deleteRecord(\'alcohol\', j)">\n            <ion-icon name="trash"></ion-icon>\n            Delete\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <ion-list *ngIf="records.drug.length!=0">\n      <ion-list-header>Drug History</ion-list-header>\n      <ion-item-sliding *ngFor="let p of records.drug; let k = index">\n        <ion-item>\n          <div class="white-space">\n            <h3>Name: {{p.name}}</h3>\n            <h3>Amount: {{p.amount}}</h3>\n            <h3>Notes: {{p.note}}</h3>\n            <p>{{p.date | date}}</p>\n          </div>\n        </ion-item>\n        <ion-item-options side="right" icon-start>\n          <button ion-button color="danger" (click)="deleteRecord(\'drug\', k)">\n            <ion-icon name="trash"></ion-icon>\n            Delete\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <ion-list *ngIf="records.travel.length!=0">\n      <ion-list-header>Travel History</ion-list-header>\n      <ion-item-sliding *ngFor="let t of records.travel; let u = index">\n        <ion-item>\n          <div class="white-space">\n            <h3>Location: {{t.location}}</h3>\n            <h3>Notes: {{t.note}}</h3>\n            <p>{{t.date | date}}</p>\n          </div>\n        </ion-item>\n        <ion-item-options side="right" icon-start>\n          <button ion-button color="danger" (click)="deleteRecord(\'travel\', u)">\n            <ion-icon name="trash"></ion-icon>\n            Delete\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <ion-list *ngIf="records.housing.length!=0">\n      <ion-list-header>Housing History</ion-list-header>\n      <ion-item-sliding *ngFor="let h of records.housing; let v = index">\n        <ion-item>\n          <div class="white-space">\n            <h3>Housing Type: {{h.type | titlecase}}</h3>\n            <h3>Move in: {{h.moveindate | date}}</h3>\n            <h3>Move out: {{h.moveoutdate | date}}</h3>\n            <p>Notes: {{h.note}}</p>\n          </div>\n        </ion-item>\n        <ion-item-options side="right" icon-start>\n          <button ion-button color="danger" (click)="deleteRecord(\'housing\', v)">\n            <ion-icon name="trash"></ion-icon>\n            Delete\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addSocialHistory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history/social-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_history_history__["a" /* HistoryProvider */]])
    ], SocialHistoryPage);
    return SocialHistoryPage;
}());

//# sourceMappingURL=social-history.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurgicalHistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_add_contacts_contact_add_contacts__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_history_history__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the SurgicalHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurgicalHistoryDetailPage = (function () {
    function SurgicalHistoryDetailPage(navCtrl, navParams, qp, qcp, viewCtrl, modalCtrl, loadingCtrl, toastCtrl, historyProvider, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.auth = auth;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({});
    }
    SurgicalHistoryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurgicalHistoryDetailPage');
    };
    SurgicalHistoryDetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.qp.getSurgicalHistoryQuestions(this.auth.userId)];
                    case 1:
                        _a.questions = (_b.sent());
                        this.form = this.qcp.toFormGroup(this.questions);
                        return [2 /*return*/];
                }
            });
        });
    };
    SurgicalHistoryDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SurgicalHistoryDetailPage.prototype.addContact = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */]);
        modal.present();
        modal.onWillDismiss(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.qp.getSurgicalHistoryQuestions(this.auth.userId)];
                    case 1:
                        _a.questions = (_b.sent());
                        this.form = this.qcp.toFormGroup(this.questions);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    SurgicalHistoryDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payload = this.form.value;
        console.log(payload);
        this.historyProvider.addSurgicalHistory(this.auth.userId, payload)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add the record.');
        });
    };
    SurgicalHistoryDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    SurgicalHistoryDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SurgicalHistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-surgical-history-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/surgical-history-detail/surgical-history-detail.html"*/'<!--\n  Generated template for the SurgicalHistoryDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Surgical History</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n\n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n            <button ion-button type="button" clear color="primary" (click)="addContact()">Add Contact</button>\n          </div>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/surgical-history-detail/surgical-history-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_7__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SurgicalHistoryDetailPage);
    return SurgicalHistoryDetailPage;
}());

//# sourceMappingURL=surgical-history-detail.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diagnostic_procedure_diagnostic_procedure__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lab_test_lab_test__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TestResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestResultsPage = (function () {
    function TestResultsPage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
    }
    TestResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestResultsPage');
    };
    TestResultsPage.prototype.goToLabTest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__lab_test_lab_test__["a" /* LabTestPage */]);
    };
    TestResultsPage.prototype.goToDiagnosticProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__diagnostic_procedure_diagnostic_procedure__["a" /* DiagnosticProcedurePage */]);
    };
    TestResultsPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    TestResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-test-results',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/test-results/test-results.html"*/'<!--\n  Generated template for the TestResultsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>TEST RESULTS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button block (click)="goToLabTest()">Lab Test Results</button>\n  <button ion-button block (click)="goToDiagnosticProcedure()">Diagnostic Procedure Results</button>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/test-results/test-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], TestResultsPage);
    return TestResultsPage;
}());

//# sourceMappingURL=test-results.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurgicalHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surgical_history_detail_surgical_history_detail__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_history_history__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SurgicalHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurgicalHistoryPage = (function () {
    function SurgicalHistoryPage(navCtrl, navParams, modalCtrl, historyProvider, auth, alertCtrl, toastCtrl) {
        // get sorted records
        // this.records = [
        //   {
        //     surgery: 'appendectomy',
        //     doctor: 'Aaric Falconi',
        //     date: '2018/04/26'
        //   },
        //   {
        //     surgery: 'arthrodesis',
        //     doctor: 'Scott Williamson',
        //     date: '2017/09/11'
        //   }
        // ];
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.historyProvider = historyProvider;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.records = [];
        this.historyProvider.getSurgicalHistory(this.auth.userId)
            .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
    }
    SurgicalHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurgicalHistoryPage');
    };
    SurgicalHistoryPage.prototype.addSurgicalHistory = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__surgical_history_detail_surgical_history_detail__["a" /* SurgicalHistoryDetailPage */]);
        modal.present();
        modal.onWillDismiss(function () { return _this.historyProvider.getSurgicalHistory(_this.auth.userId)
            .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; }); });
    };
    SurgicalHistoryPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.historyProvider.deleteSurgicalHistory(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.historyProvider.getSurgicalHistory(_this.auth.userId)
                                .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    SurgicalHistoryPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    SurgicalHistoryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SurgicalHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-surgical-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/surgical-history/surgical-history.html"*/'<!--\n  Generated template for the SurgicalHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SURGICAL HISTORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.length!=0">\n    <ion-list-header>Surgical History</ion-list-header>\n    <ion-item-sliding *ngFor="let record of records; let i = index">\n      <ion-item>\n        <div class="white-space">\n          <h3>Surgery: {{record.surgery}}</h3>\n          <h3>Doctor: {{record.doctor}}</h3>\n          <p>{{record.date | date}}</p>\n        </div>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No surgical history record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addSurgicalHistory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/surgical-history/surgical-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], SurgicalHistoryPage);
    return SurgicalHistoryPage;
}());

//# sourceMappingURL=surgical-history.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_control_question_control__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_trackers_trackers__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TrackerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackerDetailPage = (function () {
    function TrackerDetailPage(navCtrl, navParams, qp, qcp, loadingCtrl, toastCtrl, trackerProvider, auth, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.trackerProvider = trackerProvider;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.tracker = "track";
        this.records = [];
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        this.questions = this.qp.getTrackersQuestions(this.id);
        this.form = this.qcp.toFormGroup(this.questions);
        // get particular records sorted by date from database
        this.trackerProvider.getRecords(this.auth.userId, this.id)
            .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
    }
    TrackerDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackerDetailPage');
    };
    TrackerDetailPage.prototype.showNotes = function (i) {
        var alert = this.alertCtrl.create({
            message: 'Notes: ' + this.records[i].note,
            enableBackdropDismiss: true
        });
        alert.present();
    };
    TrackerDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payLoad = this.form.value;
        console.log(payLoad);
        this.trackerProvider.addRecord(this.auth.userId, this.id, payLoad)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.trackerProvider.getRecords(_this.auth.userId, _this.id)
                .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
            _this.tracker = 'history';
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    TrackerDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    TrackerDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TrackerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tracker-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/tracker-detail/tracker-detail.html"*/'<!--\n  Generated template for the TrackerDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{title | uppercase}}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n    <ion-segment color="light" [(ngModel)]="tracker">\n      <ion-segment-button value="track">\n        TRACK\n      </ion-segment-button>\n      <ion-segment-button value="history">\n        HISTORY\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content color="primary" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher> -->\n  <div [ngSwitch]="tracker">\n    <div *ngSwitchCase="\'track\'">\n      <ion-card>\n        <ion-card-content>\n          <div>\n            <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n              <div *ngFor="let question of questions">\n                <ion-item>\n                  <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n                </ion-item>\n              </div>\n\n              <div>\n                <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n              </div>\n\n            </form>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'history\'">\n      <ion-list *ngIf="records.length!=0">\n        <ion-card *ngFor="let record of records; let i = index">\n\n          <ion-item *ngIf="id==1" (click)="showNotes(i)">\n            <h2>{{record.food}} {{record.amount}}</h2>\n            <h2 *ngIf="record.calories.length!=0">{{record.calories}}</h2>\n            <ion-note>{{record.timeperiod | titlecase}} - {{record.datetime | date:\'mediumDate\'}} {{record.datetime | date:\'shortTime\'}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==2" (click)="showNotes(i)">\n            <h2>{{record.drink}} {{record.amount}}{{record.unit}}</h2>\n            <ion-note>{{record.datetime | date:\'mediumDate\'}} {{record.datetime | date:\'shortTime\'}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==3" (click)="showNotes(i)">\n            <h2>{{record.weight}} lb</h2>\n            <ion-note item-right>{{record.date | date}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==4" (click)="showNotes(i)">\n            <h2>{{record.height}}</h2>\n            <ion-note item-right>{{record.datetime | date:\'mediumDate\'}} {{record.datetime | date:\'shortTime\'}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==5" (click)="showNotes(i)">\n            <h2>{{record.bedtime | date: \'shortTime\'}} ~ {{record.wakeuptime | date: \'shortTime\'}}</h2>\n            <ion-note>{{record.bedtime | date: \'mediumDate\'}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==6" (click)="showNotes(i)">\n            <h2>{{record.exercise}} {{record.duration}}</h2>\n            <ion-note>{{record.datetime | date:\'mediumDate\'}} {{record.datetime | date:\'shortTime\'}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==7" (click)="showNotes(i)">\n            <h2>{{record.SBP}}/{{record.DBP}}</h2>\n            <ion-note item-right>{{record.date | date}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==8" (click)="showNotes(i)">\n            <h2>{{record.bloodsugar}} mg/dl</h2>\n            <ion-note item-right>{{record.date | date}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==9" (click)="showNotes(i)">\n            <h2>level {{record.pain}}</h2>\n            <ion-note item-right>{{record.date | date}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==10">\n            <ion-note>{{record.datetime | date:\'mediumDate\'}} {{record.datetime | date:\'shortTime\'}}</ion-note>\n            <h2 text-wrap>{{record.note}}</h2>\n          </ion-item>\n\n          <ion-item *ngIf="id==11" (click)="showNotes(i)">\n            <h2 text-wrap>{{record.mood}}</h2>\n            <ion-note>{{record.date | date}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==12" (click)="showNotes(i)">\n            <h2>{{record.begindate | date}} ~ {{record.enddate | date}}</h2>\n          </ion-item>\n\n        </ion-card>\n      </ion-list>\n      <ion-card [hidden]="records.length!=0">\n        <ion-card-header>No {{title}} record.</ion-card-header>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/tracker-detail/tracker-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_trackers_trackers__["a" /* TrackersProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], TrackerDetailPage);
    return TrackerDetailPage;
}());

//# sourceMappingURL=tracker-detail.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TrackersPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tracker_detail_tracker_detail__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TrackersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackersPage = (function () {
    function TrackersPage(navCtrl, navParams, popoverCtrl, alertCtrl, storage, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.auth = auth;
        this.panels = {
            "food": true,
            "drink": true,
            "weight": true,
            "height": true,
            "sleep": true,
            "exercise": true,
            "blood pressure": true,
            "blood sugar": true,
            "pain": true,
            "health log": true,
            "mood": true,
            "period": true
        };
        this.trackers = [
            { id: 1, name: 'food', icon: "fas fa-utensils" },
            { id: 2, name: 'drink', icon: "fas fa-glass-martini" },
            { id: 3, name: 'weight', icon: "fas fa-weight" },
            { id: 4, name: 'height', icon: "fas fa-male" },
            { id: 5, name: 'sleep', icon: "far fa-clock" },
            { id: 6, name: 'exercise', icon: "fas fa-basketball-ball" },
            { id: 7, name: 'blood pressure', icon: "far fa-chart-bar" },
            { id: 8, name: 'blood sugar', icon: "far fa-chart-bar" },
            { id: 9, name: 'pain', icon: "fas fa-diagnoses" },
            { id: 10, name: 'health log', icon: "fas fa-briefcase-medical" },
            { id: 11, name: 'mood', icon: "far fa-heart" },
            { id: 12, name: 'period', icon: "fas fa-venus" }
        ];
        this.customtrackers = this.trackers;
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        this.storage.get('panels').then(function (panels) {
            if (panels) {
                _this.panels = panels;
            }
            console.log(_this.panels);
            _this.customtrackers = [];
            var keys = Object.keys(_this.panels);
            var values = new Array;
            keys.forEach(function (key) {
                values.push(_this.panels[key]);
            });
            var _loop_1 = function (i) {
                if (values[i] == true) {
                    _this.trackers.forEach(function (tracker) {
                        if (tracker.name == keys[i]) {
                            _this.customtrackers.push(tracker);
                        }
                    });
                }
            };
            for (var i = 0; i < keys.length; i++) {
                _loop_1(i);
            }
        });
    }
    TrackersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackersPage');
    };
    TrackersPage.prototype.selectTracker = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tracker_detail_tracker_detail__["a" /* TrackerDetailPage */], {
            'id': id,
            'title': this.trackers[id - 1].name
        });
        // this.navCtrl.push(this.customtrackers[index].component);
    };
    TrackersPage.prototype.presentPopover = function (ev) {
        var _this = this;
        var popover = this.popoverCtrl.create(PanelPage, this.panels);
        popover.present({
            ev: ev
        });
        popover.onDidDismiss(function (panels) {
            if (panels != null) {
                _this.panels = panels;
                _this.customtrackers = [];
                var keys_1 = Object.keys(_this.panels);
                var values_1 = new Array;
                keys_1.forEach(function (key) {
                    values_1.push(_this.panels[key]);
                });
                console.log(keys_1);
                console.log(values_1);
                var _loop_2 = function (i) {
                    if (values_1[i] == true) {
                        _this.trackers.forEach(function (tracker) {
                            if (tracker.name == keys_1[i]) {
                                _this.customtrackers.push(tracker);
                            }
                        });
                        console.log(_this.customtrackers);
                    }
                };
                for (var i = 0; i < keys_1.length; i++) {
                    _loop_2(i);
                }
                // for (let i = 0; i < keys.length; i++) {
                //   if (this.customtrackers[i].name == keys[i]) {
                //   }
                // }
            }
        });
    };
    TrackersPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    TrackersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-trackers',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/trackers/trackers.html"*/'<!--\n  Generated template for the TrackersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>TRACKERS</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let t of customtrackers">\n        <ion-card color="primary" (click)="selectTracker(t.id)">\n          <ion-item class="item-size" color="primary">\n            <i class="{{t.icon}}"></i>\n            <p text-wrap>{{t.name | uppercase}}</p>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/trackers/trackers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], TrackersPage);
    return TrackersPage;
}());

var PanelPage = (function () {
    function PanelPage(navParams, viewCtrl, fb, storage) {
        var _this = this;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.storage = storage;
        this.formgrouparray = [];
        this.panels = this.navParams.data;
        console.log(this.panels);
        this.formgroupvalue = {
            "food": this.panels["food"],
            "drink": this.panels["drink"],
            "weight": this.panels["weight"],
            "height": this.panels["height"],
            "sleep": this.panels["sleep"],
            "exercise": this.panels["exercise"],
            "blood pressure": this.panels["blood pressure"],
            "blood sugar": this.panels["blood sugar"],
            "pain": this.panels["pain"],
            "health log": this.panels["health log"],
            "mood": this.panels["mood"],
            "period": this.panels["period"]
        };
        this.custompanel = this.fb.group(this.formgroupvalue);
        // let keys1 = Object.keys(this.formgroupvalue);
        this.storage.get('mytracker').then(function (mytracker) {
            if (mytracker != null) {
                _this.formgroupvalue[mytracker.name] = true;
                console.log(_this.formgroupvalue);
            }
            var keys = Object.keys(_this.formgroupvalue);
            var values = new Array;
            keys.forEach(function (key) {
                values.push(_this.formgroupvalue[key]);
            });
            for (var i = 0; i < keys.length; i++) {
                _this.formgrouparray.push({
                    name: keys[i],
                    check: values[i]
                });
            }
            console.log(_this.formgroupvalue);
            _this.custompanel = _this.fb.group(_this.formgroupvalue);
        });
    }
    PanelPage.prototype.onSubmit = function () {
        this.panels = this.custompanel.value;
        this.storage.set('panels', this.panels);
        console.log(this.panels);
        this.viewCtrl.dismiss(this.panels);
    };
    PanelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            template: "\n  <form [formGroup]='custompanel' (ngSubmit)=\"onSubmit()\">\n    <ion-list no-lines>\n      <ion-list-header>Custom Panel</ion-list-header>\n      <ion-item *ngFor=\"let f of formgrouparray\">\n        <ion-label>{{f.name | titlecase}}</ion-label>\n        <ion-checkbox formControlName=\"{{f.name}}\"></ion-checkbox>\n      </ion-item>\n      <button ion-button clear type=\"submit\">OK</button>\n    </ion-list>\n  </form>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], PanelPage);
    return PanelPage;
}());

//# sourceMappingURL=trackers.js.map

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 240;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/allergy-detail/allergy-detail.module": [
		983,
		41
	],
	"../pages/allergy-history/allergy-history.module": [
		984,
		40
	],
	"../pages/allergy/allergy.module": [
		985,
		39
	],
	"../pages/appointment-add-appointments/appointment-add-appointments.module": [
		986,
		38
	],
	"../pages/appointment-edit/appointment-edit.module": [
		987,
		37
	],
	"../pages/appointment/appointment.module": [
		989,
		36
	],
	"../pages/contact-add-contacts/contact-add-contacts.module": [
		988,
		35
	],
	"../pages/contact-detail/contact-detail.module": [
		990,
		34
	],
	"../pages/contact/contact.module": [
		991,
		33
	],
	"../pages/dashboard/dashboard.module": [
		992,
		32
	],
	"../pages/diagnostic-procedure-detail/diagnostic-procedure-detail.module": [
		993,
		31
	],
	"../pages/diagnostic-procedure/diagnostic-procedure.module": [
		994,
		30
	],
	"../pages/doctor-visit-notes-detail/doctor-visit-notes-detail.module": [
		995,
		29
	],
	"../pages/doctor-visit-notes/doctor-visit-notes.module": [
		996,
		28
	],
	"../pages/family-history-detail/family-history-detail.module": [
		997,
		27
	],
	"../pages/family-history/family-history.module": [
		998,
		26
	],
	"../pages/immunization-detail/immunization-detail.module": [
		999,
		25
	],
	"../pages/immunization-history/immunization-history.module": [
		1000,
		24
	],
	"../pages/immunization/immunization.module": [
		1001,
		23
	],
	"../pages/lab-test-detail/lab-test-detail.module": [
		1002,
		22
	],
	"../pages/lab-test/lab-test.module": [
		1003,
		21
	],
	"../pages/login/login.module": [
		1004,
		20
	],
	"../pages/medical-history-detail/medical-history-detail.module": [
		1005,
		19
	],
	"../pages/medical-history/medical-history.module": [
		1006,
		18
	],
	"../pages/medication-detail/medication-detail.module": [
		1007,
		17
	],
	"../pages/medication/medication.module": [
		1008,
		16
	],
	"../pages/password-edit/password-edit.module": [
		1009,
		15
	],
	"../pages/password-reset/password-reset.module": [
		1010,
		14
	],
	"../pages/profile-editable/profile-editable.module": [
		1011,
		13
	],
	"../pages/profile/profile.module": [
		1012,
		12
	],
	"../pages/resources-add-resources/resources-add-resources.module": [
		1013,
		11
	],
	"../pages/resources/resources.module": [
		1015,
		10
	],
	"../pages/signup/signup.module": [
		1014,
		9
	],
	"../pages/social-history-category/social-history-category.module": [
		1016,
		8
	],
	"../pages/social-history-detail/social-history-detail.module": [
		1017,
		7
	],
	"../pages/social-history/social-history.module": [
		1018,
		6
	],
	"../pages/surgical-history-detail/surgical-history-detail.module": [
		1019,
		5
	],
	"../pages/surgical-history/surgical-history.module": [
		1021,
		4
	],
	"../pages/test-results/test-results.module": [
		1020,
		3
	],
	"../pages/tracker-detail/tracker-detail.module": [
		1022,
		2
	],
	"../pages/trackers/trackers.module": [
		1023,
		1
	],
	"../pages/welcome/welcome.module": [
		1024,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 284;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_option_question_option__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_dropdown__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dynamic_form_types_question_toggle__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dynamic_form_types_question_range__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dynamic_form_types_question_complex__ = __webpack_require__(600);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










/*
  Generated class for the QuestionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QuestionProvider = (function () {
    function QuestionProvider(qop) {
        this.qop = qop;
    }
    QuestionProvider.prototype.getTrackersQuestions = function (id) {
        var questions;
        if (id == 1) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'food',
                    label: 'Food',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'amount',
                    label: 'Amount',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'calories',
                    label: 'Calories',
                    type: 'number',
                    value: '',
                    required: false,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_dropdown__["a" /* DropdownQuestion */]({
                    key: 'timeperiod',
                    label: 'Time Period',
                    value: 'breakfast',
                    multiple: false,
                    options: [
                        { key: 'breakfast', value: 'Breakfast' },
                        { key: 'lunch', value: 'Lunch' },
                        { key: 'dinner', value: 'Dinner' },
                        { key: 'snack', value: 'Snack' }
                    ],
                    required: true,
                    order: 4
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'datetime',
                    label: 'Date',
                    display: 'MMM DD, YYYY HH:mm',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 5
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 6
                }),
            ];
        }
        else if (id == 2) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'drink',
                    label: 'Drink',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'amount',
                    label: 'Amount',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'unit',
                    label: 'Unit',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'datetime',
                    label: 'Date',
                    display: 'MMM DD, YYYY HH:mm',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 4
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 5
                }),
            ];
        }
        else if (id == 3) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'weight',
                    label: 'Weight',
                    type: 'number',
                    unit: 'lb',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 3
                }),
            ];
        }
        else if (id == 4) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'height',
                    label: 'Height',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 3
                }),
            ];
        }
        else if (id == 5) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'bedtime',
                    label: 'Bedtime',
                    display: 'MMM DD, YYYY HH:mm',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'wakeuptime',
                    label: 'Wake-up time',
                    display: 'MMM DD, YYYY HH:mm',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 3
                }),
            ];
        }
        else if (id == 6) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'exercise',
                    label: 'Exercise',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'duration',
                    label: 'Duration',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'datetime',
                    label: 'Date',
                    display: 'MMM DD, YYYY HH:mm',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 4
                }),
            ];
        }
        else if (id == 7) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'SBP',
                    label: 'Systolic pressure (SBP)',
                    type: 'number',
                    unit: 'mm Hg',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'DBP',
                    label: 'Diastolic pressure (DBP)',
                    type: 'number',
                    unit: 'mm Hg',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 4
                }),
            ];
        }
        else if (id == 8) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'bloodsugar',
                    label: 'Blood sugar',
                    type: 'number',
                    unit: 'mg/dl',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 3
                }),
            ];
        }
        else if (id == 9) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_8__components_dynamic_form_types_question_range__["a" /* RangeQuestion */]({
                    key: 'pain',
                    label: 'Pain level',
                    min: 0,
                    max: 10,
                    step: 1,
                    snaps: true,
                    pin: true,
                    color: 'primary',
                    iconleft: 'happy',
                    iconright: 'sad',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 3
                }),
            ];
        }
        else if (id == 10) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'datetime',
                    label: 'Date',
                    display: 'MMM DD, YYYY HH:mm',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 5,
                    required: true,
                    order: 2
                }),
            ];
        }
        else if (id == 11) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_dropdown__["a" /* DropdownQuestion */]({
                    key: 'mood',
                    label: 'Mood',
                    value: '',
                    multiple: false,
                    options: [
                        { key: "1 - Everything's OK. I'm maintaining.", value: "1 - Everything's OK. I'm maintaining." },
                        { key: "2 - I've had a rough day.", value: "2 - I've had a rough day." },
                        { key: "3 - Significant life event/stress. It may take longer time to cope.", value: "3 - Significant life event/stress. It may take longer time to cope." },
                        { key: "4 - I've been down for a while and I don't exactly know why.", value: "4 - I've been down for a while and I don't exactly know why." },
                        { key: "5 - I'm not doing well and I'd like someone to keep an eye on me/check-in regularly.", value: "5 - I'm not doing well and I'd like someone to keep an eye on me/check-in regularly." },
                        { key: "6 - I'm in crisis. Please call or come over right away.", value: "6 - I'm in crisis. Please call or come over right away." },
                        { key: "7 - Call 911. I may hurt myself or others. Do NOT wait.", value: "7 - Call 911. I may hurt myself or others. Do NOT wait." }
                    ],
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 3
                }),
            ];
        }
        else if (id == 12) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'begindate',
                    label: 'Begin date',
                    display: 'MM/DD/YYYY',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'enddate',
                    label: 'End date',
                    display: 'MM/DD/YYYY',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 3
                }),
            ];
        }
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getAllergyQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'trigger',
                label: 'Trigger',
                type: 'text',
                value: '',
                required: false,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'symptom',
                label: 'Symptom',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_7__components_dynamic_form_types_question_toggle__["a" /* ToggleQuestion */]({
                key: 'threatening',
                label: 'Life Threatening',
                value: false,
                required: true,
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Onset Date',
                display: 'MM/DD/YYYY',
                value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                required: true,
                order: 4
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getFamilyHistoryQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'relationship',
                label: 'Relationship',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'name',
                label: 'Name',
                type: 'text',
                value: '',
                required: false,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_7__components_dynamic_form_types_question_toggle__["a" /* ToggleQuestion */]({
                key: 'alive',
                label: 'Alive',
                value: true,
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'disease',
                label: 'Disease',
                type: 'text',
                value: '',
                required: true,
                order: 4
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Onset Date',
                display: 'MM/DD/YYYY',
                value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                required: true,
                order: 5
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getMedicalHistoryQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'diagnosis',
                label: 'Diagnosis',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Onset Date',
                display: 'MM/DD/YYYY',
                value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                required: true,
                order: 2
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getSurgicalHistoryQuestions = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var option, questions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.qop.getDoctorOption(id)];
                    case 1:
                        option = _a.sent();
                        if (option.length != 0) {
                            questions = [
                                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                                    key: 'surgery',
                                    label: 'Surgery',
                                    type: 'text',
                                    value: '',
                                    required: true,
                                    order: 1
                                }),
                                new __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_dropdown__["a" /* DropdownQuestion */]({
                                    key: 'doctor',
                                    label: 'Doctor',
                                    value: '',
                                    multiple: false,
                                    options: option,
                                    required: true,
                                    order: 2
                                }),
                                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                                    key: 'date',
                                    label: 'Surgery Date',
                                    display: 'MM/DD/YYYY',
                                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                                    required: true,
                                    order: 3
                                }),
                            ];
                        }
                        else {
                            questions = [
                                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                                    key: 'surgery',
                                    label: 'Surgery',
                                    type: 'text',
                                    value: '',
                                    required: true,
                                    order: 1
                                }),
                                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                                    key: 'doctor',
                                    label: 'Doctor',
                                    readonly: true,
                                    placeholder: 'Doctor contact not found.',
                                    rows: 1,
                                    required: true,
                                    order: 2
                                }),
                                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                                    key: 'date',
                                    label: 'Surgery Date',
                                    display: 'MM/DD/YYYY',
                                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                                    required: true,
                                    order: 3
                                }),
                            ];
                        }
                        return [2 /*return*/, questions.sort(function (a, b) { return a.order - b.order; })];
                }
            });
        });
    };
    QuestionProvider.prototype.getImmunizationQuestions = function (vaccine) {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'vaccine',
                label: 'Vaccine',
                type: 'text',
                value: vaccine,
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_9__components_dynamic_form_types_question_complex__["a" /* ComplexQuestion */]({
                selectkey: 'recordtype',
                selectlabel: 'Record option',
                selectvalue: 'age',
                selectrequired: true,
                multiple: false,
                options: [
                    { key: 'age', value: 'Age' },
                    { key: 'immunizationdate', value: 'Date' }
                ],
                selectOptions: { title: 'Record option' },
                inputkey: 'age',
                inputlabel: 'Age',
                inputvalue: '',
                inputrequired: true,
                type: 'number',
                datetimekey: 'immunizationdate',
                datetimelabel: 'Immunization date',
                datetimevalue: '',
                datetimerequired: true,
                display: 'MMM YYYY',
                required: true,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                key: 'note',
                label: 'Notes',
                rows: 3,
                required: false,
                order: 3
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getDoctorVisitNotesQuestions = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var option, questions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.qop.getDoctorOption(id)];
                    case 1:
                        option = _a.sent();
                        if (option.length != 0) {
                            questions = [
                                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                                    key: 'diagnosis',
                                    label: 'Diagnosis',
                                    type: 'text',
                                    value: '',
                                    required: true,
                                    order: 1
                                }),
                                new __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_dropdown__["a" /* DropdownQuestion */]({
                                    key: 'doctor',
                                    label: 'Doctor',
                                    value: '',
                                    multiple: false,
                                    options: option,
                                    required: true,
                                    order: 2
                                }),
                                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                                    key: 'prescription',
                                    label: 'Prescription',
                                    type: 'text',
                                    value: '',
                                    required: true,
                                    order: 3
                                }),
                                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                                    key: 'date',
                                    label: 'Date',
                                    display: 'MM/DD/YYYY',
                                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                                    required: true,
                                    order: 4
                                }),
                                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                                    key: 'reason',
                                    label: 'Reason of Visit',
                                    value: '',
                                    rows: 7,
                                    required: false,
                                    order: 5
                                }),
                            ];
                        }
                        else {
                            questions = [
                                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                                    key: 'diagnosis',
                                    label: 'Diagnosis',
                                    type: 'text',
                                    value: '',
                                    required: true,
                                    order: 1
                                }),
                                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                                    key: 'doctor',
                                    label: 'Doctor',
                                    readonly: true,
                                    placeholder: 'Doctor contact not found.',
                                    rows: 1,
                                    required: true,
                                    order: 2
                                }),
                                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                                    key: 'prescription',
                                    label: 'Prescription',
                                    type: 'text',
                                    value: '',
                                    required: true,
                                    order: 3
                                }),
                                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                                    key: 'date',
                                    label: 'Date',
                                    display: 'MM/DD/YYYY',
                                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                                    required: true,
                                    order: 4
                                }),
                                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                                    key: 'reason',
                                    label: 'Reason of Visit',
                                    value: '',
                                    rows: 7,
                                    required: false,
                                    order: 5
                                }),
                            ];
                        }
                        return [2 /*return*/, questions.sort(function (a, b) { return a.order - b.order; })];
                }
            });
        });
    };
    QuestionProvider.prototype.getSocialHistoryQuestions = function (id) {
        if (id == 1) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'amount',
                    label: 'Amount',
                    type: 'number',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 2) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'name',
                    label: 'Name',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'amount',
                    label: 'Amount(oz)',
                    type: 'number',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'alcohol',
                    label: 'Alcohol(%)',
                    type: 'number',
                    value: '',
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 4
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 3) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'name',
                    label: 'Name',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'amount',
                    label: 'Amount',
                    type: 'number',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    value: '',
                    rows: 3,
                    required: false,
                    order: 4
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 4) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'location',
                    label: 'Location',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    value: '',
                    rows: 5,
                    required: false,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 5) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'type',
                    label: 'Type',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'moveindate',
                    label: 'Move in',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'moveoutdate',
                    label: 'Move out',
                    display: 'MM/DD/YYYY',
                    value: '',
                    required: false,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    value: '',
                    rows: 3,
                    required: false,
                    order: 4
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
    };
    QuestionProvider.prototype.getMedicationQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'name',
                label: 'Medication Name',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                key: 'frequency',
                label: 'Frequency',
                value: '',
                rows: 2,
                required: true,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Date',
                display: 'MM/DD/YYYY',
                value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                required: true,
                order: 3
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getLabTestQuestions = function (title) {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'subtest',
                label: 'Test Name',
                type: 'text',
                value: title,
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Date',
                display: 'MM/DD/YYYY',
                value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                required: true,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'result',
                label: 'Result',
                type: 'text',
                value: '',
                required: true,
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'unit',
                label: 'Unit',
                type: 'text',
                value: '',
                required: false,
                order: 4
            }),
            new __WEBPACK_IMPORTED_MODULE_7__components_dynamic_form_types_question_toggle__["a" /* ToggleQuestion */]({
                key: 'abnormal',
                label: 'Abnormal?',
                value: false,
                order: 5
            }),
            new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                key: 'note',
                label: 'Notes',
                value: '',
                rows: 4,
                required: false,
                order: 6
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getDiagnosticProcedureQuestions = function (title, id) {
        var questions;
        if (id == 1 || id == 6 || id == 7 || id == 8) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'testname',
                    label: 'Test Name',
                    type: 'text',
                    value: title,
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'result',
                    label: 'Result',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    value: '',
                    rows: 5,
                    required: false,
                    order: 4
                }),
            ];
        }
        else if (id == 2 || id == 5) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'organ',
                    label: 'Body Part',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'result',
                    label: 'Result',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    value: '',
                    rows: 5,
                    required: false,
                    order: 4
                }),
            ];
        }
        else if (id == 3 || id == 4) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'organ',
                    label: 'Body Part',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'result',
                    label: 'Result',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_7__components_dynamic_form_types_question_toggle__["a" /* ToggleQuestion */]({
                    key: 'contrast',
                    label: 'With Contrast?',
                    value: false,
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 4
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    value: '',
                    rows: 5,
                    required: false,
                    order: 5
                }),
            ];
        }
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getResetPasswordQuestion = function (typeid) {
        var questions;
        if (typeid == 0) {
            var secQues = "What is your first pet's name sadasdadasdassadasdadasdasda ???????";
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'email',
                    label: 'Email Address',
                    type: 'email',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'securityQuestion',
                    label: 'Security Question',
                    type: 'text',
                    value: secQues,
                    rows: 1,
                    readonly: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'securityAnswer',
                    label: 'Security Answer',
                    type: 'text',
                    value: '',
                    rows: 1,
                    required: true,
                    order: 3
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (typeid == 1) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'currentPassword',
                    label: 'Current Password',
                    type: 'password',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'newPassword',
                    label: 'New Password',
                    type: 'password',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'confirmPassword',
                    label: 'Confirm Password',
                    type: 'password',
                    value: '',
                    required: true,
                    order: 3
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
    };
    QuestionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__question_option_question_option__["a" /* QuestionOptionProvider */]])
    ], QuestionProvider);
    return QuestionProvider;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionControlProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the QuestionControlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QuestionControlProvider = (function () {
    function QuestionControlProvider() {
    }
    QuestionControlProvider.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            var val = (question.value == undefined) ? '' : question.value;
            group[question.key] = question.required ? new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](val, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required) : new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](val);
        });
        return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"](group);
    };
    QuestionControlProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], QuestionControlProvider);
    return QuestionControlProvider;
}());

//# sourceMappingURL=question-control.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_baseurl__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__encryption_encryption__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HistoryProvider = (function () {
    function HistoryProvider(http, processHttpmsgService, ep) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        this.ep = ep;
        console.log('Hello HistoryProvider Provider');
    }
    HistoryProvider.prototype.getAllergy = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/allergy/' + id)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.addAllergy = function (id, record) {
        var _this = this;
        this.ep.traversal(record, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/allergy/' + id, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.deleteAllergy = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/allergy/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.getRecentAllergy = function (userid, duration) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/allergy/days/' + duration + '/' + userid)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.getMedicalHistory = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/medical/' + id)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.addMedicalHistory = function (id, record) {
        var _this = this;
        this.ep.traversal(record, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/medical/' + id, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.deleteMedicalHistory = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/medical/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.getRecentMedicalHistory = function (userid, duration) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/medical/days/' + duration + '/' + userid)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.getSocialHistory = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/social/' + id)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.addSocialHistory = function (id, title, record) {
        var _this = this;
        this.ep.traversal(record, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/social/' + title + '/' + id, record, { responseType: "text" })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.deleteSocialHistory = function (id, type, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/social/' + type + '/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.getRecentSocialHistory = function (userid, duration) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/social/days/' + duration + '/' + userid)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.getSurgicalHistory = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/surgical/' + id)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.addSurgicalHistory = function (id, record) {
        var _this = this;
        this.ep.traversal(record, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/surgical/' + id, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.deleteSurgicalHistory = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/surgical/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.getRecentSurgicalHistory = function (userid, duration) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/surgical/days/' + duration + '/' + userid)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.getFamilyHistory = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/family/' + id)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.addFamilyHistory = function (id, record) {
        var _this = this;
        this.ep.traversal(record, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/family/' + id, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.deleteFamilyHistory = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/family/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.getRecentFamilyHistory = function (userid, duration) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/family/days/' + duration + '/' + userid)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
            __WEBPACK_IMPORTED_MODULE_4__encryption_encryption__["a" /* EncryptionProvider */]])
    ], HistoryProvider);
    return HistoryProvider;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthRecordsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__encryption_encryption__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the HealthRecordsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HealthRecordsProvider = (function () {
    function HealthRecordsProvider(http, processHttpmsgService, ep) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        this.ep = ep;
        console.log('Hello HealthRecordsProvider Provider');
    }
    HealthRecordsProvider.prototype.getLabTestCategory = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/labtest/category')
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getLabTest = function (userid, testid) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/labtest/' + testid + '/' + userid)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.addLabTest = function (userid, testid, record) {
        var _this = this;
        this.ep.traversal(record, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/labtest/' + testid + '/' + userid, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.deleteLabTest = function (id, testid, subtestid, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/labtest/' + testid + '/' + subtestid + '/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getRecentLabTest = function (userid, duration) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/labtest/days/' + duration + '/' + userid)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getDiagnosticProcedure = function (userid, testid) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/diagnosticprocedure/' + testid + '/' + userid)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.addDiagnosticProcedure = function (userid, testid, record) {
        var _this = this;
        this.ep.traversal(record, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/diagnosticprocedure/' + testid + '/' + userid, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.deleteDiagnosticProcedure = function (id, testid, subtestid, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/diagnosticprocedure/' + testid + '/' + subtestid + '/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getRecentDiagnosticProcedure = function (userid, duration) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/diagnosticprocedure/days/' + duration + '/' + userid)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getDoctorVisitNotes = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/doctorvisitnotes/' + id)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.addDoctorVisitNotes = function (id, record) {
        var _this = this;
        this.ep.traversal(record, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/doctorvisitnotes/' + id, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.deleteDoctorVisitNotes = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/doctorvisitnotes/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getRecentDoctorVisitNotes = function (userid, duration) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/doctorvisitnotes/days/' + duration + '/' + userid)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getMedication = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/medication/' + id)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.addMedication = function (id, record) {
        var _this = this;
        this.ep.traversal(record, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/medication/' + id, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.deleteMedication = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/medication/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getRecentMedication = function (userid, duration) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/medication/days/' + duration + '/' + userid)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getImmunization = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/immunization/' + id)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.addImmunization = function (id, record) {
        var _this = this;
        this.ep.traversal(record, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/immunization/' + id, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.deleteImmunization = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/immunization/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getRecentImmunization = function (userid, duration) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/immunization/days/' + duration + '/' + userid)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
            __WEBPACK_IMPORTED_MODULE_4__encryption_encryption__["a" /* EncryptionProvider */]])
    ], HealthRecordsProvider);
    return HealthRecordsProvider;
}());

//# sourceMappingURL=health-records.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionOptionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_contacts__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/*
  Generated class for the QuestionOptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QuestionOptionProvider = (function () {
    function QuestionOptionProvider(http, contactsProvider) {
        this.http = http;
        this.contactsProvider = contactsProvider;
    }
    //get surgical history question Doctor options
    QuestionOptionProvider.prototype.getDoctorOption = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var doctors, option, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        doctors = [];
                        option = [];
                        return [4 /*yield*/, this.contactsProvider.getDoctors(id).toPromise()];
                    case 1:
                        doctors = (_a.sent());
                        for (i = 0; i < doctors.length; i++) {
                            option[i] = {
                                key: doctors[i].firstname + ' ' + doctors[i].lastname,
                                value: doctors[i].firstname + ' ' + doctors[i].lastname
                            };
                        }
                        console.log(option);
                        return [2 /*return*/, option];
                }
            });
        });
    };
    QuestionOptionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__contacts_contacts__["a" /* ContactsProvider */]])
    ], QuestionOptionProvider);
    return QuestionOptionProvider;
}());

//# sourceMappingURL=question-option.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyClassificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the AllergyClassificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AllergyClassificationProvider = (function () {
    function AllergyClassificationProvider() {
        console.log('Hello AllergyClassificationProvider Provider');
    }
    AllergyClassificationProvider.prototype.getMenu = function (id) {
        var arr = [];
        if (id === 0) {
            arr = [
                { id: 1, name: 'Food Allergy', menu: 'allergy', end: true },
                { id: 2, name: 'Skin Allergy', menu: 'allergy', end: true },
                { id: 3, name: 'Dust Allergy', menu: 'allergy', end: true },
                { id: 4, name: 'Insect Sting Allergy', menu: 'allergy', end: true },
                { id: 5, name: 'Pet Allergies', menu: 'allergy', end: true },
                { id: 6, name: 'Eye Allergy', menu: 'allergy', end: true },
                { id: 7, name: 'Drug Allergies', menu: 'allergy', end: true },
                { id: 8, name: 'Allergic Rhinitis', menu: 'allergy', end: true },
                { id: 9, name: 'Latex Allergy', menu: 'allergy', end: true },
                { id: 10, name: 'Mold Allergy', menu: 'allergy', end: true },
                { id: 11, name: 'Sinus Infection', menu: 'allergy', end: true },
                { id: 12, name: 'Cockroach Allergy', menu: 'allergy', end: true }
            ];
        }
        return arr;
    };
    AllergyClassificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AllergyClassificationProvider);
    return AllergyClassificationProvider;
}());

//# sourceMappingURL=allergy-classification.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationClassificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the ImmunizationClassificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ImmunizationClassificationProvider = (function () {
    function ImmunizationClassificationProvider() {
        console.log('Hello ImmunizationClassificationProvider Provider');
    }
    ImmunizationClassificationProvider.prototype.getMenu = function (id) {
        // get categories from database
        var arr = [];
        if (id === 0) {
            arr = [
                { id: 1, name: 'Influenza', menu: 'immunization', end: true },
                { id: 2, name: 'Tdap or Td', menu: 'immunization', end: true },
                { id: 3, name: 'MMR', menu: 'immunization', end: true },
                { id: 4, name: 'VAR', menu: 'immunization', end: true },
                { id: 5, name: 'RZV or ZVL', menu: 'immunization', end: true },
                { id: 6, name: 'HPV-Female', menu: 'immunization', end: true },
                { id: 7, name: 'HPV-Male', menu: 'immunization', end: true },
                { id: 8, name: 'PCV13', menu: 'immunization', end: true },
                { id: 9, name: 'PPSV23', menu: 'immunization', end: true },
                { id: 10, name: 'HepA', menu: 'immunization', end: true },
                { id: 11, name: 'HepB', menu: 'immunization', end: true },
                { id: 12, name: 'MenACWY', menu: 'immunization', end: true },
                { id: 13, name: 'MenB', menu: 'immunization', end: true },
                { id: 14, name: 'Hib', menu: 'immunization', end: true },
                { id: 15, name: 'DTaP', menu: 'immunization', end: true },
                { id: 16, name: 'Rotavirus (RV)', menu: 'immunization', end: true },
                { id: 17, name: 'IPV', menu: 'immunization', end: true },
                { id: 18, name: 'Other Vaccine', menu: 'immunization', end: true }
            ];
        }
        return arr;
    };
    ImmunizationClassificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ImmunizationClassificationProvider);
    return ImmunizationClassificationProvider;
}());

//# sourceMappingURL=immunization-classification.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SearchFilterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SearchFilterProvider = (function () {
    function SearchFilterProvider(http) {
        this.http = http;
        this.labelAttribute = "name";
        console.log('Hello SearchFilterProvider Provider');
    }
    SearchFilterProvider.prototype.getResults = function (keyword) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/labtest/category')
            .map(function (results) {
            return results.filter(function (item) {
                return item.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
        });
    };
    SearchFilterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SearchFilterProvider);
    return SearchFilterProvider;
}());

//# sourceMappingURL=search-filter.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialHistoryClassificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the SocialHistoryClassificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SocialHistoryClassificationProvider = (function () {
    function SocialHistoryClassificationProvider() {
        console.log('Hello SocialHistoryClassificationProvider Provider');
    }
    SocialHistoryClassificationProvider.prototype.getMenu = function (id) {
        var arr = [];
        if (id === 0) {
            arr = [
                { id: 1, name: 'smoking', menu: 'socialhistory', end: true },
                { id: 2, name: 'alcohol', menu: 'socialhistory', end: true },
                { id: 3, name: 'drug', menu: 'socialhistory', end: true },
                { id: 4, name: 'travel', menu: 'socialhistory', end: true },
                { id: 5, name: 'housing', menu: 'socialhistory', end: true }
            ];
        }
        return arr;
    };
    SocialHistoryClassificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SocialHistoryClassificationProvider);
    return SocialHistoryClassificationProvider;
}());

//# sourceMappingURL=social-history-classification.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_process_httpmsg__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_baseurl__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__encryption_encryption__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the TrackersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TrackersProvider = (function () {
    function TrackersProvider(http, processHttpmsgService, ep) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        this.ep = ep;
        console.log('Hello TrackersProvider Provider');
    }
    TrackersProvider.prototype.getRecords = function (userid, id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_baseurl__["a" /* baseurl */] + 'trackers/' + id + '/' + userid)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    TrackersProvider.prototype.addRecord = function (userid, id, data) {
        var _this = this;
        this.ep.traversal(data, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__shared_baseurl__["a" /* baseurl */] + 'trackers/' + id + '/' + userid, data)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    TrackersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
            __WEBPACK_IMPORTED_MODULE_4__encryption_encryption__["a" /* EncryptionProvider */]])
    ], TrackersProvider);
    return TrackersProvider;
}());

//# sourceMappingURL=trackers.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseurl; });
var baseurl = 'https://phrbackend.herokuapp.com/api/';
//# sourceMappingURL=baseurl.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHttpmsgProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProcessHttpmsgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProcessHttpmsgProvider = (function () {
    function ProcessHttpmsgProvider(http) {
        this.http = http;
        console.log('Hello ProcessHttpmsgProvider Provider');
    }
    ProcessHttpmsgProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProcessHttpmsgProvider.prototype.handleError = function (error) {
        var errMsg = '';
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ProcessHttpmsgProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], ProcessHttpmsgProvider);
    return ProcessHttpmsgProvider;
}());

//# sourceMappingURL=process-httpmsg.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBase; });
var QuestionBase = (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
    return QuestionBase;
}());

//# sourceMappingURL=question-base.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncryptionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EncryptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EncryptionProvider = (function () {
    function EncryptionProvider(http) {
        this.http = http;
        this.key = "Mobile PHR app.";
        // this.key = CryptoJS.enc.Hex.parse("Mobile PHR app.");
        // this.iv = CryptoJS.enc.Hex.parse("213abf798605cceadad32b7dab01632f");
        this.exProperty = {
            "id": "id",
            "date": "date",
            "datetime": "datetime",
            "subtest": "subtest",
            "testname": "testname",
            "organ": "organ",
            "username": "username",
            "password": "password",
            "email": "email",
            "securityQuestion": "securityQuestion",
            "securityAnswer": "securityAnswer"
        };
    }
    EncryptionProvider.prototype.traversal = function (payload, mode) {
        this.helper(payload, mode);
    };
    EncryptionProvider.prototype.helper = function (payload, mode) {
        for (var property in payload) {
            if (this.exProperty[property] != undefined)
                continue;
            if (typeof payload[property] == "string" || typeof payload[property] == "boolean" || typeof payload[property] == "number") {
                payload[property] = payload[property].toString();
                console.log(typeof payload[property]);
                if (mode == 0) {
                    console.log(payload[property]);
                    payload[property] = this.encrypt(payload[property]);
                    console.log(payload[property]);
                }
                else {
                    payload[property] = this.decrypt(payload[property]);
                    if (payload[property] === "true" || payload[property] === "false") {
                        payload[property] = (payload[property] === "true");
                    }
                }
                continue;
            }
            this.helper(payload[property], mode);
        }
    };
    EncryptionProvider.prototype.encrypt = function (text) {
        var encrypted = __WEBPACK_IMPORTED_MODULE_2_crypto_js___default.a.AES.encrypt(text, this.key);
        return encrypted.toString();
        // encrypted = encrypted.toString();
    };
    EncryptionProvider.prototype.decrypt = function (encrypted) {
        var decrypted = __WEBPACK_IMPORTED_MODULE_2_crypto_js___default.a.AES.decrypt(encrypted, this.key);
        return __WEBPACK_IMPORTED_MODULE_2_crypto_js___default.a.enc.Utf8.stringify(decrypted);
        // decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
    };
    EncryptionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EncryptionProvider);
    return EncryptionProvider;
}());

//# sourceMappingURL=encryption.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(571);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic2_auto_complete__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_trackers_trackers__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tracker_detail_tracker_detail__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_welcome_welcome__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_contact_contact__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_contact_detail_contact_detail__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_contact_add_contacts_contact_add_contacts__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_appointment_appointment__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_appointment_add_appointments_appointment_add_appointments__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_appointment_edit_appointment_edit__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_profile_editable_profile_editable__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_resources_resources__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_resources_add_resources_resources_add_resources__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_allergy_allergy__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_allergy_detail_allergy_detail__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_allergy_history_allergy_history__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_family_history_family_history__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_family_history_detail_family_history_detail__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_medical_history_medical_history__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_medical_history_detail_medical_history_detail__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_surgical_history_surgical_history__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_surgical_history_detail_surgical_history_detail__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_immunization_immunization__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_immunization_detail_immunization_detail__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_immunization_history_immunization_history__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_social_history_social_history__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_social_history_category_social_history_category__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_social_history_detail_social_history_detail__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_doctor_visit_notes_doctor_visit_notes__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_doctor_visit_notes_detail_doctor_visit_notes_detail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_medication_medication__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_medication_detail_medication_detail__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_test_results_test_results__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_diagnostic_procedure_diagnostic_procedure__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_diagnostic_procedure_detail_diagnostic_procedure_detail__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_lab_test_lab_test__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_lab_test_detail_lab_test_detail__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_password_edit_password_edit__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_password_reset_password_reset__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_status_bar__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_splash_screen__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_trackers_trackers__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_process_httpmsg_process_httpmsg__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_question_option_question_option__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_question_control_question_control__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_question_question__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_contacts_contacts__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_allergy_classification_allergy_classification__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_immunization_classification_immunization_classification__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__providers_user_user__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__providers_appointment_appointment__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__providers_social_history_classification_social_history_classification__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__providers_history_history__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__providers_diagnostic_procedure_classification_diagnostic_procedure_classification__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__providers_health_records_health_records__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__providers_encryption_encryption__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__providers_search_filter_search_filter__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__providers_resources_resources__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__components_tile_tile__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__components_dynamic_form_question_dynamic_form_question__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__components_dynamic_form_dynamic_form__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__components_calendar_calendar__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77_rxjs_add_operator_catch__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_77_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78_rxjs_add_operator_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_78_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_trackers_trackers__["b" /* TrackersPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tracker_detail_tracker_detail__["a" /* TrackerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_trackers_trackers__["a" /* PanelPage */],
                __WEBPACK_IMPORTED_MODULE_73__components_tile_tile__["a" /* TileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_allergy_allergy__["a" /* AllergyPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_allergy_detail_allergy_detail__["a" /* AllergyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_75__components_dynamic_form_dynamic_form__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_74__components_dynamic_form_question_dynamic_form_question__["a" /* DynamicFormQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_detail_contact_detail__["a" /* ContactDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_appointment_add_appointments_appointment_add_appointments__["a" /* AppointmentAddAppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_appointment_edit_appointment_edit__["a" /* AppointmentEditPage */],
                __WEBPACK_IMPORTED_MODULE_76__components_calendar_calendar__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_editable_profile_editable__["a" /* ProfileEditablePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_resources_resources__["a" /* ResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_resources_add_resources_resources_add_resources__["a" /* ResourcesAddResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_allergy_history_allergy_history__["a" /* AllergyHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_family_history_family_history__["a" /* FamilyHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_family_history_detail_family_history_detail__["a" /* FamilyHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_medical_history_medical_history__["a" /* MedicalHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_medical_history_detail_medical_history_detail__["a" /* MedicalHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_surgical_history_surgical_history__["a" /* SurgicalHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_surgical_history_detail_surgical_history_detail__["a" /* SurgicalHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_immunization_immunization__["a" /* ImmunizationPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_immunization_history_immunization_history__["a" /* ImmunizationHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_immunization_detail_immunization_detail__["a" /* ImmunizationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_social_history_social_history__["a" /* SocialHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_social_history_category_social_history_category__["a" /* SocialHistoryCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_social_history_detail_social_history_detail__["a" /* SocialHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_doctor_visit_notes_doctor_visit_notes__["a" /* DoctorVisitNotesPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_doctor_visit_notes_detail_doctor_visit_notes_detail__["a" /* DoctorVisitNotesDetailPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_medication_medication__["a" /* MedicationPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_medication_detail_medication_detail__["a" /* MedicationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_test_results_test_results__["a" /* TestResultsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_diagnostic_procedure_diagnostic_procedure__["a" /* DiagnosticProcedurePage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_diagnostic_procedure_detail_diagnostic_procedure_detail__["a" /* DiagnosticProcedureDetailPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_lab_test_lab_test__["a" /* LabTestPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_lab_test_detail_lab_test_detail__["a" /* LabTestDetailPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_password_edit_password_edit__["a" /* PasswordEditPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_password_reset_password_reset__["a" /* PasswordResetPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/allergy-detail/allergy-detail.module#AllergyDetailPageModule', name: 'AllergyDetailPage', segment: 'allergy-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allergy-history/allergy-history.module#AllergyHistoryPageModule', name: 'AllergyHistoryPage', segment: 'allergy-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allergy/allergy.module#AllergyPageModule', name: 'AllergyPage', segment: 'allergy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appointment-add-appointments/appointment-add-appointments.module#AppointmentAddAppointmentsPageModule', name: 'AppointmentAddAppointmentsPage', segment: 'appointment-add-appointments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appointment-edit/appointment-edit.module#AppointmentEditPageModule', name: 'AppointmentEditPage', segment: 'appointment-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-add-contacts/contact-add-contacts.module#ContactAddContactsPageModule', name: 'ContactAddContactsPage', segment: 'contact-add-contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appointment/appointment.module#AppointmentPageModule', name: 'AppointmentPage', segment: 'appointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-detail/contact-detail.module#ContactDetailPageModule', name: 'ContactDetailPage', segment: 'contact-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/diagnostic-procedure-detail/diagnostic-procedure-detail.module#DiagnosticProcedureDetailPageModule', name: 'DiagnosticProcedureDetailPage', segment: 'diagnostic-procedure-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/diagnostic-procedure/diagnostic-procedure.module#DiagnosticProcedurePageModule', name: 'DiagnosticProcedurePage', segment: 'diagnostic-procedure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor-visit-notes-detail/doctor-visit-notes-detail.module#DoctorVisitNotesDetailPageModule', name: 'DoctorVisitNotesDetailPage', segment: 'doctor-visit-notes-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor-visit-notes/doctor-visit-notes.module#DoctorVisitNotesPageModule', name: 'DoctorVisitNotesPage', segment: 'doctor-visit-notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/family-history-detail/family-history-detail.module#FamilyHistoryDetailPageModule', name: 'FamilyHistoryDetailPage', segment: 'family-history-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/family-history/family-history.module#FamilyHistoryPageModule', name: 'FamilyHistoryPage', segment: 'family-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/immunization-detail/immunization-detail.module#ImmunizationDetailPageModule', name: 'ImmunizationDetailPage', segment: 'immunization-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/immunization-history/immunization-history.module#ImmunizationHistoryPageModule', name: 'ImmunizationHistoryPage', segment: 'immunization-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/immunization/immunization.module#ImmunizationPageModule', name: 'ImmunizationPage', segment: 'immunization', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lab-test-detail/lab-test-detail.module#LabTestDetailPageModule', name: 'LabTestDetailPage', segment: 'lab-test-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lab-test/lab-test.module#LabTestPageModule', name: 'LabTestPage', segment: 'lab-test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medical-history-detail/medical-history-detail.module#MedicalHistoryDetailPageModule', name: 'MedicalHistoryDetailPage', segment: 'medical-history-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medical-history/medical-history.module#MedicalHistoryPageModule', name: 'MedicalHistoryPage', segment: 'medical-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medication-detail/medication-detail.module#MedicationDetailPageModule', name: 'MedicationDetailPage', segment: 'medication-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medication/medication.module#MedicationPageModule', name: 'MedicationPage', segment: 'medication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-edit/password-edit.module#PasswordEditPageModule', name: 'PasswordEditPage', segment: 'password-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-reset/password-reset.module#PasswordResetPageModule', name: 'PasswordResetPage', segment: 'password-reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-editable/profile-editable.module#ProfileEditablePageModule', name: 'ProfileEditablePage', segment: 'profile-editable', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resources-add-resources/resources-add-resources.module#ResourcesAddResourcesPageModule', name: 'ResourcesAddResourcesPage', segment: 'resources-add-resources', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resources/resources.module#ResourcesPageModule', name: 'ResourcesPage', segment: 'resources', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-history-category/social-history-category.module#SocialHistoryCategoryPageModule', name: 'SocialHistoryCategoryPage', segment: 'social-history-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-history-detail/social-history-detail.module#SocialHistoryDetailPageModule', name: 'SocialHistoryDetailPage', segment: 'social-history-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-history/social-history.module#SocialHistoryPageModule', name: 'SocialHistoryPage', segment: 'social-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surgical-history-detail/surgical-history-detail.module#SurgicalHistoryDetailPageModule', name: 'SurgicalHistoryDetailPage', segment: 'surgical-history-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-results/test-results.module#TestResultsPageModule', name: 'TestResultsPage', segment: 'test-results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surgical-history/surgical-history.module#SurgicalHistoryPageModule', name: 'SurgicalHistoryPage', segment: 'surgical-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tracker-detail/tracker-detail.module#TrackerDetailPageModule', name: 'TrackerDetailPage', segment: 'tracker-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trackers/trackers.module#TrackersPageModule', name: 'TrackersPage', segment: 'trackers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_9_ionic2_auto_complete__["a" /* AutoCompleteModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_trackers_trackers__["b" /* TrackersPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tracker_detail_tracker_detail__["a" /* TrackerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_trackers_trackers__["a" /* PanelPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_allergy_allergy__["a" /* AllergyPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_allergy_detail_allergy_detail__["a" /* AllergyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_detail_contact_detail__["a" /* ContactDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_appointment_add_appointments_appointment_add_appointments__["a" /* AppointmentAddAppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_appointment_edit_appointment_edit__["a" /* AppointmentEditPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_editable_profile_editable__["a" /* ProfileEditablePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_resources_resources__["a" /* ResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_resources_add_resources_resources_add_resources__["a" /* ResourcesAddResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_allergy_history_allergy_history__["a" /* AllergyHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_family_history_family_history__["a" /* FamilyHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_family_history_detail_family_history_detail__["a" /* FamilyHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_medical_history_medical_history__["a" /* MedicalHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_medical_history_detail_medical_history_detail__["a" /* MedicalHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_surgical_history_surgical_history__["a" /* SurgicalHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_surgical_history_detail_surgical_history_detail__["a" /* SurgicalHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_immunization_immunization__["a" /* ImmunizationPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_immunization_history_immunization_history__["a" /* ImmunizationHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_immunization_detail_immunization_detail__["a" /* ImmunizationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_social_history_social_history__["a" /* SocialHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_social_history_category_social_history_category__["a" /* SocialHistoryCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_social_history_detail_social_history_detail__["a" /* SocialHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_doctor_visit_notes_doctor_visit_notes__["a" /* DoctorVisitNotesPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_doctor_visit_notes_detail_doctor_visit_notes_detail__["a" /* DoctorVisitNotesDetailPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_medication_medication__["a" /* MedicationPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_medication_detail_medication_detail__["a" /* MedicationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_test_results_test_results__["a" /* TestResultsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_diagnostic_procedure_diagnostic_procedure__["a" /* DiagnosticProcedurePage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_diagnostic_procedure_detail_diagnostic_procedure_detail__["a" /* DiagnosticProcedureDetailPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_lab_test_lab_test__["a" /* LabTestPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_lab_test_detail_lab_test_detail__["a" /* LabTestDetailPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_password_edit_password_edit__["a" /* PasswordEditPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_password_reset_password_reset__["a" /* PasswordResetPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_55__providers_trackers_trackers__["a" /* TrackersProvider */],
                __WEBPACK_IMPORTED_MODULE_56__providers_process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
                __WEBPACK_IMPORTED_MODULE_61__providers_allergy_classification_allergy_classification__["a" /* AllergyClassificationProvider */],
                __WEBPACK_IMPORTED_MODULE_62__providers_immunization_classification_immunization_classification__["a" /* ImmunizationClassificationProvider */],
                __WEBPACK_IMPORTED_MODULE_58__providers_question_control_question_control__["a" /* QuestionControlProvider */],
                __WEBPACK_IMPORTED_MODULE_59__providers_question_question__["a" /* QuestionProvider */],
                __WEBPACK_IMPORTED_MODULE_60__providers_contacts_contacts__["a" /* ContactsProvider */],
                __WEBPACK_IMPORTED_MODULE_57__providers_question_option_question_option__["a" /* QuestionOptionProvider */],
                __WEBPACK_IMPORTED_MODULE_63__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_64__providers_appointment_appointment__["a" /* AppointmentProvider */],
                __WEBPACK_IMPORTED_MODULE_65__providers_social_history_classification_social_history_classification__["a" /* SocialHistoryClassificationProvider */],
                __WEBPACK_IMPORTED_MODULE_66__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_67__providers_history_history__["a" /* HistoryProvider */],
                __WEBPACK_IMPORTED_MODULE_68__providers_diagnostic_procedure_classification_diagnostic_procedure_classification__["a" /* DiagnosticProcedureClassificationProvider */],
                __WEBPACK_IMPORTED_MODULE_69__providers_health_records_health_records__["a" /* HealthRecordsProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_70__providers_encryption_encryption__["a" /* EncryptionProvider */],
                __WEBPACK_IMPORTED_MODULE_71__providers_search_filter_search_filter__["a" /* SearchFilterProvider */],
                __WEBPACK_IMPORTED_MODULE_72__providers_resources_resources__["a" /* ResourcesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 285,
	"./af.js": 285,
	"./ar": 286,
	"./ar-dz": 287,
	"./ar-dz.js": 287,
	"./ar-kw": 288,
	"./ar-kw.js": 288,
	"./ar-ly": 289,
	"./ar-ly.js": 289,
	"./ar-ma": 290,
	"./ar-ma.js": 290,
	"./ar-sa": 291,
	"./ar-sa.js": 291,
	"./ar-tn": 292,
	"./ar-tn.js": 292,
	"./ar.js": 286,
	"./az": 293,
	"./az.js": 293,
	"./be": 294,
	"./be.js": 294,
	"./bg": 295,
	"./bg.js": 295,
	"./bm": 296,
	"./bm.js": 296,
	"./bn": 297,
	"./bn.js": 297,
	"./bo": 298,
	"./bo.js": 298,
	"./br": 299,
	"./br.js": 299,
	"./bs": 300,
	"./bs.js": 300,
	"./ca": 301,
	"./ca.js": 301,
	"./cs": 302,
	"./cs.js": 302,
	"./cv": 303,
	"./cv.js": 303,
	"./cy": 304,
	"./cy.js": 304,
	"./da": 305,
	"./da.js": 305,
	"./de": 306,
	"./de-at": 307,
	"./de-at.js": 307,
	"./de-ch": 308,
	"./de-ch.js": 308,
	"./de.js": 306,
	"./dv": 309,
	"./dv.js": 309,
	"./el": 310,
	"./el.js": 310,
	"./en-au": 311,
	"./en-au.js": 311,
	"./en-ca": 312,
	"./en-ca.js": 312,
	"./en-gb": 313,
	"./en-gb.js": 313,
	"./en-ie": 314,
	"./en-ie.js": 314,
	"./en-il": 315,
	"./en-il.js": 315,
	"./en-nz": 316,
	"./en-nz.js": 316,
	"./eo": 317,
	"./eo.js": 317,
	"./es": 318,
	"./es-do": 319,
	"./es-do.js": 319,
	"./es-us": 320,
	"./es-us.js": 320,
	"./es.js": 318,
	"./et": 321,
	"./et.js": 321,
	"./eu": 322,
	"./eu.js": 322,
	"./fa": 323,
	"./fa.js": 323,
	"./fi": 324,
	"./fi.js": 324,
	"./fo": 325,
	"./fo.js": 325,
	"./fr": 326,
	"./fr-ca": 327,
	"./fr-ca.js": 327,
	"./fr-ch": 328,
	"./fr-ch.js": 328,
	"./fr.js": 326,
	"./fy": 329,
	"./fy.js": 329,
	"./gd": 330,
	"./gd.js": 330,
	"./gl": 331,
	"./gl.js": 331,
	"./gom-latn": 332,
	"./gom-latn.js": 332,
	"./gu": 333,
	"./gu.js": 333,
	"./he": 334,
	"./he.js": 334,
	"./hi": 335,
	"./hi.js": 335,
	"./hr": 336,
	"./hr.js": 336,
	"./hu": 337,
	"./hu.js": 337,
	"./hy-am": 338,
	"./hy-am.js": 338,
	"./id": 339,
	"./id.js": 339,
	"./is": 340,
	"./is.js": 340,
	"./it": 341,
	"./it.js": 341,
	"./ja": 342,
	"./ja.js": 342,
	"./jv": 343,
	"./jv.js": 343,
	"./ka": 344,
	"./ka.js": 344,
	"./kk": 345,
	"./kk.js": 345,
	"./km": 346,
	"./km.js": 346,
	"./kn": 347,
	"./kn.js": 347,
	"./ko": 348,
	"./ko.js": 348,
	"./ky": 349,
	"./ky.js": 349,
	"./lb": 350,
	"./lb.js": 350,
	"./lo": 351,
	"./lo.js": 351,
	"./lt": 352,
	"./lt.js": 352,
	"./lv": 353,
	"./lv.js": 353,
	"./me": 354,
	"./me.js": 354,
	"./mi": 355,
	"./mi.js": 355,
	"./mk": 356,
	"./mk.js": 356,
	"./ml": 357,
	"./ml.js": 357,
	"./mn": 358,
	"./mn.js": 358,
	"./mr": 359,
	"./mr.js": 359,
	"./ms": 360,
	"./ms-my": 361,
	"./ms-my.js": 361,
	"./ms.js": 360,
	"./mt": 362,
	"./mt.js": 362,
	"./my": 363,
	"./my.js": 363,
	"./nb": 364,
	"./nb.js": 364,
	"./ne": 365,
	"./ne.js": 365,
	"./nl": 366,
	"./nl-be": 367,
	"./nl-be.js": 367,
	"./nl.js": 366,
	"./nn": 368,
	"./nn.js": 368,
	"./pa-in": 369,
	"./pa-in.js": 369,
	"./pl": 370,
	"./pl.js": 370,
	"./pt": 371,
	"./pt-br": 372,
	"./pt-br.js": 372,
	"./pt.js": 371,
	"./ro": 373,
	"./ro.js": 373,
	"./ru": 374,
	"./ru.js": 374,
	"./sd": 375,
	"./sd.js": 375,
	"./se": 376,
	"./se.js": 376,
	"./si": 377,
	"./si.js": 377,
	"./sk": 378,
	"./sk.js": 378,
	"./sl": 379,
	"./sl.js": 379,
	"./sq": 380,
	"./sq.js": 380,
	"./sr": 381,
	"./sr-cyrl": 382,
	"./sr-cyrl.js": 382,
	"./sr.js": 381,
	"./ss": 383,
	"./ss.js": 383,
	"./sv": 384,
	"./sv.js": 384,
	"./sw": 385,
	"./sw.js": 385,
	"./ta": 386,
	"./ta.js": 386,
	"./te": 387,
	"./te.js": 387,
	"./tet": 388,
	"./tet.js": 388,
	"./tg": 389,
	"./tg.js": 389,
	"./th": 390,
	"./th.js": 390,
	"./tl-ph": 391,
	"./tl-ph.js": 391,
	"./tlh": 392,
	"./tlh.js": 392,
	"./tr": 393,
	"./tr.js": 393,
	"./tzl": 394,
	"./tzl.js": 394,
	"./tzm": 395,
	"./tzm-latn": 396,
	"./tzm-latn.js": 396,
	"./tzm.js": 395,
	"./ug-cn": 397,
	"./ug-cn.js": 397,
	"./uk": 398,
	"./uk.js": 398,
	"./ur": 399,
	"./ur.js": 399,
	"./uz": 400,
	"./uz-latn": 401,
	"./uz-latn.js": 401,
	"./uz.js": 400,
	"./vi": 402,
	"./vi.js": 402,
	"./x-pseudo": 403,
	"./x-pseudo.js": 403,
	"./yo": 404,
	"./yo.js": 404,
	"./zh-cn": 405,
	"./zh-cn.js": 405,
	"./zh-hk": 406,
	"./zh-hk.js": 406,
	"./zh-tw": 407,
	"./zh-tw.js": 407
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 592;

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextboxQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(54);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextboxQuestion = (function (_super) {
    __extends(TextboxQuestion, _super);
    function TextboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        _this.unit = options['unit'] || '';
        _this.readonly = options['readonly'] || false;
        return _this;
    }
    return TextboxQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-textbox.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatetimeQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(54);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DatetimeQuestion = (function (_super) {
    __extends(DatetimeQuestion, _super);
    function DatetimeQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'datetime';
        _this.display = options['display'] || 'MM/DD/YYYY';
        return _this;
    }
    return DatetimeQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-datetime.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(54);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DropdownQuestion = (function (_super) {
    __extends(DropdownQuestion, _super);
    function DropdownQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'dropdown';
        _this.options = [];
        _this.multiple = options['multiple'] || false;
        _this.options = options['options'] || [];
        return _this;
    }
    return DropdownQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-dropdown.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextareaQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(54);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextareaQuestion = (function (_super) {
    __extends(TextareaQuestion, _super);
    function TextareaQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textarea';
        _this.rows = options['rows'] || 3;
        _this.readonly = options['readonly'] || false;
        _this.placeholder = options['placeholder'] || '';
        return _this;
    }
    return TextareaQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-textarea.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(54);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ToggleQuestion = (function (_super) {
    __extends(ToggleQuestion, _super);
    function ToggleQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'toggle';
        return _this;
    }
    return ToggleQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-toggle.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(54);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RangeQuestion = (function (_super) {
    __extends(RangeQuestion, _super);
    function RangeQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'range';
        _this.min = options['min'] || 0;
        _this.max = options['max'] || 100;
        _this.step = options['step'] || 1;
        _this.snaps = options['snaps'] || false;
        _this.pin = options['pin'] || false;
        _this.color = options['color'] || 'primary';
        _this.iconleft = options['iconleft'] || '';
        _this.iconright = options['iconright'] || '';
        return _this;
    }
    return RangeQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-range.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(54);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ComplexQuestion = (function (_super) {
    __extends(ComplexQuestion, _super);
    function ComplexQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'complex';
        _this.options = [];
        _this.selectvalue = options['selectvalue'] || '';
        _this.selectkey = options['selectkey'] || '';
        _this.selectlabel = options['selectlabel'] || '';
        _this.selectrequired = !!options['selectrequired'];
        _this.multiple = options['multiple'] || false;
        _this.options = options['options'] || [];
        _this.selectOptions = options['selectOptions'] || {};
        _this.inputvalue = options['inputvalue'] || '';
        _this.inputkey = options['inputkey'] || '';
        _this.inputlabel = options['inputlabel'] || '';
        _this.inputrequired = !!options['inputrequired'];
        _this.type = options['type'] || '';
        _this.unit = options['unit'] || '';
        _this.readonly = options['readonly'] || false;
        _this.datetimevalue = options['datetimevalue'] || '';
        _this.datetimekey = options['datetimekey'] || '';
        _this.datetimelabel = options['datetimelabel'] || '';
        _this.datetimerequired = !!options['datetimerequired'];
        _this.display = options['display'] || 'MM/DD/YYYY';
        return _this;
    }
    return ComplexQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-complex.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactAddContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_contacts_contacts__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ContactAddContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactAddContactsPage = (function () {
    function ContactAddContactsPage(navCtrl, navParams, fb, viewCtrl, toastCtrl, loadingCtrl, contactsProvider, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.contactsProvider = contactsProvider;
        this.auth = auth;
        this.groups = [];
        this.isDoctor = false;
        this.isFamilyorEmergency = false;
        this.address = [];
        this.formErrors = {
            "firstname": '',
            "lastname": '',
            "relationship": '',
            "tel": '',
            "fax": '',
            "specialty": '',
            "location1": '',
            "group": ''
        };
        this.validationMessages = {
            "firstname": {
                "required": "Firstname is required.",
                "minlength": "Firstname must be at least 2 characters long.",
                "maxlength": "Firstname cannot be more than 25 characters long."
            },
            "lastname": {
                "required": "Lastname is required.",
                "minlength": "Lastname must be at least 2 characters long.",
                "maxlength": "Lastname cannot be more than 25 characters long."
            },
            "relationship": {
                "required": "Relationship is required."
            },
            "specialty": {
                "required": "Specialty is required."
            },
            "tel": {
                "required": "Tel number is required.",
                "pattern": "Please enter a valid 10-digit phone number. For example: 4123456789."
            },
            "fax": {
                "pattern": "Please enter a valid fax number."
            },
            "location1": {
                "required": "Address is required."
            },
            "group": {
                "required": "Contact group is required."
            }
        };
        this.addContactForm = this.fb.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            relationship: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            tel: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{10}')]],
            fax: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{10}')],
            specialty: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            location1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            location2: [''],
            location3: [''],
            group: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
        this.addContactForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        this.addContactForm.controls["group"].valueChanges.subscribe(function (value) { return _this.onGroupValueChanged(value); });
    }
    ContactAddContactsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactAddContactsPage');
    };
    ContactAddContactsPage.prototype.onValueChanged = function (data) {
        if (!this.addContactForm) {
            return;
        }
        var form = this.addContactForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ContactAddContactsPage.prototype.onGroupValueChanged = function (value) {
        this.isDoctor = false;
        this.isFamilyorEmergency = false;
        this.groups = value;
        if (this.groups.includes("doctor")) {
            this.isDoctor = true;
            this.addContactForm.patchValue({
                specialty: ""
            });
        }
        else {
            this.isDoctor = false;
            this.addContactForm.patchValue({
                specialty: "0"
            });
        }
        if (this.groups.includes("family") || this.groups.includes("emergency")) {
            this.isFamilyorEmergency = true;
            this.addContactForm.patchValue({
                relationship: ""
            });
        }
        else {
            this.isFamilyorEmergency = false;
            this.addContactForm.patchValue({
                relationship: "0"
            });
        }
    };
    ContactAddContactsPage.prototype.addAddress = function () {
        if (this.address.length < 2)
            this.address.push(1);
    };
    ContactAddContactsPage.prototype.deleteAddress = function () {
        if (this.address.length > 0)
            this.address.pop();
    };
    ContactAddContactsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ContactAddContactsPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var contact = this.addContactForm.value;
        contact.group = this.addContactForm.get("group").value.toString();
        console.log(contact);
        // post new contact info
        this.contactsProvider.addContacts(this.auth.userId, contact)
            .subscribe(function (contact) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added a new contact.');
            _this.viewCtrl.dismiss();
        }, function (error) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add a new contact.');
        });
    };
    ContactAddContactsPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    ContactAddContactsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ContactAddContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-add-contacts',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact-add-contacts/contact-add-contacts.html"*/'<!--\n  Generated template for the ContactAddContactsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Contacts</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]=\'addContactForm\' (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label>Contact Group<span class="color-red">*</span></ion-label>\n      <ion-select formControlName="group" (value)="group" multiple="true">\n        <ion-option value="emergency">Emergency</ion-option>\n        <ion-option value="friend">Friend</ion-option>\n        <ion-option value="family">Family</ion-option>\n        <ion-option value="doctor">Doctor</ion-option>\n      </ion-select>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.group)">{{formErrors.group}}</span>\n    </div>\n    <ion-item>\n      <ion-label floating>First Name<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="firstname"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.firstname)">{{formErrors.firstname}}</span>\n    </div>\n    <ion-item>\n      <ion-label floating>Last Name<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="lastname"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.lastname)">{{formErrors.lastname}}</span>\n    </div>\n    <ion-item *ngIf="isFamilyorEmergency">\n      <ion-label floating>Relationship<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="relationship"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red" *ngIf="isFamilyorEmergency">\n      <span [hidden]="!(formErrors.relationship)">{{formErrors.relationship}}</span>\n    </div>\n    <ion-item>\n      <ion-label floating>Tel<span class="color-red">*</span></ion-label>\n      <ion-input type="tel" formControlName="tel"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.tel)">{{formErrors.tel}}</span>\n    </div>\n    <ion-item *ngIf="isDoctor">\n      <ion-label floating>Fax</ion-label>\n      <ion-input type="tel" formControlName="fax"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red" *ngIf="isDoctor">\n      <span [hidden]="!(formErrors.fax)">{{formErrors.fax}}</span>\n    </div>\n    <ion-item *ngIf="isDoctor">\n      <ion-label floating>Specialty<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="specialty"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red" *ngIf="isDoctor">\n      <span [hidden]="!(formErrors.specialty)">{{formErrors.specialty}}</span>\n    </div>\n    <ion-item *ngIf="!isDoctor">\n      <ion-label floating>Address<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="location1"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="isDoctor">\n      <ion-label floating>Address1<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="location1"></ion-input>\n      <ion-icon color="primary" name="add-circle" (click)="addAddress()" item-right></ion-icon>\n    </ion-item>\n    <ion-item *ngIf="address[0] && isDoctor">\n      <ion-label floating>Address2</ion-label>\n      <ion-input formControlName="location2"></ion-input>\n      <ion-icon color="danger" name="remove-circle" (click)="deleteAddress()" item-end></ion-icon>\n    </ion-item>\n    <ion-item *ngIf="address[1] && isDoctor">\n      <ion-label floating>Address3</ion-label>\n      <ion-input formControlName="location3"></ion-input>\n      <ion-icon color="danger" name="remove-circle" (click)="deleteAddress()" item-end></ion-icon>\n    </ion-item>\n    <button ion-button block type="submit" [disabled]="!addContactForm.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact-add-contacts/contact-add-contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_contacts_contacts__["a" /* ContactsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ContactAddContactsPage);
    return ContactAddContactsPage;
}());

//# sourceMappingURL=contact-add-contacts.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ContactsProvider = (function () {
    function ContactsProvider(http, processHttpmsgService) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        console.log('Hello ContactsProvider Provider');
    }
    ContactsProvider.prototype.getContactsDetail = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'contacts/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    ContactsProvider.prototype.addContacts = function (id, contact) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'contacts/' + id, contact)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    ContactsProvider.prototype.getDoctors = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'contacts/doctors/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    ContactsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], ContactsProvider);
    return ContactsProvider;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__encryption_encryption__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http, processHttpmsgService, ep) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        this.ep = ep;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/login', credentials)
            .map(function (res) { return _this.userId = res; })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AuthServiceProvider.prototype.register = function (data) {
        var _this = this;
        this.ep.traversal(data, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/signup', data)
            .map(function (res) {
            if (res.exist == false)
                _this.userId = res.id;
            else
                _this.userId = undefined;
            return res;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AuthServiceProvider.prototype.logout = function () {
        this.userId = undefined;
    };
    AuthServiceProvider.prototype.editPassword = function (id, password) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/editpassword/' + id, password)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AuthServiceProvider.prototype.resetPassword = function (id, password) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/resetpassword/' + id, password)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AuthServiceProvider.prototype.verifyEmail_getSecQues = function (email) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/email/', email)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AuthServiceProvider.prototype.verifySecAns = function (id, secAns) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/securityanswer/' + id, secAns)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
            __WEBPACK_IMPORTED_MODULE_4__encryption_encryption__["a" /* EncryptionProvider */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__encryption_encryption__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AppointmentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppointmentProvider = (function () {
    function AppointmentProvider(http, processHttpmsgService, ep) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        this.ep = ep;
    }
    AppointmentProvider.prototype.getAppointment = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'appointment/' + id)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AppointmentProvider.prototype.addAppointment = function (id, appointment) {
        var _this = this;
        this.ep.traversal(appointment, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'appointment/' + id, appointment)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AppointmentProvider.prototype.deleteAppointment = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'appointment/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AppointmentProvider.prototype.editAppointment = function (id, recordid, appointment) {
        var _this = this;
        this.ep.traversal(appointment, 0);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'appointment/' + recordid + '/' + id, appointment)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AppointmentProvider.prototype.getRecentAppointment = function (userid, duration) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'appointment/days/' + duration + '/' + userid)
            .map(function (records) {
            _this.ep.traversal(records, 1);
            return records;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AppointmentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
            __WEBPACK_IMPORTED_MODULE_4__encryption_encryption__["a" /* EncryptionProvider */]])
    ], AppointmentProvider);
    return AppointmentProvider;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment_appointment__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lab_test_detail_lab_test_detail__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medication_medication__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__immunization_history_immunization_history__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doctor_visit_notes_doctor_visit_notes__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_appointment_appointment__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_health_records_health_records__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, ap, hrp, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ap = ap;
        this.hrp = hrp;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.appointments = [];
        this.labtests = [];
        this.medications = [];
        this.immunizations = [];
        this.dvnotes = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
    }
    DashboardPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.ap.getAppointment(this.auth.userId)
            .subscribe(function (app) {
            _this.appointments = app;
        }, function (errmess) { return _this.errMess = errmess; });
        this.hrp.getRecentLabTest(this.auth.userId, 30)
            .subscribe(function (records) {
            _this.labtests = records;
        }, function (errmess) { return _this.errMess = errmess; });
        this.hrp.getRecentDiagnosticProcedure(this.auth.userId, 30)
            .subscribe(function (records) {
            _this.labtests = records;
        }, function (errmess) { return _this.errMess = errmess; });
        this.hrp.getMedication(this.auth.userId)
            .subscribe(function (records) {
            _this.medications = records;
        }, function (errmess) { return _this.errMess = errmess; });
        this.hrp.getImmunization(this.auth.userId)
            .subscribe(function (records) {
            _this.immunizations = records;
            _this.immunizations.forEach(function (immunization) {
                if (immunization.age > 18)
                    immunization['ageGroup'] = "Adult";
                else
                    immunization['ageGroup'] = "Child and Adolescent";
            });
        }, function (errmess) { return _this.errMess = errmess; });
        this.hrp.getDoctorVisitNotes(this.auth.userId)
            .subscribe(function (records) {
            _this.dvnotes = records;
        }, function (errmess) { return _this.errMess = errmess; });
        return true;
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.goToAppointment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appointment_appointment__["a" /* AppointmentPage */]);
    };
    DashboardPage.prototype.goToLabtest = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__lab_test_detail_lab_test_detail__["a" /* LabTestDetailPage */], {
            'title': this.labtests[i].name,
            'id': this.labtests[i].id,
            'unit': this.labtests[i].unit,
            'tab': 'history'
        });
    };
    DashboardPage.prototype.goToMedication = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__medication_medication__["a" /* MedicationPage */]);
    };
    DashboardPage.prototype.goToImmunization = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__immunization_history_immunization_history__["a" /* ImmunizationHistoryPage */]);
    };
    DashboardPage.prototype.goToDoctorVisitNotes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__doctor_visit_notes_doctor_visit_notes__["a" /* DoctorVisitNotesPage */]);
    };
    DashboardPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.ap.getAppointment(_this.auth.userId)
                .subscribe(function (app) { return _this.appointments = app; }, function (errmess) { return _this.errMess = errmess; });
            _this.hrp.getRecentLabTest(_this.auth.userId, 30)
                .subscribe(function (records) { return _this.labtests = records; }, function (errmess) { return _this.errMess = errmess; });
            _this.hrp.getMedication(_this.auth.userId)
                .subscribe(function (records) { return _this.medications = records; }, function (errmess) { return _this.errMess = errmess; });
            _this.hrp.getImmunization(_this.auth.userId)
                .subscribe(function (records) {
                _this.immunizations = records;
                _this.immunizations.forEach(function (immunization) {
                    if (immunization.age > 18)
                        immunization['ageGroup'] = "Adult";
                    else
                        immunization['ageGroup'] = "Child and Adolescent";
                });
            }, function (errmess) { return _this.errMess = errmess; });
            _this.hrp.getDoctorVisitNotes(_this.auth.userId)
                .subscribe(function (records) { return _this.dvnotes = records; }, function (errmess) { return _this.errMess = errmess; });
            console.log('Async operation has ended');
            refresher.complete();
        }, 1500);
    };
    DashboardPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>DASHBOARD</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content color="primary" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-list-header>Recent Events</ion-list-header>\n    <ion-card *ngIf="appointments.length!=0">\n      <ion-card-content>\n        <ion-card-title>\n          <ion-item no-padding>\n            <ion-icon item-start>\n              <i class="far fa-calendar-alt dashboard-icon"></i>\n            </ion-icon>\n            <span>Appointment</span>\n          </ion-item>\n        </ion-card-title>\n        <ion-list *ngFor="let appointment of appointments">\n          <ion-item (click)="goToAppointment()">\n            <h2>{{appointment.date | date}} at {{appointment.time}}</h2>\n            <h3>{{appointment.location}}</h3>\n            <p>{{appointment.firstname | titlecase}} {{appointment.lastname | titlecase}}</p>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="labtests.length!=0">\n      <ion-card-content>\n        <ion-card-title>\n          <ion-item no-padding>\n            <ion-icon item-start>\n              <i class="fas fa-file-medical-alt dashboard-icon"></i>\n            </ion-icon>\n            <span>Abnormal Lab Test</span>\n          </ion-item>\n        </ion-card-title>\n        <ion-list *ngFor="let labtest of labtests; let i = index;">\n          <ion-item (click)="goToLabtest(i)">\n            <h2>{{labtest.subtest}}</h2>\n            <h3>{{labtest.result}}\n              <span *ngIf="labtest.unit.length!=0"> {{labtest.unit}}</span>\n            </h3>\n            <p>{{labtest.date | date}}</p>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="medications.length!=0">\n      <ion-card-content>\n        <ion-card-title>\n          <ion-item no-padding>\n            <ion-icon item-start>\n              <i class="fas fa-capsules dashboard-icon"></i>\n            </ion-icon>\n            <span>Medication</span>\n          </ion-item>\n        </ion-card-title>\n        <ion-list *ngFor="let medication of medications">\n          <ion-item (click)="goToMedication()">\n            <h2>{{medication.name}}</h2>\n            <h3>{{medication.frequency}}</h3>\n            <p>{{medication.date | date}}</p>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="immunizations.length!=0">\n      <ion-card-content>\n        <ion-card-title>\n          <ion-item no-padding>\n            <ion-icon item-start>\n              <i class="fas fa-syringe dashboard-icon"></i>\n            </ion-icon>\n            <span>Immunization</span>\n          </ion-item>\n        </ion-card-title>\n        <ion-list *ngFor="let immunization of immunizations">\n          <ion-item (click)="goToImmunization()">\n            <h2>{{immunization.vaccine}}</h2>\n            <h3>{{immunization.schedule}}</h3>\n            <p>{{immunization.date | date}}</p>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="dvnotes.length!=0">\n      <ion-card-content>\n        <ion-card-title>\n          <ion-item no-padding>\n            <ion-icon item-start>\n              <i class="fas fa-notes-medical dashboard-icon"></i>\n            </ion-icon>\n            <span>Doctor Visit Notes</span>\n          </ion-item>\n        </ion-card-title>\n        <ion-list *ngFor="let d of dvnotes">\n          <ion-item (click)="goToDoctorVisitNotes()">\n            <h2>{{d.diagnosis}}</h2>\n            <h3>{{d.doctor}}</h3>\n            <p>{{d.date | date}}</p>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_8__providers_appointment_appointment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_health_records_health_records__["a" /* HealthRecordsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_trackers_trackers__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_appointment_appointment__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_resources_resources__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_allergy_history_allergy_history__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_family_history_family_history__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_medical_history_medical_history__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_surgical_history_surgical_history__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_immunization_history_immunization_history__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_social_history_social_history__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_doctor_visit_notes_doctor_visit_notes__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_medication_medication__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_test_results_test_results__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, app, auth, alertCtrl, toastCtrl, loadingCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.app = app;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        // used for ngFor and navigation
        this.pages = [
            {
                title: 'Health Records',
                icon: 'leaf',
                open: false,
                children: [
                    {
                        title: 'Test Results',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_19__pages_test_results_test_results__["a" /* TestResultsPage */]
                    },
                    {
                        title: 'Doctor Visit Notes',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_17__pages_doctor_visit_notes_doctor_visit_notes__["a" /* DoctorVisitNotesPage */]
                    },
                    {
                        title: 'Medication',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_18__pages_medication_medication__["a" /* MedicationPage */]
                    },
                    {
                        title: 'Immunization',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_15__pages_immunization_history_immunization_history__["a" /* ImmunizationHistoryPage */]
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
                        component: __WEBPACK_IMPORTED_MODULE_11__pages_allergy_history_allergy_history__["a" /* AllergyHistoryPage */]
                    },
                    {
                        title: 'Medical History',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_13__pages_medical_history_medical_history__["a" /* MedicalHistoryPage */]
                    },
                    {
                        title: 'Social History',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_16__pages_social_history_social_history__["a" /* SocialHistoryPage */]
                    },
                    {
                        title: 'Surgical History',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_14__pages_surgical_history_surgical_history__["a" /* SurgicalHistoryPage */]
                    },
                    {
                        title: 'Family History',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_12__pages_family_history_family_history__["a" /* FamilyHistoryPage */]
                    }
                ]
            }
        ];
        this.onelevelPages = [
            {
                title: 'Trackers',
                icon: 'infinite',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_trackers_trackers__["b" /* TrackersPage */]
            },
            {
                title: 'Appointment',
                icon: 'calendar',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_appointment_appointment__["a" /* AppointmentPage */]
            },
            {
                title: 'Profile',
                icon: 'person',
                component: __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]
            },
            {
                title: 'Contacts Info',
                icon: 'contacts',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */]
            },
            {
                title: 'Resources',
                icon: 'link',
                component: __WEBPACK_IMPORTED_MODULE_10__pages_resources_resources__["a" /* ResourcesPage */]
            }
        ];
    }
    MyApp.prototype.toggleSection = function (i) {
        this.pages[i].open = !this.pages[i].open;
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goToDashboard = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */]);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure to log out?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('logout cancelled');
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        _this.showLoader('Logging out...');
                        _this.auth.logout();
                        _this.loading.dismiss();
                        _this.presentToast('Log out successfully');
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    MyApp.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/app/app.html"*/'<ion-split-pane>\n\n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar color="primary">\n        <ion-title>PHR</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <div class="sidemenu">\n        <button class="font" menuClose ion-item  (click)="goToDashboard()">\n          <ion-icon item-left name="analytics"></ion-icon>\n          Dashboard\n        </button>\n        <!-- Two levels buttons -->\n        <ion-list *ngFor="let page of pages; let i = index" class="section" no-lines no-padding>\n          <button class="font" ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-open\': page.open, \'section-close\': !page.open}">\n            <ion-icon item-left name="arrow-forward" *ngIf="!page.open"></ion-icon>\n            <ion-icon item-left name="arrow-down" *ngIf="page.open"></ion-icon>\n            {{page.title}}\n          </button>\n          <ion-list *ngIf="page.children && page.open" class="section" no-padding>\n            <button class="font" menuClose ion-item *ngFor="let p of page.children" (click)="openPage(p)">\n              <ion-icon [name]="p.icon" item-left></ion-icon>\n              {{p.title}}\n            </button>\n          </ion-list>\n        </ion-list>\n        <!-- One level buttons -->\n        <ion-list class="section" *ngFor="let page of onelevelPages; let i = index" no-lines no-padding>\n          <button class="font" menuClose ion-item  (click)="openPage(page)">\n            <ion-icon item-left [name]=\'page.icon\'></ion-icon>\n            {{page.title}}\n          </button>\n        </ion-list>\n      </div>\n      <button class="logout font" menuClose ion-button icon-start clear (click)="logout()">\n        <ion-icon item-left name="log-out"></ion-icon>\n        Logout\n      </button>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content #myNav swipeBackEnabled="false" main></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_allergy_detail_allergy_detail__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_immunization_detail_immunization_detail__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_social_history_detail_social_history_detail__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_diagnostic_procedure_detail_diagnostic_procedure_detail__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_diagnostic_procedure_classification_diagnostic_procedure_classification__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TileComponent = (function () {
    function TileComponent(navCtrl, modalCtrl, dpcp) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dpcp = dpcp;
        this.color = ['darksalmon', 'rosybrown', 'slategrey'];
        console.log('Hello TileComponent Component');
    }
    TileComponent.prototype.getSub = function (id) {
        this.tiles = this.dpcp.getMenu(id);
    };
    TileComponent.prototype.goToRecord = function (tile) {
        if (tile.menu == "diagnostic-procedure") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_diagnostic_procedure_detail_diagnostic_procedure_detail__["a" /* DiagnosticProcedureDetailPage */], {
                'id': tile.id,
                'title': tile.name
            });
        }
        else if (tile.menu == "allergy") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_allergy_detail_allergy_detail__["a" /* AllergyDetailPage */], {
                'id': tile.id,
                'title': tile.name
            });
            modal.present();
        }
        else if (tile.menu == "immunization") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_immunization_detail_immunization_detail__["a" /* ImmunizationDetailPage */], {
                'id': tile.id,
                'title': tile.name
            });
            modal.present();
        }
        else if (tile.menu == "socialhistory") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_social_history_detail_social_history_detail__["a" /* SocialHistoryDetailPage */], {
                'id': tile.id,
                'title': tile.name
            });
            modal.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TileComponent.prototype, "tiles", void 0);
    TileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tile',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/tile/tile.html"*/'<!-- Generated template for the TileComponent component -->\n<ion-grid>\n  <ion-row>\n    <ion-col col-4 *ngFor="let tile of tiles; let i = index">\n      <ion-card class="fix-card" *ngIf="!tile.end" [ngStyle]="{\'background-color\': color[i%3]}" (click)="getSub(tile.id)">\n        <div class="item-size" color="primary">\n          <p class="break">{{tile.name}}</p>\n        </div>\n      </ion-card>\n      <ion-card class="fix-card" *ngIf="tile.end" [ngStyle]="{\'background-color\': color[i%3]}" (click)="goToRecord(tile)">\n        <div class="item-size" color="primary">\n          <p class="break">{{tile.name}}</p>\n        </div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/tile/tile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_diagnostic_procedure_classification_diagnostic_procedure_classification__["a" /* DiagnosticProcedureClassificationProvider */]])
    ], TileComponent);
    return TileComponent;
}());

//# sourceMappingURL=tile.js.map

/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_question_base__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DynamicFormQuestionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DynamicFormQuestionComponent = (function () {
    function DynamicFormQuestionComponent() {
        this.selectedOption = 'age';
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () {
            if (this.form.controls[this.question.key]) {
                return this.form.controls[this.question.key].valid;
            }
            else
                return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "controlUnderline", {
        get: function () {
            if (this.form.controls[this.question.key]) {
                return ((!this.form.controls[this.question.key].pristine) && (!this.isValid));
            }
            else
                return false;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormQuestionComponent.prototype.ngOnInit = function () {
        // dynamically change select option validators for immunization
        if (this.question.controlType == 'complex') {
            this.form.get('immunizationdate').setValidators(null);
            this.form.get('immunizationdate').updateValueAndValidity();
        }
        console.log(this.question);
    };
    // dynamically change select option validators for immunization
    DynamicFormQuestionComponent.prototype.selectedValue = function (ev) {
        console.log(ev);
        this.selectedOption = ev;
        if (this.selectedOption == 'age') {
            this.form.get('immunizationdate').setValidators(null);
            this.form.get('age').setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        }
        else {
            this.form.get('age').setValidators(null);
            this.form.get('immunizationdate').setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        }
        this.form.get('immunizationdate').updateValueAndValidity();
        this.form.get('age').updateValueAndValidity();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_question_base__["a" /* QuestionBase */])
    ], DynamicFormQuestionComponent.prototype, "question", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
    ], DynamicFormQuestionComponent.prototype, "form", void 0);
    DynamicFormQuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dynamic-form-question',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/dynamic-form-question/dynamic-form-question.html"*/'<!-- Generated template for the DynamicFormQuestionComponent component -->\n<div [formGroup]="form" [ngClass]="{\'fix-underline\': (question.controlType!=\'complex\')}" [ngClass]="{\'red-underline\': controlUnderline}">\n  <label class="width color" *ngIf="question.controlType!=\'complex\'" [attr.for]="question.key" [ngClass]="{\'full-width\': (question.controlType==\'textarea\' || question.controlType==\'range\')}">{{question.label}}\n    <span *ngIf="question.required" class="color-red">*</span>\n  </label>\n  <div [ngClass]="{\'width\': (question.controlType!=\'complex\' && question.controlType!=\'textarea\' && question.controlType!=\'range\')}" [ngSwitch]="question.controlType" [ngClass]="{\'full-width\': (question.controlType==\'textarea\' || question.controlType==\'range\')}">\n\n    <!-- textbox -->\n    <div class="flexlayout" *ngSwitchCase="\'textbox\'">\n      <input [formControlName]="question.key" [id]="question.key" [type]="question.type">\n      <div class="right-justify" *ngIf="question.unit.length!=0">{{question.unit}}</div>\n    </div>\n\n    <!-- select -->\n    <ion-select class="select-width left-pull" [id]="question.key" *ngSwitchCase="\'dropdown\'" [formControlName]="question.key"\n      [multiple]="question.multiple">\n      <ion-option *ngFor="let opt of question.options" [value]="opt.key">{{opt.value}}</ion-option>\n    </ion-select>\n\n    <!-- time -->\n    <ion-datetime class="left-pull" *ngSwitchCase="\'datetime\'" [formControlName]="question.key" [id]="question.key" [displayFormat]="question.display"></ion-datetime>\n\n    <!-- textarea -->\n    <textarea *ngSwitchCase="\'textarea\'" [formControlName]="question.key" [id]="question.key" [rows]="question.rows" [placeholder]="question.placeholder"\n      [readonly]="question.readonly"></textarea>\n\n    <!-- toggle button -->\n    <div *ngSwitchCase="\'toggle\'" style="text-align: right">\n      <ion-toggle style="display:inline-block; vertical-align: middle" [formControlName]="question.key" [id]="question.key" color="slate-grey"></ion-toggle>\n    </div>\n\n    <!-- range -->\n    <ion-range *ngSwitchCase="\'range\'" [formControlName]="question.key" [id]="question.key" [min]="question.min" [max]="question.max"\n      [step]="question.step" [snaps]="question.snaps" [pin]="question.pin" [color]="question.color">\n      <ion-icon range-left [name]="question.iconleft"></ion-icon>\n      <ion-icon range-right [name]="question.iconright"></ion-icon>\n    </ion-range>\n  \n    <!-- mixed form for immunization -->\n    <div *ngSwitchCase="\'complex\'">\n      <div class="position fix-underline">\n        <label class="width color" [attr.for]="question.selectkey">{{question.selectlabel}}\n          <span *ngIf="question.selectrequired" class="color-red">*</span>\n        </label>\n        <div class="width">\n          <ion-select class="select-width left-pull" [formControlName]="question.selectkey" [id]="question.selectkey" [multiple]="question.selectmultiple" [selectOptions]="question.selectOptions">\n            <ion-option *ngFor="let opt of question.options" [value]="opt.key" (ionSelect)="selectedValue($event)">{{opt.value}}</ion-option>\n          </ion-select>\n        </div>\n      </div>\n\n      <div class="position fix-underline" *ngIf="selectedOption==\'age\'">\n        <label class="width color" [attr.for]="question.inputkey">{{question.inputlabel}}\n          <span *ngIf="question.inputrequired" class="color-red">*</span>\n        </label>\n        <div class="width">\n          <input [formControlName]="question.inputkey" [id]="question.inputkey" [type]="question.type">\n        </div>\n      </div>\n\n      <div class="position fix-underline" *ngIf="selectedOption==\'immunizationdate\'">\n        <label class="width color" [attr.for]="question.datetimekey">{{question.datetimelabel}}\n          <span *ngIf="question.datetimerequired" class="color-red">*</span>\n        </label>\n        <div class="width">\n          <ion-datetime class="left-pull" [formControlName]="question.datetimekey" [id]="question.datetimekey" [displayFormat]="question.datetimedisplay"></ion-datetime>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <div *ngIf="(!form.controls[question.key].pristine) && (!isValid)">{{question.label}} is required</div> -->\n</div>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/dynamic-form-question/dynamic-form-question.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DynamicFormQuestionComponent);
    return DynamicFormQuestionComponent;
}());

//# sourceMappingURL=dynamic-form-question.js.map

/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_question_control_question_control__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DynamicFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DynamicFormComponent = (function () {
    function DynamicFormComponent(qcp, viewCtrl, toastCtrl) {
        this.qcp = qcp;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.questions = [];
        console.log('Hello DynamicFormComponent Component');
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.qcp.toFormGroup(this.questions);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        var payLoad = this.form.value;
        console.log(payLoad);
        this.toastCtrl.create({
            message: 'Successfully added',
            position: 'bottom',
            duration: 2000
        }).present();
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "questions", void 0);
    DynamicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dynamic-form',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/dynamic-form/dynamic-form.html"*/'<!-- Generated template for the DynamicFormComponent component -->\n<div>\n  <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n    <div *ngFor="let question of questions">\n      <ion-item>\n        <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n      </ion-item>\n    </div>\n\n    <div>\n      <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n    </div>\n\n  </form>\n</div>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/dynamic-form/dynamic-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());

//# sourceMappingURL=dynamic-form.js.map

/***/ }),

/***/ 982:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CalendarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CalendarComponent = (function () {
    function CalendarComponent() {
        this.options = {
            from: new Date(2000, 0, 1),
        };
        this.selectDate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.log('Hello CalendarComponent Component');
    }
    CalendarComponent.prototype.onChange = function ($event) {
        this.selectDate.emit($event.format());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "selectDate", void 0);
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'calendar',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/calendar/calendar.html"*/'<ion-calendar [(ngModel)]="date" (onChange)="onChange($event)" [options]="options" [type]="type" format="YYYY-MM-DD">\n</ion-calendar>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/calendar/calendar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());

//# sourceMappingURL=calendar.js.map

/***/ })

},[566]);
//# sourceMappingURL=main.js.map