import { useEffect, useState } from "react";

export const useAuth = () => {
  // call api
  return JSON.parse(localStorage.getItem("isLogin"));
};

export const useCallAPI = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  if (data === undefined) {
    return [];
  }
  return data;
};
