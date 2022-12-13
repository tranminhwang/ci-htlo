import { Link } from "react-router-dom";
import { useCallAPI } from "./useAuth";

const ListUser = () => {
  const { data = [] } = useCallAPI("https://reqres.in/api/users?page=2");
  return (
    <div>
      {data.map((user) => (
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
