import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { AppDispatch, RootState } from "../features/users/reducerConfig";
import { loginUser } from "../features/users/usersSlice/authSlice";
function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const [formDataLogin, setFormDataLogin] = useState({
    email: "",
    password: ""
  })
  const {email, password} = formDataLogin
  const { user, status, error } = useSelector((state: RootState) => state.auth)
  const onChange = (e: React.SyntheticEvent) => {
    setFormDataLogin((prevState) => ({
      ...prevState,
      [(e.target as HTMLTextAreaElement).name]: (e.target as HTMLTextAreaElement).value,
    }))
  }
  // console.log(formDataLogin);
  const handleSubmitForm = (e:React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const dataUser = {email, password}
      dispatch(loginUser(dataUser))
    } catch (error) {
      console.log(error)
    }
  }

if (status ==="success" && !!Object.keys(user).length) {
  navigate("/")
} 
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          {status === "loading" && <Loading />}
          {status === "fail" ? <Error /> : (
            <form className="login" onSubmit={handleSubmitForm}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="enter email..."
                  name="email"
                  onChange={onChange}
                  value={email}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <button className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          )
          
          }
        
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
