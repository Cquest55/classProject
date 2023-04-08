const BASE_API_URL='http://localhost:8181/';
const AUTH_API = `${BASE_API_URL}/auth`;
const USER_API = `${BASE_API_URL}/user`;

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

const doLogin = function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    login({
        email:email,
        password:password
    }).then(function (res){
        window.location.href = '/';
    });

};

const doRegister = function(){
    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const lastName= document.getElementById('lastName').value;
    const age= document.getElementById('age').value;
    const password= document.getElementById('password').value;

    register({
        email:email,
        firstName:firstName,
        lastName:lastName,
        age:age,
        password:password
    }).then(function (res){
        window.location.href = '/';
    })
}