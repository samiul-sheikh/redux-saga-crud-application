import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";

const UserInformation = () => {

    const { users } = useSelector(state => state.data);

    const { id } = useParams();

    const navigate = useNavigate();

    const singleUser = users.find((item) => item.id === Number(id));

    return (
        <div className="container">
            <h2> User Information</h2>
            <div className="row justify-content-center mt-3">
                <div className="col-md-6">
                    <Card className="align-items-center">
                        <Card.Body>
                            <div className='row justify-content-center text-center'>
                                <div className='col-sm-6'>ID :</div>
                                <div className='col-sm-6'>{singleUser.id}</div>
                                <div className='col-sm-6'>Name :</div>
                                <div className='col-sm-6'>{singleUser.name}</div>
                                <div className='col-sm-6'>E-mail :</div>
                                <div className='col-sm-6'>{singleUser.email}</div>
                                <div className='col-sm-6'>Phone :</div>
                                <div className='col-sm-6'>{singleUser.phone}</div>
                                <div className='col-sm-6'>Address :</div>
                                <div className='col-sm-6'>{singleUser.address}</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Button onClick={() => navigate("/")} variant="danger" className="mt-4">Go Back</Button>
                </div>
            </div>
        </div>
    );
};

export default UserInformation;