import React, { useState, useContext, useEffect } from "react";
import moment from "moment";
//React Icons
import { FaFacebook, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
//Context
import { UserContext } from "../../context/context";
//Axios
import axios from "axios";
import Spiner from "../../components/spiner/Spiner";
import SubscriptionPlan from "../../components/subscription-plan/SubscriptionPlan";

import { useNavigate, Link } from "react-router-dom";

const DashboardAbonament = () => {
  const navigate = useNavigate();
  const [state, setState] = useContext(UserContext);
  const [isFetching, setIsFetching] = useState(true);

  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get(
        "https://pwo-mern-api.onrender.com/api/subscriptions"
      );
      console.log(data);
      setSubscriptions(data.data);
      setIsFetching(false);
    };

    if (state && state.token) getSubscriptions();
  }, [state && state.token]);

  const manageSubscriptions = async () => {
    const { data } = await axios.get(
      "https://pwo-mern-api.onrender.com/api/customer-portal"
    );
    window.location.href = data;
    console.log(data);
  };

  if (isFetching) {
    return <Spiner />;
  }

  return (
    <div>
      {subscriptions.length === 0 ? (
        <div className="bg-zinc-700/20 backdrop-blur-xl  w-full  rounded-b-xl   overflow-hidden relative py-2 tablet:mt-1 mobile:pb-0 mobile:py-0">
          <div className="py-5 mobile:pt-5 ">
            <h1 className="text-5xl text-center font-bold laptop:text-4xl screen:text-3xl mobile:text-2xl">
              Beklager du har ikke abonnement ...
              <br />
              Derfor...
            </h1>
          </div>
          <SubscriptionPlan />
        </div>
      ) : (
        subscriptions.map((sub) => (
          <div key={sub.id}>
            <div className="bg-zinc-700/20 backdrop-blur-xl  w-full  rounded-b-xl   overflow-hidden relative py-10 tablet:mt-1 mobile:pb-0 mobile:py-0">
              <div className="w-[600px] h-[600px] rounded-full bg-red-500/20 blur-2xl  absolute top-10 right-0"></div>
              <div className="w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-2xl  absolute bottom-10 left-0"></div>

              <div className="flex w-[98%] mx-auto my-10 relative z-5 bg-zinc-900/80 backdrop-blur-40  rounded-xl screen:w-full  overflow-hidden mobile:my-0">
                <div className="w-2/4 bg-cover bg-center bg-no-repeat bg-subscription screen:w-2/5 screen:bg-[center_right_-280px] tablet:hidden "></div>
                <div className="flex flex-col justify-center items-center gap-1 px-10 py-20 text-center  w-full laptop:px-3 mobile:px-1 mobile:justify-start mobile:pt-10">
                  <h1 className="text-5xl  pb-5 screen:text-4xl screen:pb-2 mobile:text-3xl">
                    Takk for at du er medd oss.
                  </h1>
                  <h2 className="text-4xl screen:text-3xl mobile:text-2xl">
                    Du er for tiden i månedsabonnament i
                  </h2>
                  <h3 className="text-5xl text-red-700 text-center pb-5  mobile:text-4xl">
                    {sub.plan.nickname}
                  </h3>
                  <h5 className="text-2xl">
                    {(sub.plan.amount / 100).toLocaleString("en-US", {
                      style: "currency",
                      currency: sub.plan.currency,
                    })}
                  </h5>
                  <p className="text-2xl">Status: {sub.status.toUpperCase()}</p>
                  <p className="text-2xl">
                    Current period end:
                    {moment(sub.current_period_end * 1000)
                      .format("dddd, MMMM Do YYYY h:mm:ss a")
                      .toString()}
                  </p>
                  <p className="text-4xl pb-5 screen:text-3xl mobile:text-2xl">
                    Hvis du har spørsmål, vennligst kontakt oss.
                  </p>
                  <div className="flex gap-10 justify-center items-center">
                    <FaFacebook className="text-3xl  hover:opacity-80 cursor-pointer" />
                    <FaInstagram className="text-3xl hover:opacity-80 cursor-pointer" />
                    <FaTwitter className="text-3xl hover:opacity-80 cursor-pointer" />
                    <FaDiscord className="text-3xl hover:opacity-80 cursor-pointer" />
                  </div>
                  <div className="pt-10 flex gap-40 mobile:gap-5">
                    <button
                      className="py-2 px-3 text-2xl border-2 hover:opacity-80 mobile:px-1 mobile:py-1 mobile:text-lg rounded-xl"
                      onClick={manageSubscriptions}
                    >
                      Manage Subscription
                    </button>
                    <Link to="/Subscription">
                      <button className="py-2 px-3 text-2xl bg-red-700  hover:opacity-80 mobile:px-1 mobile:py-1 mobile:text-lg rounded-xl">
                        Upgrade
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DashboardAbonament;
