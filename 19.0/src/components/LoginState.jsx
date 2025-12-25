import { useState } from "react";

export default function LoginState() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <p>{isLogin ? "Hi XXX" : "Please Login "}</p>
      <button onClick={() => setIsLogin(true)}>Login</button>
      <button onClick={() => setIsLogin(false)}>Logout</button>
    </>
  );
}

//neu trang thai don gian thi su dung useState de quan ly state
