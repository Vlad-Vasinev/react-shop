
const http = "http://127.0.0.1:8000/api/v1/";

let changeToken = async () => {
    console.log("change token");

    let refreshVar = localStorage.getItem("refresh");

    let refresh = {
        refresh: refreshVar
    }

    let response = await fetch(`${http}token/refresh/`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(refresh),
    })

    let data = await response.json();
    localStorage.setItem("access", data.access);
    console.log(data.access);

}

let tokenFunc = async () => {

    let accessBearer = localStorage.getItem("access");

    let response = await fetch(`${http}user/all/`, {
        method: 'GET',
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${accessBearer}`,
        },
    })

    let data = await response.json()

}

export { tokenFunc }; 
export default changeToken;