let loggedInUserId;

const AUTH_API = `http://localhost:8181/auth`;
const USER_API = `http://localhost:8181//user`;
function login(formData){
    return _post(`${AUTH_API}/login`,formData);
}



const getUser = (id) => {
    return _get(`http://localhost:8181/users/` + id);
};

const doLogin = function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    login({
        email:email,
        password:password
    }).then(function (res){
        loggedInUserId = res.id;
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

exports = getUser, loggedInUserId;