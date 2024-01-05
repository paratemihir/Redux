import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { insert } from '../userSlicer';

function Add_contact() {
    const { name } = useSelector((state) => state.user);
    const { age } = useSelector((state) => state.contact);
    const dispatch = useDispatch();
    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        message: ""
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
        if (formvalue.message == "" || formvalue.message == null) {
            toast.error('Message field required');
            return result = false;
        }
        return result;
    }
    const submithandle = async (e) => {
        e.preventDefault();
        if (validation()) {
            dispatch(insert(`http://localhost:3000/contact`, formvalue));
            setFormvalue({ ...formvalue, name: "", email: "", message: "" });
            toast.success('Success');
            return false;
        }
    }
    return (
        <div>
            <form className='container'>
                <div className="mb-3 mt-3">
                    <h6>{name} {age}</h6>
                    <label htmlFor="email">Name</label>
                    <input value={formvalue.name} onChange={changehandle} type="name" className="form-control" id="name" placeholder="Enter Name" name="name" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input value={formvalue.email} onChange={changehandle} type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="mb-3">
                    <label>Message</label>
                    <input value={formvalue.message} onChange={changehandle} type="text" className="form-control" placeholder="Enter message" name="message" />
                </div>
                <button onClick={submithandle} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Add_contact
