import React from "react";
import axios from "axios";
import Input from '../Input/Input'
import Label from '../Input/Label'
import Button from '../Btn/Button'
import sginupScheme from '../Register/Scheme'; 

import './style.css'
class Login extends React.Component 
{
state = {
    email: "",
    password: "",
    rePassword: "",
    isChecked: false,
    errors: {
      email: "",
      password: "",
      rePassword: "",
      isChecked: "",
    },
    error: "",
};

onsumbit = (e) => 
{
  e.preventDefault()
const {email,password} = this.state 
console.log("eman")
axios.post('https://fake-api-ahmed.herokuapp.com/v1/auth/login', {
           email:email,
           password:password
           
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


}

handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    let _value = value;
    _value = type === "checkbox" ? checked : value;
    this.setState({ [name]: _value }, () => {
      const { email, password, rePassword, isChecked } = this.state;

      sginupScheme(name)
        .validate(
          { email, password, rePassword, isChecked },
          { abortEarly: false }
        )
        .then(() => {
          this.setState((prevState) => {
            const { errors } = prevState;
            console.log(name);
            return {
              errors: { ...errors, [name]: "" },
            };
          });
        })
        .catch((err) => {
          this.setState((prevState) => {
            const errors = {};
            err.inner.forEach(({ message, params }) => {
              errors[params.path] = message;
            });

            return { errors: { ...prevState.errors, [name]: errors[name] } };
          });
        });
    });
  };

  validateForm = (data) => {
    sginupScheme()
      .validate(data, { abortEarly: false })
      .then(() => {
        console.log("Register successfully");
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach(({ message, params }) => {
          errors[params.path] = message;
        });
        this.setState({ errors });
      });
     
  };

  render() {
    const {
      email,
      password,
      isChecked,
      errors,
      error,
    } = this.state;
    return (
      
        <div className="all-form">
          <form className="form" >
            <Label   htmlFor="email" children="email"  className="login-label" />
            <Input
              children="email"
              className="login-label"
              htmlFor="email"
              type="text"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={this.handleChange}
              error={errors.email}
              className={`register-input ${errors.email && "error"}`}
            />
               <Label   htmlFor="password" children="password"  className="password" />
            <Input
              children="password"
              className="login-label"
              htmlFor="password"
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
              error={errors.password}
              className={`register-input ${errors.password && "error"}`}
            />
             <label
                htmlFor="checkbox"
                className={errors.isChecked && "error-checkbox"}
              >
                I agree to terms & conditions
              </label>
           
            {error && <span style={{ color: "red" }}>{error}</span>}
            <Button
              type="submit"
              name="submit"
              id="submit"
              className="submit"
              Button
              onsumbit={this.onsumbit}
            > Log In </Button>
          </form>
        </div>
      
    );
  }
}
export default Login