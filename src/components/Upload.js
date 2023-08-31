/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState,useRef } from 'react';
import ProgressBar from './ProgressBar';

const Upload = () => {

    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const hiddenFileInput = useRef(null);
    const types = ['image/png', 'image/jpeg', 'image/jpg'];


    const handleClick = (event) => {
        event.preventDefault();
        hiddenFileInput.current.click();
    };

    const onFileChange = (event) => {
        event.preventDefault();
        let currImg = event.target.files[0];
        if(currImg){
            if(types.includes(currImg.type)){
                setImage(currImg);
                setError(null);
            }
            else{
                setImage(null);
                setError('Add valid image format')
            }
        }
    };

    return (
        <div className='upload'>
            <input type="file" onChange={onFileChange} ref={hiddenFileInput} style={{ display: "none"}} />
            <button className='button-upload' onClick={handleClick}>Upload a file</button>
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {image && <ProgressBar image={image} setImage={setImage}/>}
            </div>
            
        </div>
    )
}
export default Upload;