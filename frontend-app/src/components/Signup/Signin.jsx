import React from 'react';
import "./Signup.css";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';

const Signin = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email: "", 
        password: "",
    });

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({...Inputs, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        await axios
            .post("http://localhost:1000/api/v1/signin", Inputs)
            .then((response) => {
                sessionStorage.setItem("id", response.data.others._id);
                dispatch(authActions.login());
                console.log(response.data.others._id);
                history("/todo");
            });
    };



  return (
    <div className='signup'>
        <div className='container'>
            <div className='row'>
                    <div className='col-lg-8 d-flex justify-content-center align-items-center column' >
                        <div className='d-flex flex-column w-100 p-5 '> 
                            <input
                                className='p-2 my-2 input-signup'
                                type='email'
                                name='email'
                                placeholder='Enter your Email'
                                value={Inputs.email}
                                onChange={change}
                            />
                            <input
                                className='p-2 my-2 input-signup'
                                type='password'
                                name='password'
                                placeholder='Enter your Password'
                                value={Inputs.password}
                                onChange={change}
                            />
                            <button className='btn-signup p-2' onClick={submit}> Sign In </button>
                        </div>
                    </div>
                    <div className='col-lg-4  col-left d-flex justify-content-center align-items-center column'>
                        <h1 className='text-center sign-up-heading'>
                            Sign In
                        </h1>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Signin;