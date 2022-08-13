import useAuth from "./useAuth";
import React from "react";

const useAdmin = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = React.useState(false);

  React.useEffect(() => {
    fetch(`http://localhost:5000/admin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  return [isAdmin, setIsAdmin];
};

export default useAdmin;
