import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'



const UserTable = ({user}) => {

    const physical = user?.filter((each) => each.participantType === "Physical")
    const virtual = user?.filter((each) => each.participantType === "virtual")
   
  return (
    <div>
    <h1 className=" text-[20px] uppercase font-extrabold">Registeired Candidates</h1>
    {
        user ? (<div className='grid grid-cols-2 gap-4 '>
        <Paper elevation={2} className="p-3">
            <h1>Physical {physical.length} </h1>
            {physical?.map((each,index) => (
                <List key={index} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                    <div className="flex items-center">
                    <p className="bg-black text-white font-bold h-auto p-2 mr-2">{index + 1}</p>
                     <ListItemText
                    primary={` ${each.lastName} ${each.firstName} ${each.otherName}`}
                    secondary={
                    <React.Fragment>
                        <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        >
                        Email: {each.email} <br /> Country : {each.country}
                        </Typography>
                    </React.Fragment>
                    }
                    />
                    </div>
                   
                    </ListItem>
                    
                </List>
            ))}
        </Paper> 

        <Paper elevation={2} className="p-3">
            <h1>Virtual {virtual.length}</h1>
            {virtual?.map((each,index) => (
                <List key={index} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                    <div className="flex items-center">
                    <p className="bg-black text-white font-bold h-auto p-2 mr-2">{index + 1}</p>
                     <ListItemText
                    primary={` ${each.lastName} ${each.firstName} ${each.otherName}`}
                    secondary={
                    <React.Fragment>
                        <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        >
                        Email: {each.email}
                        </Typography>
                    </React.Fragment>
                    }
                    />
                    </div>
                    </ListItem>
                    
                </List>
            ))}
        </Paper> 
            
            
            </div>) : (<h1>Loading table....</h1>)
    }
    
    </div>
  )
}

export default UserTable