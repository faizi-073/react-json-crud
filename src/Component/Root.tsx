import { useEffect } from 'react';

import { getUsers } from '../Service/api';
import { useDispatch } from 'react-redux';
import { initialProps } from '../structure/interface';
import { initialState } from '../structure/initialState';


const Root = () => {
    const dispatch  = useDispatch();
    useEffect(() => {
        const fetchData = async ()=>{
            const response = await getUsers() || initialState;
            dispatch({type:"SETDATA", payload: response.data as initialProps});
        }
        fetchData();
    }, []);

    return null;
}

export default Root;
