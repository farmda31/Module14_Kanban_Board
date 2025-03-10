import { JwtPayload, jwtDecode } from "jwt-decode";

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token); // Decode the token and return the payload
    }
    return null; // Return null if no token is present
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // Check if the token exists and is not expired
  }

  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    const decoded: JwtPayload = jwtDecode<JwtPayload>(token);
    if (decoded.exp) {
      return decoded.exp * 1000 < Date.now(); // Compare expiration time with current time
    }
    return true; // If no exp claim, consider it expired
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem("id_token") || ""; // Retrieve the token from localStorage
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem("id_token", idToken); // Set the token in localStorage
    window.location.assign("/"); // Redirect to the home page
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem("id_token"); // Remove the token from localStorage
    window.location.assign("/login"); // Redirect to the login page
  }
}

export default new AuthService();
