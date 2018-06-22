import { Injectable } from '@angular/core';

/*
  Generated class for the DiagnosticProcedureClassificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiagnosticProcedureClassificationProvider {

  constructor() { }

  getMenu(id: number): any[] {
    let arr = [];
    if (id === 0) {
      arr = [
        { id: 1, name: 'Cardiology', menu: 'diagnostic-procedure', end: false },
        { id: 2, name: 'Radiology', menu: 'diagnostic-procedure', end: false },
        { id: 3, name: 'Pulmonary Diagnostic Studies', menu: 'aldiagnostic-procedurelergy', end: false },
        { id: 4, name: 'Miscellaneous', menu: 'diagnostic-procedure', end: false }
      ];
    }
    else if (id === 1) {
      arr = [
        { id: 101, name: 'ECG', menu: 'diagnostic-procedure', end: true },
        { id: 102, name: 'Echocardiogram', menu: 'diagnostic-procedure', end: true },
        { id: 103, name: '24 Hour Holter', menu: 'aldiagnostic-procedurelergy', end: true },
        { id: 104, name: '30 Day Event Monitor', menu: 'diagnostic-procedure', end: true },
        { id: 105, name: 'Nuclear exercise stress test - Lexiscan', menu: 'diagnostic-procedure', end: true },
        { id: 106, name: 'Nuclear stress test - Adenosine', menu: 'aldiagnostic-procedurelergy', end: true },
        { id: 107, name: 'Stress echocardiogram', menu: 'diagnostic-procedure', end: true }
      ];
    }
    else if (id === 2) {
      arr = [
        { id: 200, name: 'Mammogram', menu: 'diagnostic-procedure', end: true },
        { id: 201, name: 'CXR', menu: 'diagnostic-procedure', end: true },
        { id: 202, name: 'AXR - KUB', menu: 'aldiagnostic-procedurelergy', end: true },
        { id: 203, name: 'AXR - 4 View', menu: 'diagnostic-procedure', end: true },
        { id: 204, name: 'X- Ray', menu: 'diagnostic-procedure', end: true },
        { id: 205, name: 'CT Scan', menu: 'aldiagnostic-procedurelergy', end: true },
        { id: 206, name: 'MRI', menu: 'diagnostic-procedure', end: true },
        { id: 207, name: 'Ultrasound', menu: 'diagnostic-procedure', end: true },
        { id: 208, name: 'Venous Dopplers', menu: 'diagnostic-procedure', end: true },
        { id: 209, name: 'Arterial Dopllers', menu: 'aldiagnostic-procedurelergy', end: true },
        { id: 210, name: 'Dexa Scan', menu: 'diagnostic-procedure', end: true },
        { id: 211, name: 'Bone Scan', menu: 'diagnostic-procedure', end: true },
        { id: 212, name: 'CT Angiogram', menu: 'aldiagnostic-procedurelergy', end: true }
      ];
    }
    else if (id === 3) {
      arr = [
        { id: 302, name: 'Sleep Study', menu: 'diagnostic-procedure', end: true },
        { id: 303, name: 'Pulmonary Function Tests', menu: 'diagnostic-procedure', end: true }
      ];
    }
    else if (id === 4) {
      arr = [
        { id: 401, name: "EMG and NCV's", menu: 'diagnostic-procedure', end: true },
        { id: 402, name: 'Other Tests', menu: 'diagnostic-procedure', end: true }
      ];
    }
    return arr;
  }
}
