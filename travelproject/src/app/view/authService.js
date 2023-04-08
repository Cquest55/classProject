const BASE_API_URL='http://localhost:8181/';
const AUTH_API = `${BASE_API_URL}/auth`;
const USER_API = `${BASE_API_URL}/user`;

function register(formData){
    return _post(`${AUTH_API}/register`);
}

function login(formData){
    return _post(`${AUTH_API}/login`);
}

function _post(url, data){
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/JSON'
        },
        body:JSON.stringify(data)
    });
}