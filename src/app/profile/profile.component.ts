import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import * as firebase from "firebase";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  username = "";
  email = "";
  location = "";
  phone = "";
  date = "";

  noProfile = "No user profile data here 😂";

  constructor(private userservice: UserService) {}

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userData => {
      if (userData) {
        let users = this.userservice.get_profile();
        this.username = users.username;
        this.email = users.email;
        this.location = users.location;
        this.phone = users.phone;
        this.date = users.registrationData;
      } else {
        this.noProfile;
      }
    });
  }
}
