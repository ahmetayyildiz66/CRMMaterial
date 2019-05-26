import * as firebase from "firebase";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  signupUser(mail: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(mail, password)
      .then(success => console.log(success))
      .catch(error => console.log(error));
  }

  signinUser(mail: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(mail, password)
      .then(success => console.log(success))
      .catch(error => console.log(error));
  }
}
