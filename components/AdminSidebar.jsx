import { Dashboard, DashboardCustomize, ExitToApp, MenuOpen, People, Receipt, Settings } from "@mui/icons-material";
import Link from "next/link";
import React, { useState } from "react";

const AdminSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }
  //className={`bg-gray-800 h-full w-1/5 text-white fixed top-0 left-0 lg:relative lg:h-auto lg:w-auto lg:text-black lg:bg-white lg:shadow-none transition-all duration-300 ease-in-out ${


  return (
    <>
    { 
    showSidebar && (
    <div className="bg-black text-white h-screen md:w-1/5 w-1/2 transition-all duration-300 ease-in-out">
    
        <div className="md:hidden">
        <button onClick={handleToggleSidebar}><MenuOpen/></button>
        
        </div>


    <div className=" flex items-center gap-2 justify-center h-16 w-full bg-black">
        <DashboardCustomize />
        <h1>Admin Dashboard</h1>
      </div>

      <div className="mt-10 flex flex-col justify-center items-center">
        <ul className=" flex flex-col gap-3 justify-center">
          <li>
            <Link href="">
              <People /> Registeired Users
            </Link>
          </li>
          <li>
            <Link  href=""> <Receipt /> Payment receipt</Link>
          </li>
          <li>
            <Link href="">Registeired Users</Link>
          </li>
          <li>
            <Link href="">Registeired Users</Link>
          </li>
          <li>
            <Link href="">Registeired Users</Link>
          </li>
        </ul>
      </div>
    </div>)
   }
</>
  );
};

export default AdminSidebar;
