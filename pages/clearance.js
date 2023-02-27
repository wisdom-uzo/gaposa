import React, { useState } from 'react'
import {getStorage, getDownloadURL,  ref,  uploadBytesResumable } from 'firebase/storage'
import { storage } from '../firebase'
import axios from 'axios'
import { FormControl, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField } from '@mui/material'
import { Layout } from '../sections'
import { async } from '@firebase/util'
import { GppGoodOutlined } from '@mui/icons-material'

const Clearance = () => {
    const [error, setError] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)
    const [progress, setProgress] = useState(0)
    const [files, setFiles ] = useState([])
    const [urls, setURLs] = useState({image1:'', image2:''})
    const [email, setEmail] = useState('')
    const [submissonType, setSubmissonType] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)

    const storage1 = getStorage();


    const handleFileInputChange1 =  (event) => {
        const file = event.target.files[0];
        
        if (file.size > 5000000) { // 5 MB
          setError("File size exceeds 5MB limit");
        } else { 
          setSelectedFile(file);
          
          setError(null);

          if(!file) return;
       

         const storageRef = ref(storage1, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', (snapshot) => {
            const prog = Math.round(( snapshot.bytesTransferred /snapshot.totalBytes) * 100)
       
            setProgress(prog)
        }, (err) => (console.log(err)),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setURLs({...urls, image1: url})
                })
            }
        )

        }
      };

      const handleFileInputChange2 =  (event) => {
        const file = event.target.files[0];
        
        if (file.size > 5000000) { // 5 MB
          setError("File size exceeds 5MB limit");
        } else { 
          setSelectedFile(file);
          
          setError(null);

          if(!file) return;
       

         const storageRef = ref(storage1, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', (snapshot) => {
            const prog = Math.round(( snapshot.bytesTransferred /snapshot.totalBytes) * 100)
       
            setProgress(prog)
        }, (err) => (console.log(err)),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setURLs({...urls, image2: url})
                })
            }
        )

        }
      };
   
      


      const uploadFile = async () => {
        setLoading(true)

        try {
            const imageLink = await axios.post('api/paymentFile', {paymentFileLink: urls, email: email, submissonType: submissonType});
            console.log(imageLink)
            if(imageLink.data.success){ 
                setSuccess('Document upload')
                return
               }
        } catch (error) {
            console.log(error)
            setError('something went wrong, chech if all details are filled')
        }finally{
            setLoading(false)
        }
       
      }




  return (
    <Layout>

    <div className="bg-[url('/registration.jpg')] h-[20rem] flex justify-center font-extrabold items-center text-[25px] bg-black text-white">

    Clearance
    </div>  
    
    <div className='px-5 mb-5 mt-5'>

    <TextField 
        label='Email'
        vlaue={email}
        required
        size='small'
        className='w-full'
        onChange={(e) => setEmail(e.target.value)}
        type='email'/>
        <br /> <br />

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
<br /><br />
    <p className="">Evidence of Payment</p>
    <Paper elevation={2} className="border p-3 mb-4">
    <div className=" justify-center items-center pb-3 gap-3 flex flex-col">
        <input
        type="file"
        id="my-file"
        className=""
        onChange={handleFileInputChange1}
        />
        <label
            htmlFor="my-file"
            className={` cursor-pointer ${urls.image1 ? 'bg-green-600': ''}`}   
            >
            
                {urls.image1 ?  
                (<span className='pb-2  text-red-400'> document uploaded <GppGoodOutlined/> </span>): 
                ( <span> Drag and drop your Evidence of Payment file here, or click to select file</span>)
            }
           
            </label>
    </div>
     </Paper>

     <div className=""></div>
     <br />
     <br />

    {
        submissonType === 'Registration' ? '' : ( <> 
     <p className="mt-[1rem] mb-3">Submission</p>
    
    <Paper elevation={2} className="border p-3">
        <div className=" justify-center items-center pb-3 gap-3 flex flex-col">
            <input
            type="file"
            id="my-file"
            className=""
            onChange={handleFileInputChange2}
            />
            <label
            htmlFor="my-file"
            className={` cursor-pointer ${urls.image2 ? 'bg-green-600': ''} `}    
            >
            
                {urls.image2 ?  
                (<span className='pb-2  text-red-400'> document uploaded <GppGoodOutlined/> </span>): 
                ( <span> Drag and drop your Submission file here, or click to select file</span>)
            }
           
            </label>
        </div>
    </Paper>

    </>)
    }    
    


    {success ? (  <button onClick={uploadFile} disabled className="bg-green-700 w-full rounded py-2 text-white font-bold border my-6">uploaded </button>
    ) : ( <button onClick={uploadFile} className="bg-blue-700 rounded py-2 w-full text-white font-bold border my-6"> {loading ? 'Uploading...' : 'Submit'}
    
    </button>
     
    )}    
    {error && (<p>{error}</p>)}
    </div>
    </Layout>
   
  )
}

export default Clearance

