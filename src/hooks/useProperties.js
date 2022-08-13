import { useEffect, useState } from "react";

const useProperties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, [properties]);
  return [properties, setProperties];
};

export default useProperties;
