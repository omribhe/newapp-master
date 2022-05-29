import { useState } from 'react';
import { Link } from "react-router-dom";
import useForm from './useForm'


function RegisterForm(props) {
    const {handleChangePicture,handleChange, handleFormSubmit, users, errors} = useForm(props);

    const [ userData, setUserData] = useState(null)

    return (
        <div className='container' id="registerCointainer">
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'>Create Account</h2>
                </div>
                <form className='form-wrapper'>
                    <div className='name'>
                        <label className='label'>User Name</label>
                        <input className='input' type='text' name="Name" value={users.Name} onChange={handleChange}></input>
                        {errors.Name && <p className="error">{errors.Name}</p>}
                    </div>
                    <div className='name'>
                        <label className='label'>Display Name</label>
                        <input className='input' type='text' name="nickName" value={users.nickName} onChange={handleChange}></input>
                        {errors.nickName && <p className="error">{errors.nickName}</p>}
                    </div>
                    <div className='name'>
                        <label className='label'>Picture</label>
                        <input className='input' type='file' name="picture"  onChange={handleChangePicture}></input>
                    </div>
                    <div className='name'>
                        <label className='label'>Password</label>
                        <input className='input' type='password' name="password" value={users.password} onChange={handleChange}></input>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className='name'>
                        <label className='label'>Verify Password</label>
                        <input className='input' type='password' name="verify" value={users.verify} onChange={handleChange}></input>
                        {errors.verify && <p className="error">{errors.verify}</p>}
                    </div>
                    <div>
                        <button className="submit" name="two-in-raw" onClick={(e) => {handleFormSubmit(e,setUserData, userData)}}>Sign Up</button>
                    </div>
                    <div>
                        <p className="allReady">Already have an account? </p>
                        <Link className="allReady" to="/Login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default RegisterForm;