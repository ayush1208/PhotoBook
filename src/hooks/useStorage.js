import { useState, useEffect } from "react";
import { projectStorage, projectFirestore} from "../firebase/config";
import { ref , uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc} from "firebase/firestore";

const useStorage = (file) => {
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const storageRef = ref(projectStorage,file.name);
        const imageTitle = file.name;
        const firestoreRef = collection(projectFirestore,'images');
        uploadBytesResumable(storageRef,file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await getDownloadURL(storageRef);
            const createdAt = Date.now();
            const title = imageTitle;
            const isFavourite = false;
            await addDoc(firestoreRef,{url: url,title: title,isFavourite: isFavourite,createdAt: createdAt});
            setUrl(url);
        });
    }, [file]);

    return {progress,url,error};
}
export default useStorage;