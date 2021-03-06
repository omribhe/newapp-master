import { Link } from "react-router-dom";
import CheckLogin from "./CheckLogin";
import {useState, useEffect} from 'react'
import { useNavigate ,Outlet} from "react-router-dom";
import useData from "../data"
import allUsers from "../users/allUsers";



function Login() {
 
  const {setUserLog, getData, setLocalData} = useData();

  const [errors, setErrors] = useState({});

  const [isCorrect, setIsCorrect] = useState(false)
  const navigate = useNavigate();

  const [user, setUsers] = useState({
    Name: "",
    password: "",
  });

  const [userData, setUserData] = useState();
  const handleChange = (event) => {
    setUsers({
      ...user,
      [event.target.name]: event.target.value
    })
  }


  useEffect (() => {
    setLocalData()
    setUserData(getData(user))
},[user,isCorrect])

  const handleLogin =  (event) => {
    event.preventDefault();
    let userDataVal = getData(user);
    setUserData(userDataVal)
    setErrors(CheckLogin(user, userData));
    if(Object.keys(errors).length === 0){
      setUserLog(user);
      setIsCorrect(true)
    }
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isCorrect) {
        setUserLog(user);
        navigate("/chat",);
    }
}, [errors])

  return (
    <div className='container' id="loginCointainer">
      <div className='app-wrapper'>
        <div>
          <h2 className='title' id="loginTitle">Login to your account</h2>
        </div>
        <form className='form-wrapper'>
          <div className='name'>
            <label className='label'>User Name</label>
            <input className='input' type='text' name="Name" value={user.Name} onChange={handleChange}></input>
            {errors.Name && <p className="error">{errors.Name}</p>}
          </div>
          <div className='name'>
            <label className='label'>Password</label>
            <input className='input' type='password' name="password" value={user.password} onChange={handleChange}></input>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <button id="loginButtonSubmit" className="submit" onClick={handleLogin}>Log in</button>
          </div>
          <div>
            <p className="signUp">Don't have an account? </p>
            <Link className="signUp" to="../Register">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Login;