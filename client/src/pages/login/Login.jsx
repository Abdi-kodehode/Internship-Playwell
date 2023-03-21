import React, { useRef, useState, useEffect, useContext } from "react";
//React Router
import { Link, useNavigate } from "react-router-dom";
//Axios
import axios from "axios";
//Context
import { UserContext } from "../../context/context";
//Toast
import { toast, Toaster } from "react-hot-toast";

// Login Url
const LOGIN_URL = "https://pwo-mern-api.onrender.com/api/login";

const Login = () => {
  //Navigate
  const navigate = useNavigate();
  //Refs
  const userRef = useRef();
  const errRef = useRef();
  //State
  const [state, setState] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  //Display errors
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  //Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(LOGIN_URL, {
        email,
        password,
      });
      
      if (data.error) {
        setErrMsg(data.error);
        toast.error(data.error);
      } else {
        toast.success("Login successful!");
        setEmail("");
        setPassword("");
        setState(data);
        localStorage.setItem("auth", JSON.stringify(data));
        console.log(state);
         ;
        setTimeout(() => {
          navigate("/");
     }, 2000);
        
      }
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No server response");
        toast.error("No server response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Username Password");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <Toaster position="bottom-center" reverseOrder={true} />
      </div>
      <section className="flex  justify-center items-center  m-auto   w-3/4 h-screen screen:w-[95%] mobile:h-[80vh] mobile:pt-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-3 bg-zinc-900 w-1/2 h-[60vh] rounded-l-xl overflow-hidden  px-20 laptop:px-5 mobile:w-2/3 "
        >
          <h1 className="text-5xl pb-2 ">Sign In</h1>
          <label htmlFor="email" className="mt-2">
            Email:
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <label htmlFor="username">Password: </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button className="py-2 px-2 bg-red-700 w-1/2 hover:opacity-80 my-3  mobile:py-1 mobile:p-1 text-xl tablet:text-lg mobile:text-sm ">
            Log in
          </button>

          <Link
            to="/forgotpassword"
            className="text-lg font-light underline hover:opacity-80 mobile:text-sm"
          >
            Forgot Password?
          </Link>
          <p className="text-xl mobile:text-lg">
            Need an Account? <br />
            <Link
              to="/register"
              className="text-lg font-light underline hover:opacity-80 mobile:text-sm"
            >
              Sign Up
            </Link>
          </p>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
        </form>
        <div className="bg-center bg-cover bg-no-repeat object-fit w-1/2 h-[60vh] bg-sign-up rounded-r-xl overflow-hidden mobile:w-1/3 small-mobile:hidden "></div>
      </section>
    </>
  );
};

export default Login;
