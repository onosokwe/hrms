export default function isRestaurantLoggedIn() {
    const token = localStorage.getItem("restaurant:token");
    if (token) {
      return true;
    } else {
      return false;
    }
  }
  