import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

import HinhTron from "./HinhTron";
import HinhVuong from "./HinhVuong";
import HinhTamGiac from "./HinhTamGiac";

const Login = () => {
  const [pwd, setPwd] = useState("");
  let isLogin = useAuth();
  const navigate = useNavigate();
  let currentPwd = "123@";

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, []);

  const handleLogin = () => {
    // do something...
    // call API
    if (pwd === currentPwd) {
      localStorage.setItem("isLogin", true);
      navigate("/");
    } else {
      alert("Dang nhap sai");
    }
  };

  return (
    <div>
      <input onChange={(e) => setPwd(e.target.value)} />
      <button onClick={handleLogin}>Login</button>

      <HinhTron />
      <HinhVuong />
      <HinhTamGiac />
    </div>
  );
};

export default Login;
