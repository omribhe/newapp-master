import { hasSelectionSupport, setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { set } from "react-hook-form";
import React from "react";




const axios = require('axios').default;




const useData = () => {


    // const setData = (users) => {
    //         let obj = {
    //             Name: users.Name,
    //             nickName: users.nickName,
    //             picture: users.picture,
    //             password: users.password,
    //             Contacts: users.Contacts,
    //             message: users.message,
    //             server: "localhost:3092"
    //         };
    //         sessionStorage.setItem(users.Name, JSON.stringify(obj))     //if we want to save the storage when we close the app we can use in localStorage command

    //}

    const setData = async (users) => {
            let tempObjInvitation = {
                Name: users.Name,
                nickName: users.nickName,
                picture: users.picture,
                password: users.password,
                server: users.server
            };
        // let Url = 'https://' + users.server + '/api/User';
        let Url = 'https://localhost:7092/api/User';
        axios.post(Url, tempObjInvitation ).then(response => response.status).catch(err => console.warn(err));


        const response = await fetch('https://localhost:7092/api/User/', {
            method: 'GET'
        });
        let data = await response.json();
        data.forEach(element => {
            sessionStorage.setItem(element.name, JSON.stringify(element))
        });

    }

    const setLocalData = async () => {
        const response = await fetch('https://localhost:7092/api/User/', {
            method: 'GET'
        });
        let data = await response.json();
        data.forEach(element => {
            sessionStorage.setItem(element.name, JSON.stringify(element))
        });
    }


    const getData = (users) => {
        let dat = sessionStorage.getItem(users.Name);
        let datJson = JSON.parse(dat)
        return datJson;
    }

     //when i check login i use in user with name and pssword only and doesnt have a server field

    // const getData = async (users, stateFunc) => {
    //     const response = await fetch('https://localhost:7092/api/User/' + users.Name, {
    //         method: 'GET'
    //     });
    //     if(response.status == 404){
    //         stateFunc(null)
    //     } else {
    //         let data = await response.json();
    //         stateFunc(data);
    //     }
    // };





    const setUserLog = (user) => {
        sessionStorage.setItem("userLoginCorrect", user.Name)
    }

    const getUserLog = () => {
        var userLog = sessionStorage.getItem("userLoginCorrect");
        return userLog;
    }

    // const setUserMassage = (user) => {
    //     var userSendObject = {sendName : user.myNickName, message:user.message, time:user.time}
    //     var dataMessage = getData({ Name: user.name })
    //     if (user.myName in dataMessage.message){
    //         dataMessage.message[user.myName].push(userSendObject)
    //     } else {
    //         dataMessage.message[user.myName] = [userSendObject]
    //     }
    //     setData(dataMessage)

    //     dataMessage = getData({ Name: user.myName })
    //     if (user.name in dataMessage.message){
    //         dataMessage.message[user.name].push(userSendObject)
    //     } else {
    //         dataMessage.message[user.name] = [userSendObject]
    //     }
    //     setData(dataMessage)
    // }


    const setTransferMessage = (user) => {
        let Url = "https://"+user.server+"/api/transfer";
        let dataMessage = {
            "from":user.myName,
            "to":user.name,
            "content":user.message.data
        };
        axios.post(Url, dataMessage,).then(response => response.status, setLocalData()).catch(err => console.warn(err));
    }

    const setUserMassage = (user) => { 
        let Url = "https://localhost:7092/api/contacts/"+user.name+"/messages";
        let dataMessage = {
            "content": user.message.data
        };
        axios.post(Url, dataMessage, {
            params: {
                username: user.myName,
            }
        }).then(response => response.status, setLocalData()).catch(err => console.warn(err));
        setTransferMessage(user)
        return 1
    }


    const getUserMassage = (user) => {
        var data = getData({Name: user })
        return data;
    }

/*    const setContacts = (userName, ContactsName) => {
        let user = getData({ Name: userName })
        let Contacts = getData({ Name: ContactsName })
        if (user.Contacts.includes(ContactsName) == false) {
            user.Contacts.push(ContactsName)
            user.message[Contacts.Name] = [{sendName: Contacts.Name, message:{type:'', data: ''}, time:''}]
        }
        if (Contacts.Contacts.includes(userName) == false) {
            Contacts.Contacts.push(userName)
            Contacts.message[user.Name] = [{sendName: Contacts.Name, message:{type:'', data: ''}, time:''}]
        }
        setData(user)
        setData(Contacts)
    }*/



















    
    const setInitation = async (userName, ContactsName, Contactserver, myServer) => {

        let tempObjInvitation = {
            from: userName,
            to: ContactsName,
            server: myServer
        }
        let Url = 'https://localhost:7092/api/invitations';
        axios.post(Url, tempObjInvitation ).then(response => response.status).catch(err => console.warn(err));
    }


    const setContacts = async (userName, ContactsName, ContactsNickName, Contactserver, myServer) => {
        let tempObj = {
            contact: ContactsName,
            nickName: ContactsNickName,
            server: Contactserver
        }
        let Url = 'https://localhost:7092/api/contacts';;
        axios.post(Url, tempObj, {
            params: {
                username: userName,
            }
        }).then(response => response.status, setLocalData()).catch(err => console.warn(err));
        setInitation(userName, ContactsName, Contactserver,myServer)
    }





    return { getData, setData, setUserLog, getUserLog, setUserMassage, getUserMassage, setContacts ,setLocalData};

}
export default useData;