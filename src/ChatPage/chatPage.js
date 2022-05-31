import { ListGroup, Image } from 'react-bootstrap';


import useData from "../data";

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';



import './chatPage.css'
import ToastMessage from './ToastMessage';
import MakeContactsList from "./makeContactsList"
import Search from './Search';
import TextChat from './TextChatInput';
import AddContacts from '../addContacts/AddContacts';
import { useNavigate } from "react-router-dom";
import ChatUserBar from './chatUserBar'
import {HubConnectionBuilder} from '@microsoft/signalr';

import {personIcon} from "../users/Photo/personIcon.png"

function ChatPage() {

    const { getData, setData, setUserLog, getUserLog, setUserMassage, getUserMassage, setContacts, setLocalData } = useData();

    const [myUser, setMyUser] = useState(getData({ Name: getUserLog() }))

    const [Contacts, setContactsState] = useState([])

    const [userChat, setUserChat] = useState('')

    const [filterContacts, setFilterContacts] = useState(Contacts);

    const [messages, setMessages] = useState([])

    const [userChatServer, setUserChatServer] = useState()



    const doSearch = function (q) {
            setFilterContacts(Contacts.filter((Contacts) => Contacts.id.includes(q)))
    }

    const setUpdateMessage = function (userName) {
        setMessages(userName)
    }

    const writeText = function (message) {
        var today = new Date(),
            timeNow = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        let user = {
            name: userChat,
            myName: myUser.name,
            myNickName: myUser.nickname,
            message: message,
            time: timeNow,
            server: userChatServer

        }
        setUserMassage(user)
    }

    const [userChatPicture, setUserChatPicture] = useState('')
    const [userChatNickName, setUserChatNickName] = useState('')

    const addNewContacts = function (ContactsName, ContactsNickName, Contactserver) {
        if ((getData({ Name: ContactsName }) != null) && (ContactsName != myUser.Name)) {
            setContacts(myUser.name, ContactsName, ContactsNickName, Contactserver, myUser.server)
        }
    }

    const [showInput, setShowInput] = useState(true)


    useEffect (() => {
            setLocalData()
            setMyUser(getData({ Name: getUserLog() }))
    })
      //test
    useEffect (() => {
        if(JSON.stringify(Contacts) != JSON.stringify(myUser.contacts)){
            setContactsState(myUser.contacts)
        }
    },[myUser])

    useEffect (() => {
        if(userChat != ''){
            setUpdateMessage(getUserMassage(myUser.name).contacts.find(x => x.id == userChat).messages)
        }
    },[myUser,Contacts])

    useEffect(() => {
        doSearch('')
        if (userChat != '') {
            setUserChatPicture(myUser.picture)
            setUserChatNickName(userChat)
        }
    }, [Contacts, userChat]);

    


    return (
        <div className='container' id='users-chat-container'>
            <div className='container' id='users-container'>
                <div variant="outline-light" id='profileDivChatList'>
                    <Image id='profileImageChatList' src={myUser.picture} roundedCircle />
                    {myUser.nickname}
                </div>
                <AddContacts addNewContacts={addNewContacts} />
                <Search doSearch={doSearch} Contacts={Contacts} />
                <MakeContactsList Contacts={filterContacts} set={setUserChat} setUpdateMessage={setUpdateMessage} userName={myUser.Name} setShowInput={setShowInput} myUser={myUser} setServer={setUserChatServer} />
            </div>
            <div className='container' id='chat-container'>
                <div variant="outline-light" id='chatUserTop' hidden={showInput}>
                    <Image id='profileImage' src={userChatPicture} roundedCircle />
                    {userChatNickName}
                </div>
                <ToastMessage userName={myUser.name} messages={messages} writeText={writeText} showInput={showInput} myUser={myUser} userChat={userChat} />
            </div>
        </div>
    );
}

export default ChatPage;