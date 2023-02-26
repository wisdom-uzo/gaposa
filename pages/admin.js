import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PaymentFile, UserTable } from '../sections';
import { PdfViewer } from '../components';
import { useRouter } from 'next/router';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

  

const Admin = ({user}) => {
    const [value, setValue] = useState(0);    
    const [data, setData] = useState([]);
    const [pamentFile, setPamentFile] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    

    

     

    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
   
    const router = useRouter()
    useEffect(() => {

      const check =  localStorage.getItem('adminLoggedIn')
      if(!check) {
        router.push('/login')
      }


      const fetchData = async () => {
        try {
            const reponse = await axios.get(`api/user`);
            setData(reponse?.data?.data);
          if (!reponse.ok) {
            throw new Error('Request failed');
          }

          setIsLoading(false);
        } catch (error) {
          setError(error.message);
          setIsLoading(false);
        }
      };

      const fetchData2 = async () => {
        try {
            const reponse = await axios.get(`api/paymentFile`);
            setPamentFile(reponse?.data?.data);
          if (!reponse.ok) {
            throw new Error('Request failed');
          }
         
        } catch (error) {
          setError(error.message);
        }
      };

      fetchData2()
      fetchData();
    }, []);
  
 
  
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Candidates" {...a11yProps(0)} />
          <Tab label="Payment" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
         <UserTable user={data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PaymentFile data={pamentFile} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      </TabPanel>
    </Box>
  )
}

export default Admin



// export const getServerSideProps = async ({req, res}) => {



  
//  const {data} = await axios.get(`http://localhost:3000/api/user`)
//  const imagefile = await axios.get(`http://localhost:3000/api/paymentFile`)
  
	
// console.log(imagefile.data.data)
// 	return {
// 		props: {
// 			user: data.data   
// 		},
// 	}; 
// }