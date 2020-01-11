import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import * as firebase from "firebase";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit() {}

  login(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userData => {
        if (userData.user.emailVerified) {
          let message = `${email} has been successfully verified😄`;
          this.toastr.success(message);
          this.router.navigate([""]);
        } else {
          let message = `${email} is not yet verified..😡`;
          this.toastr.error(message);
          firebase.auth().signOut();
        }
      })
      .catch(err => {
        this.toastr.error(err.message);
      });
  }
}
