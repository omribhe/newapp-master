import RegisterForm from './RegisterForm';
import React, {useState, useNavigate, useEffect} from 'react';
import CreateSuccses from './CreateSuccses';
import useData from "../data"


function Register(){
  

  const [isCreated, setIsCreated] = useState(false);

  const {setUserLog,setLocalData,getData,getUserLog} = useData();

  const created = (user) => {
    setLocalData()
    setUserLog(user); 
    setIsCreated(true);
  }


    return (
      <div>
        {!isCreated ? (<RegisterForm created={created}/>) : (<CreateSuccses/>)}
      </div>
    );
  }

export default Register;