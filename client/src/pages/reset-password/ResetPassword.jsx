import React, { useState } from "react";

//React Router
import { useNavigate, useParams } from "react-router-dom";

//Axios
import axios from "axios";

const ResetPassword = () => {
  //Navigate
  const navigate = useNavigate();
  //Params
  const param = useParams();

  //State
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //Reset Password
  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      const { data } = await axios.patch(
        `https://pwo-mern-api.onrender.com/api/passwordreset/${param.resetToken}`,
        {
          password,
          confirmpassword: confirmPassword,
        },
        config
      );
      navigate("/login");
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <section className="flex  justify-center items-center  m-auto   w-3/4 h-screen screen:w-[95%] mobile:h-[80vh] mobile:pt-20">
        <form
          onSubmit={resetPasswordHandler}
          className="flex flex-col justify-center gap-3 bg-zinc-900 w-1/2 h-[50vh] rounded-l-xl overflow-hidden  px-20 laptop:px-5 mobile:w-2/3 "
        >
          <h1 className="text-5xl pb-2 ">Reset Password</h1>

          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter new password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmpassword">Confirm New Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm new password"
            autoComplete="true"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            className="py-2 px-2 bg-red-700 w-1/2 hover:opacity-80 my-3 mobile:text-sm mobile:py-1 mobile:p-1"
          >
            Reset Password
          </button>
          {error && <span className="text-red-700">{error} </span>}
          {success && <span className="text-green-500">{success}</span>}
        </form>
        <div className="bg-center bg-cover bg-no-repeat object-fit w-1/2 h-[50vh] bg-sign-up rounded-r-xl overflow-hidden mobile:w-1/3 small-mobile:hidden "></div>
      </section>
    </div>
  );
};

export default ResetPassword;
