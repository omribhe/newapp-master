import { useRef, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import "./chatPage.css"
import { Image, Button, ButtonGroup, Dropdown, Tooltip } from "react-bootstrap";


function TextChat({ writeText, showInput, rend,getRender}) {

    const [hiddeButtons, setHiddeButtons] = useState(true)

    const [firstPress, setFirstPress] = useState(true)

    const textBox = useRef(null)

    const [val, setVal] = useState()

    const write = function () {
        writeText({ type: 'text', data: textBox.current.value });
        textBox.current.value = ''
        rend(!getRender)
    }

    const handleChangePicture = (event) => {

        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                writeText({ type: 'image', data: URL.createObjectURL(event.target.files[0]) })
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }

    const handleChangeVideo = (event) => {

        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                writeText({ type: 'video', data: URL.createObjectURL(event.target.files[0]) })
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }

    const fileRef = useRef();

    const videoRef = useRef();

    const handleRecord = () => {
        let dataRecord = [];
        let constraints = { audio: true, video: false };
        if (firstPress) {
            setHiddeButtons(false)
            setFirstPress(false)
        } else {
            setHiddeButtons(true)
            setFirstPress(true)
        }

        navigator.mediaDevices.getUserMedia(constraints).then(
            (stream) => {
                var mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.onstop = () => {
                    let blob = new Blob(dataRecord, { type: 'audio/ogg; codecs=opus' });
                    var record = URL.createObjectURL(blob);
                    let newMessage = { type: "audio", data: record };

                    writeText(newMessage);
                }
                mediaRecorder.ondataavailable = (e) => {
                    dataRecord.push(e.data);
                }
                function stopAudio() {
                    mediaRecorder.stop();
                }
                var start = document.getElementById("start-record");
                start.onclick = () => {
                    mediaRecorder.start();
                };
                var stop = document.getElementById("stop-record");
                stop.onclick = () => {
                    setHiddeButtons(true);
                    setFirstPress(true)
                    mediaRecorder.stop();
                }
            }
        );
    }


    return (
        <>
            <div hidden={showInput} class="input-group mb-3" id="textChat" >
                <input ref={textBox} value={val} type="text" class="form-control" placeholder="Enter a message" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button onClick={write} class="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
            </div>
            {/*buttons for record send image and video*/}
            
            {/* <ButtonGroup hidden={showInput} class="classUploadButton" id="uploadButton" aria-label="Basic example">
                <Button variant="secondary" data-toggle="tooltip" data-placement="bottom" title="Image" onClick={() => fileRef.current.click()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                </svg></Button>
                <input
                    ref={fileRef}
                    onChange={handleChangePicture}
                    multiple={false}
                    type="file"
                    hidden
                />
                <Button class="classUploadButton" variant="secondary" data-toggle="tooltip" data-placement="bottom" title="Video" onClick={() => videoRef.current.click()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
                </svg></Button>
                <input
                    ref={videoRef}
                    onChange={handleChangeVideo}
                    multiple={false}
                    type="file"
                    hidden
                />


                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" data-toggle="tooltip" data-placement="bottom" title="Voice message" onClick={handleRecord} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg></Button>
                    <Button id="start-record" variant="secondary" hidden={hiddeButtons} >Start record</Button>
                    <Button id="stop-record" variant="secondary" hidden={hiddeButtons} >Stop record</Button>
                </ButtonGroup>
            </ButtonGroup> */}
        </>
    );
}

export default TextChat;