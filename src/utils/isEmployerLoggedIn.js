export default function isEmployerLoggedIn() {
    const token = localStorage.getItem("employer:token");
    if (token) {
      return true;
    } else {
      return false;
    }
  }
  