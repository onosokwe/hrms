export default function isLoggedIn() {
  const token = localStorage.getItem("kloka:token:data");
  const role = localStorage.getItem("kloka:role"); 
  const type = localStorage.getItem("kloka:type"); 
  if (token && role && type) {
    return true;
  } else {
    return false;
  }
}
