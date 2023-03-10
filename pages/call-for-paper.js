import { Layout } from '../sections'
import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Button, FormControl, InputLabel, makeStyles, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link';
import { getDownloadURL,  getStorage,  ref,  uploadBytesResumable } from 'firebase/storage'
import storage from '../firebase';



const Abstract = () => {

  const [massage, setMassate] =  useState(null)
  const [loading, setLoading] = useState(false)
  const [urls, setURLs] = useState('')
  const [error, setError] = useState(null)
  const [progress, setProgress] = useState(null)
  const [abstract, setAbstract] = useState({
    titleAbstract: '',
    authorName: '',
    authorEmail: '',
    authorPhone: '',
    authorInstitution:"",
    presentationType:"",
    researchArea: '',
    keywordsField: "",
    file: urls,
  })




  const handleFileInputChange =  (event) => {
    const file = event.target.files[0];
    
    if (file.size > 3000000) { // 5 MB
      setError("File size exceeds 3MB limit");
    } else { 
      setError(null);
     console.log(file)
      if(!file) return;
   

     const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed', (snapshot) => {
        const prog = Math.round(( snapshot.bytesTransferred /snapshot.totalBytes) * 100)
   
        setProgress(prog)
    }, (err) => (console.log(err)),
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setURLs(url)
                setAbstract({...abstract, file: url})
            }) 
        }
    )

    }
  };


  const handleChange = (e) => {
    e.preventDefault()
    setAbstract({...abstract, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const {data} = await axios.post('api/abstract', abstract);
      if(data.success){
        toast.success('datailes has be uploaded')
        setMassate('your information has be submited ')
        console.log(data)
      }
    } catch (error) {
      console.log(error) 
    }finally{
      setLoading(false)
  }
  }


  return (
    <Layout>
    

    <Paper className="w-full md:w-[70%] mx-auto my-10 p-5" elevation={5}>
    <form action="" onSubmit={handleSubmit}>
      <h1 className="text-center my-7 font-semibold uppercase text-[24px]">
      Call for Paper
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TextField
          label="Title of the Abstract"
          type="text"
          required
          size="small"
          value={abstract.titleAbstract}
          name="titleAbstract"
          placeholder="Title of the Abstract"
          onChange={handleChange}
        />

        <TextField
          label="Corresponding Author's Name"
          required
          type="text"
          size="small"
          value={abstract.authorName}
          name="authorName"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <TextField
          label="Corresponding Author's Email"
          type="email"
          required
          size="small"
          value={abstract.authorEmail}
          name="authorEmail"
          placeholder="example@example.com"
          onChange={handleChange}
        />

        <TextField
          label="Corresponding Author's Phone Number"
          type="tel"
          required
          size="small"
          value={abstract.authorPhone}
          name="authorPhone"
          placeholder="Enter your phone number"
          onChange={handleChange}
        />

        <TextField
          label="Corresponding Author's Institution"
          type="text"
          required
          size="small"
          value={abstract.authorInstitution}
          name="authorInstitution"
          placeholder="institution"
          onChange={handleChange}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Presentation Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            input={<OutlinedInput label="Participant Type" />}
            value={abstract.presentationType}
            name="presentationType"
            label=""
            onChange={handleChange}
          >
            <MenuItem value="Live Virtual Presentation">
              Live Virtual Presentation
            </MenuItem>
            <MenuItem value="Poster Presentation">
              Poster Presentation
            </MenuItem>
            <MenuItem value="Live Oral Presentation">
              Live Oral Presentation
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Research Area</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            input={<OutlinedInput label="Participant Type" />}
            value={abstract.researchArea}
            name="researchArea"
            label=""
            onChange={handleChange}
          >
            <MenuItem value="Medicinal plants / Drug development">
              Medicinal plants / Drug development
            </MenuItem>
            <MenuItem value="Climatic change and human health">
              Climatic change and human health
            </MenuItem>
            <MenuItem value="Energy and Mineral Resources">
              Energy and Mineral Resources
            </MenuItem>
            <MenuItem value="Environmental Pollution and Remediation">
              Environmental Pollution and Remediation
            </MenuItem>
            <MenuItem value="Aquaculture and the Blue Economy">
              Aquaculture and the Blue Economy
            </MenuItem>
            <MenuItem value="Science and security">
              Science and security
            </MenuItem>
            <MenuItem value="Agriculture and Food Security">
              Agriculture and Food Security
            </MenuItem>
            <MenuItem value="Conservation and utilization of our natural heritage/ resources">
              Conservation and utilization of our natural heritage/ resources
            </MenuItem>
            <MenuItem value="Biotechnology, Bioinformatics and Cheminformatics">
              Biotechnology, Bioinformatics and Cheminformatics
            </MenuItem>
            <MenuItem value="Computational/Mathematical modeling">
              Computational/Mathematical modeling
            </MenuItem>
            <MenuItem value="Nanotechnology">Nanotechnology</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Keywords Field"
          type="text"
          required
          size="small"
          value={abstract.keywordsField}
          name="keywordsField"
          placeholder="keywords"
          onChange={handleChange}
        />

        <div className="w-full gap-3">
          <p>Download Abstract template</p>
          <Link className='' href='https://firebasestorage.googleapis.com/v0/b/gaposa-79176.appspot.com/o/files%2FGuidelines%20for%20paper%20submission.docx?alt=media&token=3ea5ce7f-a8ce-43d7-bbb1-d4c585881f23'><p className='bg-blue-700 w-full py-2 rounded text-center text-white mt-4'>Click to download template</p> </Link>
        </div>
      

        <div className="">
          <p>Attach the file of your abstract according to the abstract template (File Size must not be greater than 3MB). The abstract should be in word format ( .docx ) <span className='text-red-700 font-extralight'>*</span></p>
          <input type="file"  
            name="file" id=""
            onChange={handleFileInputChange} 
            className='rounded w-full mt-4 p-3 bg-white shadow-md border-2'/>
        </div>

      
      </div>
      {massage ? (
        <button
          type="submit"
          className="w-full bg-green-700 hover:to-blue-500 rounded-sm text-md font-semibold my-6 text-white py-2"
          disabled
        >
          Your information has been submitted
        </button>
      ) : (
        <>
        {
          abstract.file.length === 0 ? (
            <button
            type="submit"
            disabled
            className="w-full bg-blue-700 hover:to-blue-500 rounded-sm text-md font-semibold my-6 text-white py-2"
          >
            upload document first
          </button>
          ) : (
            <button
            type="submit"
            className="w-full bg-blue-700 hover:to-blue-500 rounded-sm text-md font-semibold my-6 text-white py-2"
          >
            {loading ? "loading..." : "Submit"}
          </button>
          )
        }
        
        </>
        
       

      )}
    </form>
    <ToastContainer />
  </Paper>
   

    </Layout>
  )
}

export default Abstract