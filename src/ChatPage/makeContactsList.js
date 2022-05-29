import { ListGroup, Image } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import useData from '../data';
import './makeContactsList.css'
import {useEffect, useState} from 'react'


function MakeContactsList(props) {

    const { getData, setData, setUserLog, getUserLog, setUserMassage, getUserMassage, setContacts } = useData()

    const handleClick = (name) => {
        props.set(name.id)
        props.setServer(name.server)
        props.setUpdateMessage(name.messages)
        props.setShowInput(false)

    }



    const [lastMessage, setLastMessage] = useState('')

    if (props.Contacts.length != 0) {

        if (props.Contacts.length >= 6) {
            return (
                <div class="px-2 scroll" >
                <ListGroup as="ol" >
                    {props.Contacts.map((name, i) => {
                        return <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start"
                            action onClick={handleClick.bind(this, name)}>
                                <div class='avatar' id='pic'><Image src={props.myUser.picture} roundedCircle /></div>
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{props.myUser.contacts[i].id}</div>
                               {props.myUser.contacts[i].last}</div>
                            {/* <Badge bg="primary" pill> 14 </Badge> */}
                        </ListGroup.Item>
                    })}
                </ListGroup>
                </div>
            );  
        }


        return (
            <ListGroup as="ol" >
                {props.Contacts.map((name, i) => {
                    return <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start"
                        action onClick={handleClick.bind(this, name)}>
                            <div class='avatar' id='pic'><Image src={props.myUser.picture} roundedCircle /></div>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{props.myUser.contacts[i].id}</div>
                           {props.myUser.contacts[i].last}</div>
                        {/* <Badge bg="primary" pill> 14 </Badge> */}
                    </ListGroup.Item>
                })}
            </ListGroup>
            
        );          
    } else {
        return(
        <ListGroup as="ol" ></ListGroup>
        )
    }
}
export default MakeContactsList