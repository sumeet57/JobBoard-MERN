import Cookies from "js-cookie";
// const jwtDecode = (await import('jwt-decode')).default;
// import jwt from "jsonwebtoken";

function isTokenValid() {
  const token = Cookies.get("token") || Cookies.get("Rtoken"); // Get the token using js-cookie
  // console.log(token);
  if (!token) return false;
  try {
    if(token) return true;
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }
}

export { isTokenValid };
