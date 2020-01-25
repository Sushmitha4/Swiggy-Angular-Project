import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  set(getDataFromDatabase) {
    localStorage.setItem("user", JSON.stringify(getDataFromDatabase));
  }
  get_profile() {
    let users = localStorage.getItem("user");
    return JSON.parse(users);
  }
  destroy() {
    localStorage.removeItem("user");
  }
}
