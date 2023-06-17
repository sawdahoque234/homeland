import { useEffect, useState } from "react";

const useProperties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("https://homelandserver-production.up.railway.app/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, [properties]);
  return [properties, setProperties];
};

export default useProperties;
