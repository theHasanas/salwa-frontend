//data
import cookies from "../cookies";
//from mobx
import { makeObservable, observable } from "mobx";

class CookieStore {
  cookies = cookies;

  constructor() {
    makeObservable(this, {
      cookies: observable,
    });
  }
}

const cookieStore = new CookieStore();

export default cookieStore;
