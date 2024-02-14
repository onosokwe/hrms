export default function isLoggedIn() {
  const token = localStorage.getItem("kracada:token");
  if (token) {
    return true;
  } else {
    return false;
  }
}
