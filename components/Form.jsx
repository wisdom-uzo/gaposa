'use client'
import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Button, FormControl, InputLabel, makeStyles, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


const Form = () => {

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    otherName: '',
    participantType: '',
    email:"",
    phone:"",
    institutionOrganisation: '',
    department: "",
    country: "",
    stateProvince: "",
    city:''

  })

  const countries = ["Algeria", "Argentina", "Australia", "Austria", "Bangladesh", "Belgium", "Brazil", "Canada", "Chile", "China", "Colombia", "Czech Republic", "Denmark", "Egypt", "France", "Germany", "Greece", "India", "Indonesia", "Iran", "Ireland", "Israel", "Italy", "Japan", "Malaysia", "Mexico", "Netherlands", "Nigeria", "Norway", "Pakistan", "Peru", "Philippines", "Poland", "Romania", "Russia", "Saudi Arabia", "Singapore", "South Africa", "South Korea", "Spain", "Sweden", "Switzerland", "Taiwan", "Thailand", "Turkey", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Vietnam"];

  const handleChange = (e) => {
    e.preventDefault()
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const {data} = await axios.post('/api/user', user);
      if(data.success){
        toast.success('datailes has be uploaded')
      }
    } catch (error) {
      console.log(error)
    }
  }


  return ( 
    <Paper className='w-full md:w-[70%] mx-auto my-10 p-5' elevation={5}>
     
        <form action="" onSubmit={handleSubmit}>
            <h1 className='text-center my-7 font-semibold uppercase text-[24px]'>Register Here</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TextField
                label="First Name"
                type='text'
                required
                size='small'
                value={user.firstName}
                name='firstName'
                placeholder='First Name'
                onChange={handleChange} />

                <TextField
                label="Last Name"
                required
                type='text'
                size='small'
                value={user.lastName}
                name='lastName'
                placeholder='Last Name'
                onChange={handleChange} />

                <TextField
                label="Other Name"
                type='text'
                required
                size='small'
                value={user.otherName}
                name='otherName'
                placeholder='Other Name'
                onChange={handleChange} />


             
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Participant Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    input={<OutlinedInput label="Participant Type" />}
                    value={user.participantType}
                    name='participantType'
                    label=""
                    onChange={handleChange}
                  >
                    <MenuItem value='virtual'>virtual</MenuItem>
                    <MenuItem value='Physical'>Physical</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                label="Email"
                type='email'
                required
                size='small'
                value={user.email}
                name='email'
                placeholder='Email'
                onChange={handleChange} />

                <TextField
                label="Phone Number"
                type='text'
                required
                size='small'
                value={user.phone}
                name='phone'
                placeholder='Phone Number'
                onChange={handleChange} />

                <TextField
                label="Institution / Organisation"
                type='text'
                required
                size='small'
                value={user.institutionOrganisation}
                name='institutionOrganisation'
                placeholder='Institution / Organisation'
                onChange={handleChange} />

                <TextField
                label="Department"
                type='text'
                required
                size='small'
                value={user.department}
                name='department'
                placeholder='Department'
                onChange={handleChange} />

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    input={<OutlinedInput label="Participant Type" />}
                    value={user.country}
                    name='country'
                    label=""
                    onChange={handleChange}
                  >
                  {
                    countries.map((item, index) => (
                      <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))
                  }
                    
                  </Select>
                </FormControl>



                <TextField
                label="State / Province"
                type='text'
                required
                size='small'
                value={user.stateProvince}
                name='stateProvince'
                placeholder='State / Province'
                onChange={handleChange} />

                <TextField
                label="City"
                type='text'
                required
                size='small'
                value={user.city}
                name='city'
                placeholder='City'
                onChange={handleChange} />
              </div>  

              <button type='submit' className='w-full bg-blue-700 hover:to-blue-500 rounded-sm text-md font-semibold my-6 text-white py-2'>Submit</button>
            </form> 
<ToastContainer />          
    </Paper>
  )
}

export default Form




