import useData from "../data";
import personIcon from "./Photo/personIcon.png"
import picture2 from "./Photo/picture2.png"
import video2 from "./Photo/video2.mp4"
import omerPic from "./Photo/omerPic.jpeg"

const OmerUser = () => {
    const {getData,setData,setUserLog,getUserLog,setUserMassage,getUserMassage} = useData()

    const omer = () =>{
        let obj = {
            Name: "omer",
            nickName: "omer1",
            picture: omerPic,
            password: "Omri123!",
            Contacts:["omri"],
            message:{
                omri:[{sendName : "omri ben hemo", message:{type:"text" ,data:"hey omer, how are you"}, time:"12:24"}, {sendName : "omer1", message:{type:"text" ,data: "all good :)"}, time:"12:25"}, {sendName : "omri ben hemo", message:{type:"text" ,data:"so omer, where are you now?"}, time:"12:25"},{sendName : "omer1", message:{type:"image" ,data: picture2}, time:"12:25"},{sendName : "omer1", message:{type:"video" ,data: video2}, time:"12:25"},],
            },
            id: 9
        };

        setData(obj)

    }
    return {omer}
}
export default OmerUser