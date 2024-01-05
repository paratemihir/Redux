import React,{useState, useEffect} from 'react'
import { Link, redirect } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { useParams , useNavigate} from 'react-router-dom';

import { singlefetch, update} from '../userSlicer';

function Edit_data() {

  const {name}=useSelector((state)=>state.user);
  const dispatch=useDispatch();

  const [formvalue, setFormvalue] = useState({
      id: "",
      name: "",
      email: "",
      password: "",
      mobile: "",
  });

  const {id}=useParams();

  useEffect(()=>{
      fetch();  
  },[]);

  const { singleuser } = useSelector((state) => state.user);
  const fetch=()=>{
      dispatch(singlefetch(`http://localhost:3000/user/${id}`));
      setFormvalue(singleuser);
  }
  

  const changehandel = (e) => {
      setFormvalue({ ...formvalue,[e.target.name]: e.target.value });
      console.log(formvalue);
  }
  const validation = () => {
      var result = true;
      if (formvalue.name == "" || formvalue.name == null) {
          toast.error('Name Field is required !');
          return result = false;
      }
      if (formvalue.email == "" || formvalue.email == null) {
          toast.error('Email Field is required !');
          return result = false;
      }
      if (formvalue.password == "" || formvalue.password == null) {
          toast.error('Password Field is required !');
          return result = false;
      }
      if (formvalue.mobile == "" || formvalue.mobile == null) {
          toast.error('Mobile Field is required !');
          return result = false;
      }
      return result;
  }

  const redirect=useNavigate();
  const submithandel = async (e) => {
      e.preventDefault();
      if (validation()) {
          await dispatch(update(`http://localhost:3000/user/${id}`,formvalue));
          setFormvalue({ ...formvalue, name: "", email: "", mobile: "", password: ""});
          toast.success('Signup sucees');
          return redirect('/');
      }
  }

  return (
    <div>
      <div className="container mt-5">
                <div className="row">
                    <h1>{name}</h1>
                    <div className="col-sm-12">
                        <h2 className='text-center'>Edit Data</h2>
                        <Link to="/" className='btn btn-primary float-end mb-5'>
                            Back Home
                        </Link>
                        <br /><br />
                        <form method="post">
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Name:</label>
                                <input type="text" value={formvalue.name} onChange={changehandel} className="form-control" id="email" placeholder="Enter Name" name="name" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" value={formvalue.email} onChange={changehandel} className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Password:</label>
                                <input type="password" value={formvalue.password} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Mobile:</label>
                                <input type="number" value={formvalue.mobile} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter Mobile" name="mobile" />
                            </div>
                            
                            <button type="submit" onClick={submithandel} className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default Edit_data


