import axios from 'axios';

export const loadUsersApi = async () =>
    await axios.get("http://localhost:8000/users");

export const createUserApi = async (user) =>
    await axios.post("http://localhost:8000/users", user);
