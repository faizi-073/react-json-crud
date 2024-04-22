import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userData, {initialProps} from '../structure/interface';



const AllUsers = () => {
    const [users, setUsers] = useState<userData[]>();
    const dispatch = useDispatch();
    const userData = useSelector((state: initialProps) => state.data);
    useEffect(() => {
        setUsers(userData);
    }, [userData]);

    const deleteUserData = async (user: userData) => {
        dispatch({type: "DELETE", payload: user})
        // await deleteUser(user.id);
    }


    return (
        <div className='items-center my-12 flex justify-center flex-col'>
            <div className='w-9/12'>
                <div  className='py-10 text-end px-12'>
                    <Button color="primary" variant="contained" component={Link} to={`/add`}>Add User</Button>
                </div>
                <Table>
                    <TableHead>
                        <TableRow className='table--head'>
                            <TableCell>Name</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((user) => (
                            <TableRow key={user.id} className='table--row'>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                    <Button color="secondary" variant="contained" onClick={() => deleteUserData(user)}>Delete</Button> 
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>            
            </div>
        </div>
        
    )
}

export default AllUsers;
