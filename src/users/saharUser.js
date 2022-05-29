import useData from "../data";
import personIcon from "./Photo/personIcon.png"
import picture3 from "./Photo/picture3.jpeg"
import saharPic from "./Photo/saharPic.jpeg"


const SaharUser = () => {
    const {getData,setData,setUserLog,getUserLog,setUserMassage,getUserMassage} = useData()

    const sahar = () =>{
        let obj = {
            Name: "sahar",
            nickName: "sahar1",
            picture: saharPic,
            password: "Omri123!",
            Contacts:["omri"],
            message:{
                omri:[{sendName : "omri ben hemo", message:{type:"text" ,data:"hey sahar, how are you"}, time:"12:24"}, {sendName : "sahar1", message:{type:"text" ,data: "all good :)"}, time:"12:25"}, {sendName : "omri ben hemo", message:{type:"text" ,data:"so sahar, where are you now?"}, time:"12:25"},{sendName : "sahar1", message:{type:"image" ,data: picture3}, time:"12:25"},],
            },
            id: 3
        };

        setData(obj)

    }
    return {sahar}
}
export default SaharUser