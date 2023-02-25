import React, { useState } from "react";
//import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import { CloudinaryContext, Image, Transformation } from '@cloudinary/react'
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const CloudinaryUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null)

  const [submissonType, setSubmissonType] = useState('Registration')
  const [email, setEmail] = useState('')
  
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file.size > 5000000) { // 5 MB
      setError("File size exceeds 5MB limit");
    } else { 
      setSelectedFile(file);
      setError(null);
    }
  };

  const handleUploadClick = async () => {
    if (!selectedFile) {
      setError("Please select a file to upload");
      return;
    }
    setUploading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "confr-img");
    formData.append("public_id", `${email}${new Date().getMilliseconds()}${new Date().getMinutes()}`); 
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dkukvhd6b/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setUploadedImage(data.secure_url);

      
    } catch (error) {
      console.error(error);
      setError("An error occurred during upload");
    } finally {
      setUploading(false);
    }

    try {
      const imageLink = await axios.post('api/paymentFile', {paymentFileLink: uploadedImage, email:email});
       console.log(imageLink.data.success)
       if(imageLink.data.success){
        toast.success('document has been uploaded')
        setSuccess('Document upload')
        return
       }

       setError('something went wrong, load the image again')
    } catch (error) {
      console.log(error)
    }

  };



  return (
    <div className="mt-5 flex justify-center flex-col gap-5 px-10">
    
    <ToastContainer />
    <TextField
      className=""
      label='Email'
      name='email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required/>

      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Submission Type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        input={<OutlinedInput label="Participant Type" />}
        value={submissonType}
        onChange={(e)=> setSubmissonType(e.target.value)}
        name='participantType'
        label=""
        
      >
        <MenuItem value='Registration'>Registration</MenuItem>
        <MenuItem value='Manuscript'>Manuscript</MenuItem>
        <MenuItem value='Advert'>Advert</MenuItem>
        <MenuItem value='Exhibition'>Exhibition</MenuItem>
      </Select>
    </FormControl>

      {
        submissonType === 'Registration' && (
          <div className="">
            <p>Evidence of Payment</p>
            <p>Click here to upload your evidence of payment</p>
            <input 
              type="file" 
              onChange={handleFileInputChange} 
              placeholder="Drag and drop your Evidence of Payment file here, or click to select file" 
              className="w-full mt-2 appearance-none border border-gray-300 py-2 px-4 bg-white rounded-lg shadow-sm text-sm leading-5 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={handleUploadClick}>Upload</button>
            {uploading && <p>Uploading...</p>}
              
        </div> 
        )
      }
      {success ? (  <button onClick={handleUploadClick} disabled className="bg-green-700 rounded py-2 text-white font-bold border my-6">uploaded </button>
      ) : ( <button onClick={handleUploadClick} className="bg-blue-700 rounded py-2 text-white font-bold border my-6"> {uploading ? 'Uploading...' : 'Submit'}
      
      </button>
      )}
     
  
  
  </div>
  );
};

export default CloudinaryUpload;
