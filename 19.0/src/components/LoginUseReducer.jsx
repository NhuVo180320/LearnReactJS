//import useReducer
import { useReducer } from "react";

//khoi tao state ban dau
const initLogin = false;

//khai bao action
const LOGIN = "login";
const LOGOUT = "logout";

function reducerLogin(state, action) {
  switch (action) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return new Error("Invalid action type");
  }
}
export default function LoginUseReducer() {
  const [isLogin, dispatch] = useReducer(reducerLogin, initLogin);
  return (
    <>
      <p>{isLogin ? "Hi XXX" : "Please Login "}</p>
      <button onClick={() => dispatch(LOGIN)}>Login</button>
      <button onClick={() => dispatch(LOGOUT)}>Logout</button>
    </>
  );
}

// neu trang thai phuc tap hon thi nen su dung useReducer de quan ly state
