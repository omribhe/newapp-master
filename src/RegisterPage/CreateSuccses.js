
import { useNavigate } from "react-router-dom";



function CreateSuccses() {

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/chat")
}

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <h1 className="form-success">Account Created!</h1>
        <div>
        <button className="submit" onClick={handleLogin}>Go to the chat</button>
      </div>
      </div>
    </div>
  );
}


export default CreateSuccses;