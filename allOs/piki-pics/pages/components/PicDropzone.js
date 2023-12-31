import React, { useCallback, useRef, useState, useMemo } from "react";
import {useDropzone} from 'react-dropzone';
import { db, storage } from '../../firebase'; // Assuming 'firebase.js' is located in the parent directory
import { addDoc, collection, arrayUnion, serverTimestamp, updateDoc } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytes } from "@firebase/storage";


const PicDropzone = () => {
  const [ selectedImages, setSelectedImages] = useState([])
  const captionRef = useRef(null)
  const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};
  const uploadPost = async()=>{
    const docRef = await addDoc(collection(db,"posts"),{
      caption:captionRef.current.value,
      timestamp:serverTimestamp()
    })
    await Promise.all(
      selectedImages.map(image=>{
        const imageRef =ref(storage, 'posts/${docRef.id}/${image.path}');
        uploadBytes(imageRef,image,"data_url").then(async()=>{
          const downloadURL = await getDownloadURL(imageRef)
          await updateDoc(doc(db,"posts",docRef.id),{
            images:arrayUnion(downloadURL)
          })
        })
      })
    )
    captionRef.current.value=''
    setSelectedImages([])
  }
  const onDrop = useCallback(acceptedFiles => {
    setSelectedImages(acceptedFiles.map(file=>
      Object.assign(file,{
        preview:URL.createObjectURL(file)
      })
      ))
  }, [])
  const {getRootProps, getInputProps, isFocused,
    isDragAccept,
    isDragReject} = useDropzone({onDrop, accept: 'image/*'})
    const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);
  const selected_images =selectedImages?.map(file=>{
    <div>
      <img src={file.preview} style={{width:"200px"}} alt="" />
    </div>
  })
  return (
    <div>
      <div {...getRootProps({style})}>
      <input {...getInputProps()} />

          <p>Drop the files here ...</p>
    </div>
    <input
    className='border rounded focus:ring-0 w-full text-xs p-3 my-4 '
    
    ref={captionRef} type="text" placeholder="Enter a caption" />
    <button
    className=' hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-4 border-blue-500 rounded '
    
    onClick={uploadPost}>Post</button>
    {selected_images}
    </div>
    
  )
}

export default PicDropzone