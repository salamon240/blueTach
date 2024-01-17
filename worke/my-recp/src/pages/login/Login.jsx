import React, { useState ,useContext} from "react";
import "./login.scss";
import axios from "axios"
import { useAute } from "../../contex/aute";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser]=useState({
    userName:"",
    email:"",
    password:"",
    phonNumber:""  
  })
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegister, setIsRegister] = useState(true);
  const [err,seterr]=useState('')
 const { login, register } = useAute()

  const handelRegister=async (e)=>{
    e.preventDefault();
    console.log("handelRegister")
    try {
      register(userName)
    } catch (error) {
      console.log("eror",error)
    }

  }

  const handelLogin=async(e)=>{
    e.preventDefault();
   
    try {
      console.log("handelLgin")
      login(userName)
    
    } catch (error) {
      console.log("eror",error)
    }
    
  }
  const handeldata=(e)=>{
    e.preventDefault();
 setUserName({...userName,[e.target.name]:e.target.value})
 console.log(userName)
    
  }
  return (
    <div>
      <div className="container">
        <form action="" className="form" onSubmit={isRegister ?  handelRegister:handelLogin}>
          <div className="items">
            <h2>{isRegister ? "Register" : "Login"}</h2>
            <div className="radioInput">
              <label htmlFor="">
                <input type="radio" value={"login"} checked={!isRegister} onChange={()=>setIsRegister(false)}></input>Login
              </label>
              <label htmlFor="">
                {" "}
                <input type="radio" value={"register"} checked={isRegister} onChange={()=>setIsRegister(true)}></input>Register
              </label>
            </div>

            <div className="item">
              <input
                type="email"
                name="email"
                onChange={handeldata}
                placeholder="Email"
              />
            </div>
            <div className="item">
              <input
                type="password"
                name="password"
                onChange={handeldata}
                placeholder="password"
              />
            </div>
            {isRegister && (
              <>
                <div className="item">
                <input
                  type="password"
                  name="password"
                  onChange={handeldata}
                  placeholder="confrim password"
                />
              </div>
              <div className="item">
                <input
                  type="text"
                  name="userName"
                  onChange={handeldata}
                  placeholder="User name"
                />
              </div>
              <div className="item">
                <input
                  type="text"
                  name="phonNumber"
                  onChange={handeldata}
                  placeholder="Phon Number"
                />
              </div>
              </>
            
            )}

            <button type="submit">{isRegister ? "Register" : "Login"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
