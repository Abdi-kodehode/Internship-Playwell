import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../../context/context";

const Subscription_URL = "http://localhost:5000/api/subscription-status";


const StripeSuccess = () => {
  const [state, setState] = useContext(UserContext);
const navigate = useNavigate()
  useEffect(() => {
    const getSubscriptionStatus = async () => {
      const { data } = await axios.get(Subscription_URL);
      console.log("SUBSCRIPTION STATUS => ", data);
      if (data && data.length === 0) {
        navigate("/");
      } else {
        // update user in local storage
        const auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data;
        localStorage.setItem("auth", JSON.stringify(auth));
        // update user in context
        setState(auth);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    };

    getSubscriptionStatus();
  }, []);

  return (
    <div
      className="d-flex justify-content-center fw-bold"
      style={{ height: "90vh" }}
    >
      <div className="d-flex align-items-center">
        Loader
      </div>
    </div>
  );
};

export default StripeSuccess;
