import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ image, setImage}) => {
    const {progress, url} = useStorage(image);
    useEffect(() => {
        if(url){
            setImage(null);
        }
    }, [url,setImage]);

    return (
        <motion.div className = 'progress-bar'
            initial = {{ scaleX : 0}}
            animate  = {{ scaleX: progress + '%'}} >
        </motion.div>

    );
}

export default ProgressBar;