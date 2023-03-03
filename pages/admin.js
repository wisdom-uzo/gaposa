
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
      ADMIN DASHBORD
    </AdminLayout>
  );
}

export default AbstractTable;
