
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";





function AbstractTable() {


  
  const router = useRouter()
  useEffect(() => {

    const check =  localStorage.getItem('adminLoggedIn')
    if(!check) {
      router.push('/login')
    }
 

   
  }, [router]);


  return (
    <AdminLayout>
      <div className="p-2 bg-white mb-4">
        <h1>ADMIN DASHBOARD</h1>
      </div>

      <div className="mt-10 flex flex-col items-center h-screen ">
      <ul className=" flex gap-5 justify-center">

        <li>
          <Link href="/userTable" className=" rounded shadow bg-white font-bold p-5">
            Registeired Users
          </Link>
        </li>
        <li>
          <Link href="/document" className=" rounded shadow bg-white font-bold p-5">
            Documents
          </Link>
        </li>
        <li>
          <Link href="abstractTable" className=" rounded shadow bg-white font-bold p-5"> Abstract</Link>
        </li>
      </ul>
      </div>
    </AdminLayout>
  );
}

export default AbstractTable;
