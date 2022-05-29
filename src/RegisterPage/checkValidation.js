import useData from "../data";
import { validPassword , validUserName } from "../Regex/Regex";


const Check = (users,setUserData, userData) => {
    let size = 8
    let errors={};
    const {getData, setData} = useData(); 

    if(!users.Name){
        errors.Name="user Name is required."
    } else if (!validUserName.test(users.Name)){
        errors.Name="Only English characters or numbers are allowed."
    } else {
        getData(users, setUserData)
        if(userData != null){
            errors.Name="This name allready taken."
        }
    }
    if(!users.password){
        errors.password="Password is required."
    } else if(users.password.length < size){
        errors.password="Password must be more than 8 characters"
    } else if(!validPassword.test(users.password)){
        errors.password="Password must include [A-Z],[a-z],number and [!@#$%^&*]."
    }
    if(!users.verify){
        errors.verify="Verify Password is required."
    } else if(users.password != users.verify){
        errors.verify="The passwords do not match"
    }
    if(!users.nickName){
        errors.nickName="Disply name is required."
    }
    return errors;
};

export default Check