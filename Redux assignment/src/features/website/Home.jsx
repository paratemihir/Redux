import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteData, selectuser } from '../userSlicer';
import { toast } from 'react-toastify';

function Home() {

    const redirect = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        fetch();
    }, []);


    const fetch = () => {
        dispatch(selectuser(`http://localhost:3000/user`));
    }
    const deleteuser = (id) => {
        dispatch(deleteData(`http://localhost:3000/user/${id}`));
        toast.success('Delete')
        fetch();
    }


    const { alluser } = useSelector((state) => state.user);

    return (
        <>
            <div>
                <div className="d-grid gap-2 col-2 mx-auto mt-4">
                    <Link to="/Add_data" className="btn btn-dark" type="button">Add Data ➡️</Link>
                </div>


                <table className="table table-bordered container mt-5">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Mobile No.</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alluser.map((value) => {
                                return (
                                    <tr>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.password}</td>
                                        <td>{value.mobile}</td>
                                        <td className='text-center'>
                                            <button type="button" onClick={()=>{redirect('/edit_data/' + value.id)}} class="btn btn-secondary me-2">Edit</button>
                                            <button type="button" onClick={() => deleteuser(value.id)} class="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Home
