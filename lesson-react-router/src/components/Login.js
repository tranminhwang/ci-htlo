import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  let currentPwd = "123@";

  const handleLogin = () => {
    // do something...
    // call API
    if (pwd === currentPwd) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div>
      <input onChange={(e) => setPwd(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
