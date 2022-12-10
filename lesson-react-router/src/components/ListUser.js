import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((req) => req.json())
      .then(({ data }) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div>
          <img src={user.avatar} />
          <h2>{user.email}</h2>
          <Link to={`/list-users/${user.id}`}>View detail</Link>
        </div>
      ))}
    </div>
  );
};

export default ListUser;
