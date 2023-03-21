import React, { useState } from "react";
//Axios
import axios from "axios";

const ForgotPassword = () => {
  //State
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  //ForgotPassword
  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "https://pwo-mern-api.onrender.com/api/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div>
      <section className="flex  justify-center items-center  m-auto   w-3/4 h-screen screen:w-[95%] mobile:h-[80vh] mobile:pt-20">
        <form
          onSubmit={forgotPasswordHandler}
          className="flex flex-col justify-center gap-3 bg-zinc-900 w-1/2 h-[50vh] rounded-l-xl overflow-hidden  px-20 laptop:px-5 mobile:w-2/3 tablet:px-2 "
        >
          <h1 className="text-5xl pb-2 tablet:text-4xl mobile:text-3xl ">
            Forgot Password
          </h1>
          <p className="text-lg mobile:text-sm">
            Please enter the email address you register your account with. We
            will send you reset password confirmation to this email
          </p>
          <label htmlFor="email" className="mt-2">
            Email:
          </label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <button className="py-2 px-2 bg-red-700 w-1/2 hover:opacity-80 my-3 mobile:text-sm mobile:py-1 mobile:p-1 ">
            Send Email
          </button>
          {error && <span className=" bg-red-700">{error}</span>}
          {success && <span className="bg-green-700">{success}</span>}
        </form>
        <div className="bg-center bg-cover bg-no-repeat object-fit w-1/2 h-[50vh] bg-sign-up rounded-r-xl overflow-hidden mobile:w-1/3 small-mobile:hidden "></div>
      </section>
    </div>
  );
};

export default ForgotPassword;
