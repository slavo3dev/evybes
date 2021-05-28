import { Layout } from "../../components";
import {useState} from "react";
import axios from "axios"
import { showErrorMessage, showSuccessMessage } from "../../helpers"

export default function signUp() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
    btnText: "Sign up",
  });

  const { name, email, password, error, success, btnText } = userInfo;

  const handleChange = (inputValue) => (e) => {
    setUserInfo({
      ...userInfo,
      [inputValue]: e.target.value,
      error: "",
      success: "",
      btnText: "Login",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({
      ...userInfo,
      btnText: "Registering..."
    })
    axios.post(`http://localhost:8080/api/register`, {
      name: name,
      email: email,
      password: password
    })
      .then(response => {
        setUserInfo({
          ...userInfo, 
          name: "",
          email: "",
          password: "",
          btnText: "Submitted",
          success: response.data.message
        })
      })
      .catch(error => {
        setUserInfo({
          ...userInfo,
          btnText: "Login",
          error: error.response.data.message
        })
      })
  };

  const signUpForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            value={name}
            onChange={handleChange("name")}
            type="text"
            className="form-control"
            placeholder="Add your Full Name"></input>
        </div>
        <div className="form-group">
          <input
            value={email}
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Add your email (exmple@domain.com)"></input>
        </div>
        <div className="form-group">
          <input
            value={password}
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="Setup your password"></input>
        </div>
        <div className="form-group">
          <button className="btn btn-outline-warning">{btnText}</button>
        </div>
      </form>
    );
  };

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <h1>Sign Up</h1>
        <br />
        {success && showSuccessMessage(success)}
        {error && showErrorMessage(error)}
        {signUpForm()}
      </div>
    </Layout>
  );
}
