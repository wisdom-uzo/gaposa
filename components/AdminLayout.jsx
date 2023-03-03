import AdminSidebar from "./AdminSidebar";
import { Dashboard, DashboardCustomize, DashboardCustomizeSharp, ExitToApp, Logout, MenuOpen, People, Receipt, ReceiptLongOutlined, Settings } from "@mui/icons-material";
import Link from "next/link";
import React, { useState } from "react";
import { Avatar } from "@mui/material";


const AdminLayout = ({children}) => {
const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }


    return (
      <div className=" relative overflow-hidden  grid grid-cols-1 md:grid-cols-[17%,83%] h-screen w-full ">
        
          <div className="bg-black h-screen hidden md:block text-white  md:w-full transition-all duration-300 ease-in-out">
            <div className=" flex items-center gap-2 justify-center h-16 w-full bg-black">
              <DashboardCustomize />
              <h1>Admin Page</h1>
            </div>

            <div className="mt-10 flex flex-col justify-center items-center">
              <ul className=" flex flex-col gap-5 justify-center">

              <li>
                  <Link href="/admin">
                    <DashboardCustomizeSharp /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/userTable">
                    <People /> Registeired Users
                  </Link>
                </li>
                <li>
                  <Link href="/document">
                    {" "}
                    <Receipt /> Documents
                  </Link>
                </li>
                <li>
                  <Link href="abstractTable"><ReceiptLongOutlined/> Abstract</Link>
                </li>
              </ul>
            </div>
          </div>
        

        <div className="">
          <div className="flex justify-between w-full pr-5 py-2 border-b-4 border-gray-900">
            <button onClick={handleToggleSidebar}>
              <MenuOpen />
            </button>

            <div className="flex items-center gap-2 ">
              <Avatar />
              <Logout />
            </div>
          </div>
          <div className=" bg-gray-200 h-screen p-2 w-full">
             {children}
          </div>
          
        </div>


        {showSidebar && (
            <div className="bg-black left-0 top-0 absolute text-white w-1/2  md:hidden  transition-all duration-300 ease-in-out">
              <div className=" flex items-center gap-2 justify-center h-16 w-full bg-black">
                <DashboardCustomize />
                <h1>Admin Dashboard k</h1>

                <button onClick={handleToggleSidebar}>
                <MenuOpen />
              </button>
              </div>

              <div className="mt-10 flex flex-col items-center h-screen">
              <ul className=" flex flex-col gap-5 justify-center">

              <li>
                  <Link href="/admin">
                    <DashboardCustomizeSharp /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/userTable">
                    <People /> Registeired Users
                  </Link>
                </li>
                <li>
                  <Link href="/document">
                    {" "}
                    <Receipt /> Documents
                  </Link>
                </li>
                <li>
                  <Link href="abstractTable"><ReceiptLongOutlined/> Abstract</Link>
                </li>
              </ul>
              </div>
            </div>
          )}
      </div>
    );
}

export default AdminLayout;