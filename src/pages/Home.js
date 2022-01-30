import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersStart, deleteUserStart } from '../redux/actions';
import { Table, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(loadUsersStart());
    }, []);

    // delete user
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you wanted to delete this user?")) {
            dispatch(deleteUserStart(id));
            toast.success("Delete User Successfully");
        }
    };

    return (
        <div className="container">

            {loading && <div className="mb-3">
                <Spinner animation="grow" variant="info" />
            </div>}

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {users && users.map((item, index) => (
                    <tbody key={index}>
                        <tr>
                            <td scope="row">{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td>
                                <Button onClick={() => handleDelete(item.id)} variant="danger">Delete</Button>{' '}
                                <Link to={`/editUser/${item.id}`}>
                                    <Button variant="primary">Edit</Button>
                                </Link>{' '}
                                <Link to={`/userInfo/${item.id}`}>
                                    <Button variant="info">View</Button>{' '}
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default Home;