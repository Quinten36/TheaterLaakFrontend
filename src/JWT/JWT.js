import jwt_decode from "jwt-decode";
import {getCookie} from './../Cookie/Cookie'

export function checkJWTToken() {
  var token = getCookie('userJWT');
  return token.length > 0 ? true : false;
}

export function GetJWTToken() {
  var token = checkJWTToken ? jwt_decode(getCookie('userJWT')) : 'No token found';
  return token;
}

export function GetJWTExp(token = null) {
  var offsetForUTC = 60*60*1;
  var date = token.token.length > 0 ? jwt_decode(token.token).exp : GetJWTToken().exp;
  return new Date((date+offsetForUTC) * 1000);
}

export function getJWTRole() {
  var output = checkJWTToken() ? GetJWTToken()['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] : 'No token available';
  return output;
}