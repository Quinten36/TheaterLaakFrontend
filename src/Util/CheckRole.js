import { checkJWTToken, getJWTRole } from "../JWT/JWT";

export default function CheckAdmin() {
    if (checkJWTToken()) {
        var role = getJWTRole();
        console.log("Role:",role)
        if (!role.includes('Admin'))
            window.location.href = '/';
            return false
    }
    window.location.href = '/';
    return true
}
