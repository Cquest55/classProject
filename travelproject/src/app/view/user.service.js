const  TASK_API = `http://localhost:8181/users`;

const getUsers = () => _get(TASK_API);

module.exports = getUsers;