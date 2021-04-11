// import React, { Component } from "react";

import React, { useState } from "react";

import Errors from './Errors';
import validate from './validator';

// export default class SignUp extends Component {
//     render() {

    function SignUp() {
        const [user, setUser] = useState({
            firstname: {value:'', required: true, minLength: 2, errors: []},
            lastname: {value:'', required: true, minLength: 2, errors: []},
            email:    {value:'', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errors: []},
            password:  {value:'', required: true, minLength: 8, pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, errors: []},
            repassword: {value:'', required: true, minLength: 8, pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, errors: []}
        });
    
        const onInputChange = (e) => {
            console.log(e.target.name, e.target.value);
    
            const newErrors = validate(
                e.target.name, 
                e.target.value, 
                user[e.target.name].required,
                user[e.target.name].minLength,
                user[e.target.name].pattern
            );
    
            setUser({
                ...user,
                [e.target.name]: {
                    ...user[e.target.name],
                    value: e.target.value,
                    errors: newErrors
                }
            });
        }
    
        const onSubmit = e => {
            e.preventDefault();
            
            for(const field in user){
                const newErrors = validate(
                    field,
                    user[field].value,
                    user[field].required,
                    user[field].minLength,
                    user[field].pattern
                );
    
                user[field] = {
                    ...user[field],
                    errors: newErrors
                };
            }
    
            setUser({...user});

            const rawUser = Object.keys(user)
                                .reduce((st, prop) => {
                                    st[prop] = user[prop].value;
                                    return st;
                                }, {});
    
            console.log(rawUser);
        }

        return (
            <form>
                <div className="container mt-4" style={{width:"500px", backgroundColor: "#1C8EF9"}}>
                <h3 className="text-center">Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name"
                    name="firstname"
                    defaultValue={user.firstname.value}
                    onBlur={onInputChange} />
                    <small>
                        {
                            <Errors errors={user.firstname.errors} />
                        }
                    </small>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name"
                    name="lastname"
                    defaultValue={user.lastname.value}
                    onBlur={onInputChange} />
                     <small>
                             {
                                 <Errors errors={user.lastname.errors} />
                             }
                             </small>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                    name="email"
                    defaultValue={user.email.value}
                    onBlur={onInputChange} />
                    <small>
                             {
                                 <Errors errors={user.email.errors} />
                             }
                             </small>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                    name="password"
                    defaultValue={user.password.value}
                    onBlur={onInputChange} />
                     <small>Password should contain at least eight characters, one number, one lowercase and one uppercase letter</small>
                             <small>
                             {
                                 <Errors errors={user.password.errors} />
                             }
                             </small>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./Login">Login</a>
                </p>
                </div>
            </form>
        );
    }


export default SignUp;