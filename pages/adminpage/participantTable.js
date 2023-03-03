import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import CardTable from "../../components/CardTable";





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
        //  const reponse = await axios.get(`https://www.gaposastconf.org/api/user`);
        const reponse = await axios.get(`api/user`);

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
    <div
    className={
      "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"}
  >
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            className={
              "font-semibold text-lg "}
          >
            Card Tables
          </h3>
        </div>
      </div>
    </div>
    <div className="block w-full overflow-x-auto">
      {/* Projects table */}
      <table className="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
              }
            >
              Full Name
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
              }
            >
              Email
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "}
            >
              Status
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "}
            >
              Users
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "}
            >
              Completion
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "}
            ></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <span className={"font-bold "}>Argon Design System</span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                wisdomUzodimna@gmail.com
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-circle text-orange-500 mr-2"></i>{" "}
                pending
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                hello
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                hello
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                hell
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>


     
    </AdminLayout>
  );
}

export default ParticipantTable;
