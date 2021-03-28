import { makeAutoObservable } from "mobx";
import axios from "axios";
import jwtDecode from "jwt-decode";

let instance = axios.create({
  baseURL: "http://localhost:8000/",
});

class AuthStore {
  user = null;

  signUpUsernameCheck = {
    message: "",
    available: true,
    loading: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  secret = async () => {
    try {
      const response = await instance.get("/secret");

      alert(response.data.secret);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signup = async (userData) => {
    try {
      const response = await instance.post("/signup", userData);

      const token = response.data.token;

      this.user = jwtDecode(token);

      this.checkForToken();

      console.log("user = > ", this.user);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const response = await instance.post("/signin", userData);
      console.log(response.data.token);

      const token = response.data.token;

      this.user = jwtDecode(token);

      localStorage.setItem("userToken", token);
      localStorage.setItem("sally", "i don't know");

      this.checkForToken();

      console.log("user token => ", this.user);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  checkForToken = () => {
    const token = localStorage.getItem("userToken");
    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp > Date.now()) {
        this.user = decodedToken;

        instance = axios.create({
          baseURL: "http://localhost:8000/",
          headers: { Authorization: "Bearer " + token },
        });
      } else {
        localStorage.removeItem("userToken");
      }
    }
  };

  checkUsername = async (username) => {
    try {
      if (!username) return;

      console.log(username);

      this.checkUsername.loading = true;

      const response = await axios.post("http://localhost:8000/checkUsername", {
        username,
      });

      this.checkUsername.loading = false;
      this.checkUsername.available = response.data.available;

      if (response.data.available) {
        this.checkUsername.message = "";
      } else {
        this.checkUsername.message = "Username is already taken";
      }
    } catch (error) {
      console.log("AuthStore -> checkusername -> error", error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
