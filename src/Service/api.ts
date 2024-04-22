import axios from 'axios';
import userData from '../structure/interface';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';


export const getUsers = async (id?: string) => {
    id = id || '';
    try {
        return await axios.get(`${usersUrl}/${id}`);
    } catch (error) {
        console.log('Error while calling getUsers api ', error);
    }
}

export const addUser = async (user: userData) => {
    return await axios.post(`${usersUrl}`, user);
}

export const deleteUser = async (id: userData) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id: string, user: userData) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}