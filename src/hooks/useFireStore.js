/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection ,query, orderBy, onSnapshot, where} from "firebase/firestore";

const useFirestore = (showFavourites,firestore) => {
    const [images,setImages] = useState([]);
        useEffect(() => {
            var data;
            if(showFavourites){
                const q = query(collection(projectFirestore,firestore),where("isFavourite","==",true));
                data = onSnapshot(q,(snap) => {
                    let images = [];
                    snap.forEach(image => {
                        images.push({...image.data(),id: image.id});
                    });
                    setImages(images);
                });
            }
            else{
                data = onSnapshot(query(collection(projectFirestore,firestore),orderBy('createdAt','desc')),(snap) => {
                    let images = [];
                    snap.forEach(image => {
                        images.push({...image.data(),id: image.id});
                    });
                    setImages(images);
                });
            }

            return () => data();
        }, [firestore, showFavourites]);

    return { images };
}

export default useFirestore;
