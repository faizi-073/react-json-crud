import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initialProps } from '../structure/interface';

const initialValue = {
    id:'',
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const { id } = useParams();
    const dispatch = useDispatch();
    const userData = useSelector((state: initialProps) => state.data);
    const navigate = useNavigate();


    const loadUserDetails = async() => {
        // const response = await getUsers(id);
        const index = userData.findIndex((user)=> user.id==id);
        setUser(userData[index]);
    }
    useEffect(() => {
        loadUserDetails();
    }, []);


    const editUserDetails = async() => {
        // await editUser(id, user);
        dispatch({type:"EDIT", payload: user})
        navigate('/');
    }

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div className='flex justify-center'>

        <FormGroup className='flex gap-6 w-6/12 pt-16'>
            <Typography variant="h4" className='bg-blue-200 text-blue-600 rounded-lg p-3 text-center'>Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </FormGroup>
        </div>
    )
}

export default EditUser;