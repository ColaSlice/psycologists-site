import Cookies from "universal-cookie";

function ReadUserData() {
    const cookies = new Cookies();
    const allUserData = atob((String(cookies.get("JWT")).split('.')[1]))
    return Object.values(JSON.parse(allUserData));
    
}

export default ReadUserData;