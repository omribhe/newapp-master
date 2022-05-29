import useData from "../data";
import personIcon from "./Photo/personIcon.png"
import picture1 from "./Photo/picture1.jpg"
import uriPic from "./Photo/uriPic.jpeg"
import video1 from "./Photo/video1.mp4"
import Record from "./Photo/Record.mp3"


const UriUser = () => {
    const {getData,setData,setUserLog,getUserLog,setUserMassage,getUserMassage} = useData()

    const uri = () =>{
        let obj = {
            Name: "uri",
            nickName: "uri1",
            picture: uriPic,
            password: "Omri123!",
            server: "localhost:7092"
        };

        setData(obj)
        
    }
    return {uri}
}
export default UriUser