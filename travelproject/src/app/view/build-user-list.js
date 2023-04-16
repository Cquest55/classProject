import {TASK_API} from "./frontendLogic";


const getUser = () => _get(TASK_API,{

});

(async () => {
    const users = await getUser();
    console.log(users);

    if(users.length){
        const div = document.getElementById('users');
        const nextDiv = div.childNodes[1];
        const ul = document.createElement('ul');
        div.replaceChild(ul, nextDiv);

        users.map((user) => {
            const li = document.createElement('li');
            li.className = 'userItem';
            const block = document.createElement('div');
            block.className = 'userBlock';

            const firstNameSpan = document.createElement('span');
            firstNameSpan.className = 'userName';
            firstNameSpan.innerText = user.first_name;

            const lastNameSpan = document.createElement('span');
            lastNameSpan.className = 'userName';
            lastNameSpan.innerText = ' ' + user.last_name;

            block.appendChild(firstNameSpan);
            block.appendChild(lastNameSpan);

            li.appendChild(block);
            ul.appendChild(li);
        });

    }
})();