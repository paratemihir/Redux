import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { insert } from '../userSlicer';


function AddData() {

    const { name } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: ""
    })
    const changehandle = (e) => {
        setFormvalue({
            ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value
        });
    }
    const validation = () => {
        var result = true;
        if (formvalue.name == "" || formvalue.name == null) {
            toast.error('Name field required');
            return result = false;
        }
        if (formvalue.email == "" || formvalue.email == null) {
            toast.error('email field required');
            return result = false;
        }
        if (formvalue.password == "" || formvalue.password == null) {
            toast.error('Password field required');
            return result = false;
        }
        if (formvalue.mobile == "" || formvalue.mobile == null) {
            toast.error('Mobile field required');
            return result = false;
        }
        return result;
    }
    const submithandle = async (e) => {
        e.preventDefault();
        if (validation()) {
            dispatch(insert(`http://localhost:3000/user`, formvalue));
            setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "" });
            toast.success('Success');
            return false;
        }
    }
    return (
        <>
            <div className="d-grid gap-2 col-2 mx-auto mt-3">
                <Link to="/Home" className="btn btn-dark" type="button">⬅️ Back to Home</Link>
            </div>


            <form className='container'>
                <div className="mb-3 mt-3">
                    <label htmlFor="Name">Name</label>
                    <input value={formvalue.name} onChange={changehandle} type="name" className="form-control" id="name" placeholder="Enter Name" name="name" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input value={formvalue.email} onChange={changehandle} type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd">Password:</label>
                    <input value={formvalue.password} onChange={changehandle} type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile">Mobile</label>
                    <input value={formvalue.mobile} onChange={changehandle} type="text" className="form-control" id="number" placeholder="Enter password" name="mobile" />
                </div>
                <button type="submit" onClick={submithandle} className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default AddData
