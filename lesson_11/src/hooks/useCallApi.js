import { useEffect, useState } from "react";
import { USER_SERVICE_URL, getUserDetail } from "../apis/userService";

export const useGetApi = (apiUR) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    USER_SERVICE_URL.get(apiUR)
      .then((response) => {
        setData(response.data.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [apiUR]);

  return { data, isLoading };
};

export const useGetUserDetail = (userId) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUserDetail(userId)
      .then((res) => setData(res))
      .finally(() => setIsLoading(false));
  }, [userId]);

  return {
    data,
    isLoading,
  };
};
