import {Image} from 'react'


//chat user bar
function ChatUserBar(props) {

    if (props.userChat == '') {
        return (<></>);
    } else {
        return (
            <div variant="outline-light">
                <Image id='profileImage' src={props.picture} roundedCircle />
                {props.nickName}
            </div>
        );
    }

}
export default ChatUserBar;








