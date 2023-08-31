/* eslint-disable no-restricted-globals */
import React from "react";
import { motion } from 'framer-motion';
import { updateTitle, updateFavourite, deleteImage } from "../api";
import { EditText} from "react-edit-text";
import 'react-edit-text/dist/index.css';

const Modal = ({selectedImg,setSelectedImg}) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

    const handleTextClick = async (e) => {
        await updateTitle({image: selectedImg,newTitle: e.value});
    };

    const handleFavouriteText = async (e) => {
        await updateFavourite({image: selectedImg, isFavourite: !selectedImg.isFavourite});
        location.reload();
    }

    const handleDeleteText = async (e) => {
        await deleteImage({image: selectedImg});
        location.reload();
    };

    return(
        <motion.div className = 'backdrop' onClick={handleClick}
        initial={{ opacity:0 }}
        animate={{ opacity: 1}}
        >
           <motion.img src={selectedImg.url} alt={selectedImg.title}
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                title={selectedImg.title}
            /> 
            <EditText className="editText" defaultValue={selectedImg.title} onSave={handleTextClick}/>
            <motion.br></motion.br>
            {!selectedImg.isFavourite && <motion.button onClick={handleFavouriteText}>Make as Favourite</motion.button>}
            {selectedImg.isFavourite && <motion.button onClick={handleFavouriteText}>Remove from Favourites</motion.button>}
            <motion.br></motion.br>
            <motion.br></motion.br>
            <motion.button onClick={handleDeleteText}>Delete Image</motion.button>
        </motion.div>
    )
}

export default Modal;