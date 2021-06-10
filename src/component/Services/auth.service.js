import axios from "axios";

const API_URL = "https://localhost:44340/api/AccountAPi/";

class AuthService {
  login(UserName, Password) {
    return axios.post(API_URL+"Login",{UserName,Password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(response.data.Token);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }


  register(UserName, FirstName, LastName,Email,Password,PhoneNumber) {
    return axios.post(API_URL +"Regester", {
      UserName,
      Email,
       Password,
       FirstName,
       LastName,
       PhoneNumber
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();

