import { Toast, ToastContainer } from 'react-bootstrap';
import './ToastMessage.css';
import { useEffect, useState } from "react"
import TextChat from './TextChatInput';
import { Image, } from 'react-bootstrap';

function ToastMessage(props) {

    const handleText = (message) => {
        if (message.type == "text") {
            return message.data
        } else if (message.type == "image") {
            return <Image id='imageMessage' src={message.data} />
        } else if (message.type == "video") {
            return (
                <div class="embed-responsive embed-responsive-16by9">
                    <video id='videoChat' class="embed-responsive-item" src={message.data} allowfullscreen controls></video>
                </div>
            );
        } else if (message.type == "audio") {
            return (
                <audio controls>
                    <source src={message.data} type="audio/mpeg"/>
                        Your browser does not support the html audio tag.
                </audio>
            );
        }
    }

    if (Object.keys(props.messages).length != 0) {
        return (
            <>
                <div class="px-2 scroll" >
                    <ToastContainer >
                        {props.messages.map((message, i) => {
                            return <Toast id='my-toast'>
                                <Toast.Header closeButton={false}>
                                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                    <strong className="me-auto">{message.sendName}</strong>
                                    <small>send on - {message.time}</small>
                                </Toast.Header>
                                <Toast.Body>{handleText(message.message)}</Toast.Body>
                            </Toast>
                        })}
                    </ToastContainer>
                </div>

                <TextChat id="textChat" writeText={props.writeText} showInput={props.showInput}></TextChat>
            </>
        );
    } else {
        return (

            <>
                <div class="px-2 scroll"></div>
                <TextChat id="textChat" writeText={props.writeText} showInput={props.showInput}></TextChat>
            </>
        );
    }
}
export default ToastMessage;