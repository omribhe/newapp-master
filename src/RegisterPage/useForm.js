import React,  {useState, useEffect} from "react";
import Check from "./checkValidation";
import useData from "../data";
import personIcon from "../users/Photo/personIcon.png"
import personIcon1 from "../users/Photo/benPic.jpeg"

const useForm = (props) => {

    const {setData,setLocalData} = useData();

    const [users, setUsers] = useState({
        Name: "",
        nickName: "",
        picture: "",
        password: "",
        verify: "",
        server: "localhost:7092"
    });

    const[errors, setErrors] =useState({});

    const [isCorrect, setIsCorrect] = useState(false)

    const handleChange = (event) => {
        setUsers({
            ...users,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = (event, setUserData, userData) => {
        event.preventDefault();
        setErrors(Check(users,setUserData,userData));
        // if (users.picture == '') {
            setUsers({
                ...users,
                picture: personIcon
            })
        // }
        setLocalData()
        setIsCorrect(true);
    }

    const handleChangePicture = (event) => {

        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2 ){
                setUsers({
                    ...users,
                    picture: reader.result
                })
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isCorrect) {
            setData(users);
            console.log(users)
            props.created({Name:users.Name, password:users.password});
        }
    }, [errors])
    return{handleChangePicture,handleChange,handleFormSubmit,users,errors};
}
export default useForm;