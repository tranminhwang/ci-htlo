import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCallAPI } from "./useAuth";

const DetailUser = () => {
  const { userId } = useParams();
  const { data } = useCallAPI(`https://reqres.in/api/users/${userId}`);

  return (
    <div>
      <img src={data?.avatar} />
      <h2>{data?.email}</h2>
      <h2>
        {data?.first_name} {data?.last_name}
      </h2>
    </div>
  );
};

export default DetailUser;
