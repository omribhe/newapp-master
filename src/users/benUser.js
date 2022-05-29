import useData from "../data";
import personIcon from "./Photo/personIcon.png"
import picture2 from "./Photo/picture2.png"
import video2 from "./Photo/video2.mp4"
import benPic from "./Photo/benPic.jpeg"

const BenUser = () => {
    const {getData,setData,setUserLog,getUserLog,setUserMassage,getUserMassage} = useData()

    const ben = () =>{
        let obj = {
            Name: "ben",
            nickName: "ben1",
            picture: benPic,
            password: "Omri123!",
            Contacts:["omri"],
            message:{
                omri:[{sendName : "omri ben hemo", message:{type:"text" ,data:"hey ben, how are you"}, time:"12:24"}, {sendName : "ben1", message:{type:"text" ,data: "all good :)"}, time:"12:25"}, {sendName : "omri ben hemo", message:{type:"text" ,data:"so ben, where are you now?"}, time:"12:25"},{sendName : "ben1", message:{type:"image" ,data: picture2}, time:"12:25"},{sendName : "ben1", message:{type:"video" ,data: video2}, time:"12:25"},],
            },
            id: 3
        };

        setData(obj)

    }
    return {ben}
}
export default BenUser