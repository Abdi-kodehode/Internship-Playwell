import { useEffect } from "react";
//React Router
import { useLocation } from "react-router-dom";

const LinkTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, [pathname]);
  return null;
};

export default LinkTop;
