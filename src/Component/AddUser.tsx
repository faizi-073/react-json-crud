import  { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import userData from '../structure/interface';
// import { addUser } from '../Service/api';

const initialValue:userData = {
    id:'',
    name: '',
    username: '',
    email: '',
    phone: ''
}


const AddUser = () => {
    const [user, setUser] = useState<userData>(initialValue);
    const { name, username, email, phone } = user;
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        // await addUser(user);
        const uuid = uuidv4();
        user.id = uuid;
        dispatch({type:'ADD', payload: user})
        navigate('/');
    }

    return (
        <div className='flex justify-center'>
            <FormGroup className='flex gap-6 w-6/12 pt-16'>
                <Typography variant="h4" className='bg-blue-200 text-blue-600 rounded-lg p-3 text-center'>Add User</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Username</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
                </FormControl>
                <FormControl>
                    <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
                </FormControl>
            </FormGroup>
        </div>
        
    )
}

export default AddUser;