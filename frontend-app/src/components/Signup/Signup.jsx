import React, { useState } from 'react';
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const history = useNavigate();
    const [Inputs, setInputs ] = useState({
        email: "",
        username: "",
        password: "",
    });

    const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name]: value });
    }

    const submit = async (e) => {
        e.preventDefault(Inputs);
        await axios.post("http://localhost:1000/api/v1/register", Inputs).then((response) =>{

            if(response.data.message === "User Already Exists"){
                alert(response.data.message);
            }
            else{
                alert(response.data.message)
                setInputs({
                    email: "",
                    username: "",
                    password: "",
                });
                history("/signin");
            }
            
        })
    }

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
                                onChange = {change}
                                value = {Inputs.email}
                            />
                            <input
                                className='p-2 my-2 input-signup'
                                type='username'
                                name='username'
                                placeholder='Enter your Username'
                                onChange = {change}
                                value = {Inputs.username}
                            /><input
                                className='p-2 my-2 input-signup'
                                type='password'
                                name='password'
                                placeholder='Enter your Password'
                                onChange = {change}
                                value = {Inputs.password}
                            />
                            <button className='btn-signup p-2' onClick={submit}> SignUp </button>
                        </div>
                    </div>
                    <div className='col-lg-4  col-left d-flex justify-content-center align-items-center column'>
                        <h1 className='text-center sign-up-heading'>
                            Sign UP
                        </h1>
                    </div>
            </div>
        </div>
    </div>
)
}

export default Signup;