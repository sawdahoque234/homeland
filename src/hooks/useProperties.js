import { useEffect, useState } from "react";

const useProperties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch(
      "https://homelandserver-isqzp4rxt-sawdahoque234.vercel.app/properties"
    )
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, [properties]);
  return [properties, setProperties];
};

export default useProperties;
