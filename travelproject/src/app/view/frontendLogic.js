const AUTH_API = `http://localhost:8181/auth`;
const USER_API = `http://localhost:8181//user`;
export let  TASK_API = '';
function login(formData){
    return _post(`${AUTH_API}/login`,formData);
}

const doLogin = function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    login({
        email:email,
        password:password
    }).then(function (res){
        TASK_API = `http://localhost:8181/users/`+res.id;
        window.location.href = '/home';
    });

};

const logout = () => {
    clearStorage('isAuth');
    clearStorage('access_token');
    clearStorage('refresh_token');
}

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
        window.location.href = '/index';
    })
}