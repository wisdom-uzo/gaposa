import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import AdminLayout from '../components/AdminLayout'

const Document = () => {


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
  
      const check =  localStorage.getItem('adminLoggedIn')
      if(!check) {
        router.push('/login')
      }
   
  
      const fetchData = async () => {
        try {
          const reponse = await axios.get(`api/paymentFile`);
  
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
    }, [router]);


  return (
    <AdminLayout>
      <div className="">
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
          }
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className={"font-semibold text-lg "}>Uploaded Documents</h3>
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
                    SN
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
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                    }
                  >
                    submisson Type
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                    }
                  >
                    evidence of payment
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                    }
                  >
                    submitted file
                  </th>

                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                    }
                  >
                    Date sent
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr key={index}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {index + 1}
                    </td>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      {item.email}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.submissonType}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                      <Link
                        className="bg-green-700 text-white p-2 rounded-md text-sm"
                        target="_blank"
                        rel="noreferrer"
                        href={item.paymentFileLink.image1}
                      >
                        Download document
                      </Link>
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                      {item.paymentFileLink.image2 && (
                        <Link
                          className="bg-blue-700 text-white p-2 rounded-md text-sm font-semibold "
                          target="_blank"
                          rel="noreferrer"
                          href={item.paymentFileLink.image2}
                        >
                          {" "}
                          Download document
                        </Link>
                      )}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                      {new Date(item.createdAt).getDate()}-
                      {new Date(item.createdAt).getMonth() + 1}-
                      {new Date(item.createdAt).getFullYear()}{" "}
                      {new Date(item.createdAt).getHours()}:
                      {new Date(item.createdAt).getMinutes()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Document