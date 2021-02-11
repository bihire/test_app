import axios from 'axios';


BASE_URL = "https://mvind-test-app.herokuapp.com";

const ListUserApi = async () => {
    return await axios.get(`${BASE_URL}/api/auth/users`).catch();
}

const AddUserApi = async (data) => {
    const user = { ...data, password: "kigali123", confirmPassword: "kigali123" }
    return await axios.post(`${BASE_URL}/api/auth/signup`, user);
}

const updateUserApi = async (data, id) => {
    return await axios.put(`${BASE_URL}/api/auth/edit/${id}`, data);
}

export { ListUserApi, AddUserApi, updateUserApi };