'use client'
import React from 'react'
import Paper from '@mui/material/Paper';
import { Button, FormControl, InputLabel, makeStyles, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'



const Form = () => {

  const countries = ["Algeria", "Argentina", "Australia", "Austria", "Bangladesh", "Belgium", "Brazil", "Canada", "Chile", "China", "Colombia", "Czech Republic", "Denmark", "Egypt", "France", "Germany", "Greece", "India", "Indonesia", "Iran", "Ireland", "Israel", "Italy", "Japan", "Malaysia", "Mexico", "Netherlands", "Nigeria", "Norway", "Pakistan", "Peru", "Philippines", "Poland", "Romania", "Russia", "Saudi Arabia", "Singapore", "South Africa", "South Korea", "Spain", "Sweden", "Switzerland", "Taiwan", "Thailand", "Turkey", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Vietnam"];

  return ( 
    <Paper className='w-full md:w-[70%] mx-auto my-10 p-5' elevation={5}>
     
        <form action="">
            <h1 className='text-center my-7 font-semibold uppercase text-[24px]'>Register Here</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TextField
                label="First Name"
                type='text'
                required
                size='small'
                value=''
                name=''
                placeholder='First Name' />

                <TextField
                label="Last Name"
                required
                type='text'
                size='small'
                value=''
                name=''
                placeholder='Last Name' />

                <TextField
                label="Other Name"
                type='text'
                required
                size='small'
                value=''
                name=''
                placeholder='Other Name' />


             
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Participant Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    input={<OutlinedInput label="Participant Type" />}
                    value=""
                    label=""
                    onChange=''
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
                value=''
                name=''
                placeholder='Email' />

                <TextField
                label="Phone Number"
                type='text'
                required
                size='small'
                value=''
                name=''
                placeholder='Phone Number' />

                <TextField
                label="Institution / Organisation"
                type='text'
                required
                size='small'
                value=''
                name=''
                placeholder='Institution / Organisation' />

                <TextField
                label="Department"
                type='text'
                required
                size='small'
                value=''
                name=''
                placeholder='Department' />

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    input={<OutlinedInput label="Participant Type" />}
                    value=""
                    label=""
                    onChange=''
                  >
                  {
                    countries.map((item, index) => (
                      <MenuItem key={index} value='item'>{item}</MenuItem>
                    ))
                  }
                    
                  </Select>
                </FormControl>



                <TextField
                label="State / Province"
                type='text'
                required
                size='small'
                value=''
                name=''
                placeholder='State / Province' />

                <TextField
                label="City"
                type='text'
                required
                size='small'
                value=''
                name=''
                placeholder='City' />
              </div>  

              <button className='w-full bg-blue-700 hover:to-blue-500 rounded-sm text-md font-semibold my-6 text-white py-2'>Submit</button>
            </form> 
          
    </Paper>
  )
}

export default Form




