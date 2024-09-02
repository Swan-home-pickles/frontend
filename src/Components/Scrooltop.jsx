import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scrooltop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the path changes
  }, [pathname]); // This effect runs only when pathname changes

  return null; // This component doesn't render anything
};

export default Scrooltop;
