import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';

/*
  Generated class for the EncryptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EncryptionProvider {

  key: any;
  iv: any;
  exProperty: Object;

  constructor(public http: HttpClient) {
    this.key = "Mobile PHR app.";
    // this.key = CryptoJS.enc.Hex.parse("Mobile PHR app.");
    // this.iv = CryptoJS.enc.Hex.parse("213abf798605cceadad32b7dab01632f");
    this.exProperty = {
      "id": "id",
      "testid": "testid",
      "date": "date",
      "datetime": "datetime",
      "subtest": "subtest",
      "testname": "testname",
      "organ": "organ",
      "username": "username",
      "password": "password",
      "email": "email",
      "securityQuestion": "securityQuestion",
      "securityAnswer": "securityAnswer",
      "socialType": "socialType",
      "historytype": "historytype"
    };
  }

  traversal(payload: Object, mode: number) {
    this.helper(payload, mode);
  }

  helper(payload: Object, mode: number) {
    for (let property in payload) {
      if (this.exProperty[property] != undefined)
        continue;
      if (typeof payload[property] == "string" || typeof payload[property] == "boolean" || typeof payload[property] == "number") {
        payload[property] = payload[property].toString();
        if (mode == 0) {
          console.log(payload[property]);
          payload[property] = this.encrypt(payload[property]);
          console.log(payload[property]);
        } else {
          payload[property] = this.decrypt(payload[property]);
          if (payload[property] === "true" || payload[property] === "false") {
            payload[property] = (payload[property] === "true");
          }
        }
        continue;
      }
      this.helper(payload[property], mode);
    }
  }

  encrypt(text: any) {
    var encrypted = CryptoJS.AES.encrypt(text, this.key);
    return encrypted.toString();
    // encrypted = encrypted.toString();
  }

  decrypt(encrypted: Object) {
    var decrypted = CryptoJS.AES.decrypt(encrypted, this.key);
    return CryptoJS.enc.Utf8.stringify(decrypted);
    // decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
  }

}
