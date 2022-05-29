import useForm from "../RegisterPage/useForm"
import useData from "../data";
import { useState } from "react";



const CheckLogin = (user, userData) => {
    let errors={};
    if(!user.Name){
        errors.Name="Name is required."
    } else {
        if(userData == null){
            errors.password="Incorrect username or password."
        } else if(user.password != userData.password){
            errors.password="Incorrect username or password1."
        }
    }
    if(!user.password){
        errors.password="Password is required."
    }



    return errors;
};

export default CheckLogin