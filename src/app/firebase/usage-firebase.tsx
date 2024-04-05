import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { storage } from "./firebase";

export function useFirebase() {
  const [imagePhoto, setPhotoUpload] = useState(null);
  const [photoDefault, setPhotoDefault] = useState('')
  const photoDefaultRef = ref(
    storage,
    "default_photos/purple_default_img_wesync.88907758.png"
  );
  getDownloadURL(photoDefaultRef).then((downloadedUrl) => {
    setPhotoDefault(downloadedUrl)
  })
  const uploadPhoto = () => {
    if (imagePhoto) {
      const photoRef = ref(storage, `default_photos/${imagePhoto}`);
      uploadBytes(photoRef, imagePhoto).then(() => {
        alert("image uploaded successfully");
      });
    }
  };

  return { photoDefault, uploadPhoto };
}
