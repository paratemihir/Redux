import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectcontact } from '../contactSlicer';
import { deleteData } from '../userSlicer';
import { toast } from 'react-toastify';

function Mng_contact() {

  const dispatch = useDispatch();
  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    dispatch(selectcontact(`http://localhost:3000/contact`))
  }
  const deletContact = (id) => {
    dispatch(deleteData(`http://localhost:3000/contact/${id}`));
    toast.success('Delete')
    fetch();
  }

  const { allcontact } = useSelector((state) => state.contact);

  return (
    <div>
      <table className="table table-bordered container mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>message</th>
            <th className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allcontact.map((value) => {
              return (
                <tr>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.message}</td>
                  <td className='text-center'>
                    <button type="button" class="btn btn-secondary me-2">Edit</button>
                    <button onClick={() => deletContact(value.id)} type="button" class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Mng_contact
