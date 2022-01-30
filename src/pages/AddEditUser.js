import React from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUserStart } from '../redux/actions';

const AddEditUser = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // const { id } = useParams();

    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
        },

        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Your Name"),
            email: Yup.string().required("Please Enter Your Email"),
            phone: Yup.string().required("Please Enter Your Phone Number"),
            address: Yup.string().required("Please Enter Your Address"),
        }),

        onSubmit: (values) => {
            console.log("values", values);
            dispatch(createUserStart(values));
            // toast.success("User Added Successfully");
            setTimeout(() => navigate("/"), 500);
        }

    });

    return (
        <div className="container">
            <h2>Add or Edit user</h2>
            <div className="row justify-content-center mt-3">
                <div className="col-md-6">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                        }}
                    >

                        <div className="mb-3">
                            <label htmlFor="validationName" className="form-label">Name</label>
                            <input
                                name="name"
                                placeholder="Enter your name"
                                type="text"
                                className="form-control"
                                id="validationName"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.name || ""}
                                invalid={
                                    validation.touched.name && validation.errors.name ? true : false
                                }
                            />
                            {validation.touched.name && validation.errors.name ? (
                                <p type="invalid" className="text-danger">{validation.errors.name}</p>
                            ) : null}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="validationEmail" className="form-label">Email</label>
                            <input
                                name="email"
                                type="text"
                                className="form-control"
                                id="validationEmail"
                                placeholder="Enter your email"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.email || ""}
                                invalid={
                                    validation.touched.email && validation.errors.email ? true : false
                                }
                            />
                            {validation.touched.email && validation.errors.email ? (
                                <p type="invalid" className="text-danger">{validation.errors.email}</p>
                            ) : null}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="validationPhone" className="form-label">Phone</label>
                            <input
                                name="phone"
                                type="text"
                                className="form-control"
                                id="validationPhone"
                                placeholder="Enter your phone number"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.phone || ""}
                                invalid={
                                    validation.touched.phone && validation.errors.phone ? true : false
                                }
                            />
                            {validation.touched.phone && validation.errors.phone ? (
                                <p type="invalid" className="text-danger">{validation.errors.phone}</p>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="validationAddress" className="form-label">Address</label>
                            <input
                                name="address"
                                type="text"
                                className="form-control"
                                id="validationAddress"
                                placeholder="Enter your address"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.address || ""}
                                invalid={
                                    validation.touched.address && validation.errors.address ? true : false
                                }
                            />
                            {validation.touched.address && validation.errors.address ? (
                                <p type="invalid" className="text-danger">{validation.errors.address}</p>
                            ) : null}
                        </div>
                        <button type="submit" className="btn btn-success">Add User</button> {' '}
                        <button onClick={() => navigate("/")} type="button" class="btn btn-danger"> Go Back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEditUser;