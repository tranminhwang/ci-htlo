import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import HinhTron from "../components/HinhTron";
import HinhVuong from "../components/HinhVuong";
import HinhTamGiac from "../components/HinhTamGiac";

const Login = () => {
  const [pwd, setPwd] = useState("");
  let isLogin = useAuth();
  const navigate = useNavigate();
  let currentPwd = "123@";

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

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
