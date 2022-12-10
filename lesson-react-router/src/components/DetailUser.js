import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userId}`)
      .then((req) => req.json())
      .then(({ data }) => setUser(data));
  }, []);

  return (
    <div>
      <img src={user?.avatar} />
      <h2>{user?.email}</h2>
      <h2>
        {user?.first_name} {user?.last_name}
      </h2>
    </div>
  );
};

export default DetailUser;
