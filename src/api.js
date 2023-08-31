import { projectFirestore } from "./firebase/config";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";


export const updateTitle = async({image, newTitle}) => {
   await updateDoc(doc(projectFirestore,'images',image.id),{
    title: newTitle
   });
};

export const updateFavourite = async({image, isFavourite}) => {
    await updateDoc(doc(projectFirestore,'images',image.id),{
        isFavourite: isFavourite
    });
};

export const deleteImage = async({image}) => {
    await deleteDoc(doc(projectFirestore,'images',image.id));
};

