import Cookies from "universal-cookie";

function ReadUserData() {
    const cookies = new Cookies();
    const allUserData = atob((String(cookies.get("JWT")).split('.')[1]))
    const data = Object.values(JSON.parse(allUserData));
    return data;
}

export default ReadUserData;