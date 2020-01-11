import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "swiggyApp";

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyA--WC-RbtA4g8XwiaNYbnUoycvgxI-ftE",
      authDomain: "swiggy-af853.firebaseapp.com",
      databaseURL: "https://swiggy-af853.firebaseio.com",
      projectId: "swiggy-af853",
      storageBucket: "swiggy-af853.appspot.com",
      messagingSenderId: "1093002151603",
      appId: "1:1093002151603:web:e2978e3263c01e213892c6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
