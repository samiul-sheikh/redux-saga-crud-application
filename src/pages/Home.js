import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersStart } from '../redux/actions';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsersStart());
    }, []);

    return (
        <div>
            <h2>Homepage</h2>
        </div>
    );
};

export default Home;