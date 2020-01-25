import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import * as firebase from "firebase";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  logo = "../../assets/images/swiggylogo.svg";
  constructor(private userservice: UserService) {}

  ngOnInit() {}

  logout() {
    this.userservice.destroy();
    firebase.auth().signOut();
  }
}
