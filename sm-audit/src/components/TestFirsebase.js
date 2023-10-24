import React, { useRef } from 'react'; // Added `{ useRef }` to import useRef
import { Typography } from '@mui/material';
import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore"; // Changed the import path

export const TestFirebase = () => {
    const messageRef = useRef();
    const ref = collection(firestore, "messages"); // Changed the collection name to "messages"

    const handleSave = async (e) => {
        e.preventDefault();
        console.log(messageRef.current.value);
        let data = {
            message: messageRef.current.value,
        };
        await addDoc(ref, data); // Added `await` for the asynchronous operation
    };

    return (
        <div style={{marginTop:'10rem'}}>
            <form onSubmit={handleSave}>
                <label>Enter message</label>
                <input type='text' ref={messageRef} />
                <button type='submit'>Save to firebase</button> // the firebase will record the data after submitting
            </form>
        </div>
    );
};
