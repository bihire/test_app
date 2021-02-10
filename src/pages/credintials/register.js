// import logo from './logo.svg';
import React, { useState } from 'react';
import '../../App.css';
import './form.scss'
import imgSVG from '../../assets/add.svg';
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Register() {
    return (
        <div class="container">

            <div class="card">
                
                <div class="card-form">
                    {/* <div class="logo">
            <div class="logo_text">
              logo
            </div>
           </div> */}
                    <div class="welcome-info">
                        {/* <p class="forget back-to-login"><a href="\#" onClick={changeForm}> <FaChevronLeft class="submit_icon" /> Login</a></p> */}
                        <p class="welcome">Let's Add a new user</p>
                        <img src={imgSVG} alt="welcome image" height="100" />
                    </div>

                    <div class="slide signIn">
                        <div class="fields signInInputs">
                            
                            <InputField className="signup_field" type="text" name="first_name" id="first_name" placeholder="first name" />
                            <InputField className="signup_field" type="text" name="last_name" id="last_name" placeholder="last name" />
                            <InputField className="signup_field" type="email" name="email" id="email" placeholder="email" />
                            <InputField className="signup_field" type="password" name="password" id="password" placeholder="password" />
                            <InputField className="signup_field" type="text" name="phone" id="phone" placeholder="phone number" />
                        </div>
                        
                        <Button value='Add now' icon={<FaChevronRight class="submit_icon" />} />

                    </div>


                </div>

            </div>


        </div>



    );
}

export default Register;