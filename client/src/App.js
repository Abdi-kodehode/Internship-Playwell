import React, { useState, useEffect } from "react";

//Styles
import "./index.css";
import "./styles.css";

//React Router
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

//Routes
import {
  PrivateRoutes,
  Layout,
  Fortnite,
  Scratch,
  AboutUs,
  ErrorPage,
  Minecraft,
  GamingClub,
  Login,
  Home,
  SignUp,
  DashboardClient,
  DashboardSubscription,
  DashboardCalendar,
  DashboardLayout,
  DashboardVod,
  DashboardAdmin,
  ForgotPassword,
  ResetPassword,
  DashboardUserList,
  Subscription,
  Basic,
  Premium,

} from "./router/Router";

//Routes Elements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/minecraft" element={<Minecraft />} />
        <Route path="/roblox" element={<GamingClub />} />
        <Route path="/fortnite" element={<Fortnite />} />
        <Route path="/koding" element={<Scratch />} />
        <Route path="/omoss" element={<AboutUs />} />
        <Route
          path="/subscription"
          element={
            <PrivateRoutes>
              <Subscription />
            </PrivateRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/passwordreset/:resetToken" element={<ResetPassword />} />
        <Route
          path="/"
          element={<DashboardLayout />}
          errorElement={<ErrorPage />}
        >
          <Route path="/dashboard" element={<DashboardClient />} />
          <Route
            path="/dashboard-subscription"
            element={<DashboardSubscription />}
          />
          <Route path="/basic" element={<Basic />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/dashboard-admin" element={<DashboardAdmin />} />
          <Route path="/dashboard-userlist" element={<DashboardUserList />} />
          <Route path="/dashboard-calendar" element={<DashboardCalendar />} />
          <Route path="/dashboard-vod" element={<DashboardVod />} />
        </Route>
      </Route>
    </Route>
  )
);
function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("auth");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  const [originalTabName, setOriginalTabName] = useState(window.name);
  const [isTabClosed, setIsTabClosed] = useState(false);

  const logout = () => {
    localStorage.removeItem("auth");
    sessionStorage.clear();
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && originalTabName === window.name) {
        setIsTabClosed(true);
      } else {
        setIsTabClosed(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (isTabClosed) {
        logout();
      }
    }, 5 * 60 * 1000);
  }, [isTabClosed]);

  return <RouterProvider router={router} />;
}

export default App;
