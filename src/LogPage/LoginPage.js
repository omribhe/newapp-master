
import Login from './Login'
import allUsers from '../users/allUsers';
import useData from '../data';
import { useState } from 'react';


function LoginPage() {


  const { setAllUsers } = allUsers();

  const [ userData, setUserData] = useState(null)

  const handleOnLoad = () => {
    if(userData == null){
      setUserData("")     
      setAllUsers()
    }
  }

  return (
    <div className="LoginPage">
      <Login onload={handleOnLoad()}/>
    </div>
  );
}

export default LoginPage;