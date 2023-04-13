import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './header.css';
import axios from 'axios';
import { signIn } from '../../features/user';
import { useDispatch } from 'react-redux';
import Loading from '../loading';

function LoginNav({ setLogin }) {
  const path="http://localhost:5000";
  const dispatch = useDispatch();
const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
    // console.log(inputs);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    console.log(inputs);
    axios.post(`${path}/user/`, inputs)
      .then((response) => {
        // console.log('response',response);
        if (response.data[0]['password'] === inputs['password']) {
          dispatch(signIn(response.data[0]));
          alert("Logged in Successfully!");
          setLogin(true);
          // console.log(response.data,response.data[0])
        }
        else { alert('Wrong password!!') }
        setLoading(false);
        navigate('/')
      })
      .catch(error => {
        alert("Internall error occured try again!");
        setLoading(false);
      });
  }

  return (
    <>
    {
      loading?
      <Loading/>
      :
      <nav className="navbar navbar-expand-lg navbar-light justify-content-end">
      <div className="container-fluid mx-auto" >
        <button id="buttonLogin" className="navbar-toggler nav-item btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navSup" aria-controls="navSup" aria-expanded="true" aria-label="Toggle navigation">
          Log in
        </button>
        <div className="collapse navbar-collapse" id="navSup">
          <form className="row g-3" style={{ justifyContent: "right", paddingRight: "10px" }} onSubmit={handleSubmit}>
            <div className="col-md-3">
              <input type="email" className="form-control" placeholder="Email"
                name='email'
                value={inputs['email'] || ''}
                onChange={handleChange} required />
            </div>

            <div className="col-md-3">
              <input type="password" className="form-control" placeholder="Password"
                name='password'
                value={inputs['password'] || ''}
                onChange={handleChange} required />
            </div>
            <div className="col-auto">

              <button type="submit" className="btn btn-primary mb-3 text-capitalize">
                log in
              </button>
            </div>
          </form>
          <div className="col-auto">
            <Link to="/signUp" >
              <span className="btn btn-primary mb-3 text-capitalize">
                register
              </span></Link>
          </div>
        </div>
      </div>
    </nav>
    }
    </>
  );
}

export default LoginNav