import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";





function ParticipantTable() {

  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = useState(0);    
  const [data, setData] = useState([]);
  const [pamentFile, setPamentFile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  
  const router = useRouter()
  useEffect(() => {

    // const check =  localStorage.getItem('adminLoggedIn')
    // if(!check) {
    //   router.push('/login')
    // }
 

    const fetchData = async () => {
      try {
          const reponse = await axios.get(`https://www.gaposastconf.org/api/user`);
          console.log(reponse);
          setData(reponse?.data?.data);
        if (!reponse.ok) {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.log(error);
      }
    };

    
    fetchData();
  }, []);


  return (
    <AdminLayout>
    <div className="">
      <Paper elevation={4} className="">
        {data?.map((a, i) => (
          <Accordion
            key={i}
            expanded={expanded === i}
            onChange={handleChange(i)}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ color: "text.secondary", paddingRight: "5px" }}>
                {i + 1}
              </Typography>
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {a.firstName} {a.lastName} {a.otherName ? a.otherName : ""}
              </Typography>
              <Typography sx={{ color: "text.secondary"}}>
                {a.email}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </div>
    </AdminLayout>
  );
}

export default ParticipantTable;
