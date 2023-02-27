import { Card, Paper } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const PaymentFile = ({data, dataType}) => {

   
  return (
    <div>
        <h1 className=" text-[20px] uppercase font-extrabold">{dataType} files {data.length}</h1>
       
        <div className="">
            
        
        </div>

        <Paper elevation={3} className='p-5'>
            {
                data.length === 0 ? (<h2>loading...</h2>) : 
                (<div>
                    {data?.map((each, index) => {
                       
                        return (
                        <Card className="flex gap-5 mb-5" key={index}>
                            <div className="">
                                
                            </div>
                            <div className="">
                                <p>Sender Email: {each.email}</p>
                                <p>
                                    <span className=''>Submited on {new Date(each.createdAt).getDate()}-{new Date(each.createdAt).getMonth() + 1}-{new Date(each.createdAt).getFullYear()}</span>
                                </p>
                                <div className="flex gap-3 mb-1 text-sm ">
                                    <div className="">
                                        <p className='border p-1 rounded bg-blue-700 text-white text-center'><Link target='_blank' href={each.paymentFileLink.image1}>Evidence of Payment</Link></p>

                                    </div>

                                    <div className="">
                                      {each.paymentFileLink.image2 === '' ? '' : (
                                        <p className='border p-1 rounded bg-blue-700 text-white text-center'><Link target='_blank' href={each.paymentFileLink.image2}>Submitted File </Link></p>
                                        )}
                                    </div>
                                </div>
                               
                            </div>
                        </Card>
                    )}) }
                
               </div>)
            }
        
        </Paper>
    </div>
  )
}

export default PaymentFile