import useData from "../data";
import personIcon from "./Photo/personIcon.png"
import picture4 from "./Photo/picture4.jpg"
import sagivPic from "./Photo/sagivPic.jpeg"

const SagivUser = () => {
    const {getData,setData,setUserLog,getUserLog,setUserMassage,getUserMassage} = useData()

    const sagiv = () =>{
        let obj = {
            Name: "sagiv",
            nickName: "sagiv1",
            picture: sagivPic,
            password: "Omri123!",
            Contacts:["omri"],
            message:{
                
                omri:[{sendName : "omri ben hemo", message:{type:"text" ,data:"hey sagiv, how are you"}, time:"12:24"}, {sendName : "sagiv1", message:{type:"text" ,data: "all good :)"}, time:"12:25"},{sendName : "omri ben hemo", message:{type:"text" ,data:"so sagiv, where are you now?"}, time:"12:25"},{sendName : "sagiv1", message:{type:"image" ,data: picture4}, time:"12:25"},],
            },
            id: 3
            
        };

        setData(obj)

    }
    return {sagiv}
}
export default SagivUser