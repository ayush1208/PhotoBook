/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import useFirestore from "../hooks/useFireStore";
import { motion } from 'framer-motion';

const ImageGrid = ({ showFavourites, setSelectedImg }) => {
    const {images} = useFirestore(showFavourites,'images');

    return(
        <div className="img-grid">
            {images && images.map(image => (
                <motion.div className='img-wrap' key={image.id} layout whileHovers={{ opacity: 1}} onClick={() => setSelectedImg(image)}> 
                    <motion.img src={image.url} title={image.title} initial={{opacity: 0}}
                    animate = {{opacity: 1}} 
                    transition = {{delay: 1}}/>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;