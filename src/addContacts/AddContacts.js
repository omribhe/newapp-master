
import Modal from 'react-bootstrap/Modal'
import { Form, Button } from 'react-bootstrap'
import { useState, useRef } from 'react'
import './addContacts.css'

function AddContacts(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleSave = () => {
        setShow(false);
        props.addNewContacts(ContactsearchBox.current.value, ContactsearchBoxNickName.current.value, ContactsearchBoxServer.current.value )
    }
    const handleShow = () => setShow(true);

  
    const ContactsearchBox = useRef(null)
    const ContactsearchBoxNickName = useRef(null)
    const ContactsearchBoxServer = useRef(null)


    return (
        <>
            <Button id='addContactsButton' variant="outline-light" onClick={handleShow}>
                Add new Contacts
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contacts list</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='name'>
                        <label className='label'>Contacts`s username:</label>
                        <input ref={ContactsearchBox} className='input' type='text' name="picture" ></input>
                        <label className='label'>Contacts`s nickname:</label>
                        <input ref={ContactsearchBoxNickName} className='input' type='text' name="picture" ></input>
                        <label className='label'>Contacts`s server:</label>
                        <input ref={ContactsearchBoxServer} className='input' type='text' name="picture" ></input>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddContacts