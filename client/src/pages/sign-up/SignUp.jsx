import React from "react";
import { useRef, useState, useEffect } from "react";
//Axios
import axios from "axios";
//React Router
import { Link, useNavigate } from "react-router-dom";
//React Icons
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
//Css
import "./signup.css";

//Toast
import { toast, Toaster } from "react-hot-toast";

//Regex Username , Password , Email
const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const REGISTER_URL = "https://pwo-mern-api.onrender.com/api/register";

const SignUp = () => {
  //Navigate
  const navigate = useNavigate();
  //Refs
  const usernameRef = useRef();
  const errRef = useRef();

  //State
  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  //Check Validation
  useEffect(() => {
    setValidName(USERNAME_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, matchPassword]);

  //Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USERNAME_REGEX.test(username);
    const v2 = PASSWORD_REGEX.test(password);
    const v3 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        REGISTER_URL,
        {
          username,
          email,
          password,
        },
        config
      );
      if (data.error) {
        setErrMsg(data.error);
        toast.error(data.error);
      }else{
        setUsername("");
        setPassword("");
        setEmail("");
        setMatchPassword("");
        console.log(data);
         ;
        toast.success(
          `Hei ${data.user.username}. Du er en del av oss nå. Gratulere!`
        );
        setTimeout(() => {
          navigate("/login");
     }, 2000);
      }
     
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
        toast.error("No Server Response");
      } else if (err.response?.status === 408) {
        setErrMsg("Username Taken");
        toast.error("Username Taken");
      } else {
        setErrMsg("Email Taken");
        toast.error("Email Taken");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="w-full h-screen pt-10">
      <div>
        <Toaster position="bottom-center" reverseOrder={true} />
      </div>
      <section className="flex  justify-center items-center  m-auto   w-3/4 h-screen screen:w-[95%]   ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-evenly bg-zinc-900 w-1/2 h-[82vh] rounded-l-xl overflow-hidden  px-20 laptop:px-5 mobile:w-2/3 "
        >
          <h1 className="text-5xl pb-2 pt-8">Register</h1>
          <label htmlFor="username" className="mt-2">
            Username:
            <FaCheck className={validName ? "valid" : "hide"} />
            <FaTimes className={validName || !username ? "hide" : "invalid"} />
          </label>
          <input
            type="text"
            id="username"
            ref={usernameRef}
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUsernameFocus(true)}
            onBlur={() => setUsernameFocus(false)}
          />
          <p
            id="uidnote"
            className={
              usernameFocus && username && !validName
                ? "instructions"
                : "offscreen"
            }
          >
            <FaInfoCircle />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
          <label htmlFor="email" className="mt-2">
            Email:
            <FaCheck className={validEmail ? "valid" : "hide"} />
            <FaTimes className={validEmail || !email ? "hide" : "invalid"} />
          </label>
          <input
            type="text"
            id="email"
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          <p
            id="uidnote"
            className={
              emailFocus && email && !validEmail ? "instructions" : "offscreen"
            }
          >
            <FaInfoCircle />
            Fail email adress
          </p>

          <label htmlFor="password">
            Password:
            <FaCheck className={validPassword ? "valid" : "hide"} />
            <FaTimes
              className={validPassword || !password ? "hide" : "invalid"}
            />
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <p
            id="pwdnote"
            className={
              passwordFocus && !validPassword ? "instructions" : "offscreen"
            }
          >
            <FaInfoCircle />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>

          <label htmlFor="confirm_pwd">
            Confirm Password:
            <FaCheck
              className={validMatch && matchPassword ? "valid" : "hide"}
            />
            <FaTimes
              className={validMatch || !matchPassword ? "hide" : "invalid"}
            />
          </label>
          <input
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMatchPassword(e.target.value)}
            value={matchPassword}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <p
            id="confirmnote"
            className={matchFocus && !validMatch ? "instructions" : "offscreen"}
          >
            <FaInfoCircle />
            Must match the first password input field.
          </p>

          <button
            disabled={
              !validName || !validPassword || !validMatch ? true : false
            }
            className="py-2 px-2 bg-red-700 w-1/2 hover:opacity-80 my-3 text-xl tablet:text-lg mobile:text-sm"
          >
            Sign Up
          </button>
          <p>
            Already registered?
            <br />
            <span className="line">
              <Link to="/login">
                <button className="text-lg font-light underline hover:opacity-80">
                  Sign In
                </button>
              </Link>
            </span>
          </p>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
        </form>
        <div className="bg-center bg-cover bg-no-repeat object-fit w-1/2 h-[82vh] bg-sign-up rounded-r-xl overflow-hidden mobile:w-1/3 small-mobile:hidden "></div>
      </section>
    </div>
  );
};

export default SignUp;
