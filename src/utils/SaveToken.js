import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";

const SaveToken = (token) => {
    const cookies = new Cookies();
    let temp = String(token);
    let start = temp.indexOf(":") + 1;
    let end = temp.lastIndexOf('"');

    const ActualToken = temp.slice(start, end);

    const decoded = jwtDecode(ActualToken);
    cookies.set("JWT", ActualToken, {
        expires: new Date(decoded.exp * 1000),
    });
}

export default SaveToken;