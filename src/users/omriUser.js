import useData from "../data";
import personIcon from "./Photo/personIcon.png"
import picture1 from "./Photo/picture1.jpg"
import picture2 from "./Photo/picture2.png"
import picture3 from "./Photo/picture3.jpeg"
import picture4 from "./Photo/picture4.jpg"
import video1 from "./Photo/video1.mp4"
import video2 from "./Photo/video2.mp4"
import omriPic from "./Photo/omriPic.jpeg"
import Record from "./Photo/Record.mp3"


const OmriUser = () => {
    const {getData,setData,setUserLog,getUserLog,setUserMassage,getUserMassage} = useData()

    const omri = () =>{
        let obj = {
            Name: "omri",
            nickName: "omri ben hemo",
            picture: omriPic,
            password: "Omri123!",
            server: "localhost:7092"
        };

        setData(obj)

    }
    return {omri}
}
export default OmriUser