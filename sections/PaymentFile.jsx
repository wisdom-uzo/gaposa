import { Card, Paper } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const PaymentFile = ({data}) => {

    console.log(data)
  return (
    <div>
        <h1 className=" text-[20px] uppercase font-extrabold">PayMent files</h1>

        <Paper elevation={3} className='p-5'>
            {
                data.length === 0 ? (<h2>loading...</h2>) : 
                (<div>
                    {data?.map((each, index) => (
                        <Card className="flex gap-5 mb-5" key={index}>
                            <div className="">
                                <img src={each.paymentFileLink} alt="" className='w-[90px] h-[90px]' />
                            </div>
                            <div className="">
                                <p>Sender Email: {each.email}</p>
                                <p>Document Type: {each.paymentFileLink.split(".").pop() === 'png' || 'jpg' || 'jpeg' ? 'IMAGE': 
                                    each.paymentFileLink.split(".").pop() === 'pdf' ? 'PDF DOCUMENT' : 
                                    each.paymentFileLink.split(".").pop() === 'doc' ? "WORD DOC" : "UNKWON"}

                                    <span className='ml-3'> submited on {new Date(each.createdAt).getDate()}-{new Date(each.createdAt).getMonth() + 1}-{new Date(each.createdAt).getFullYear()}</span>
                                </p>

                                <p className='border rounded bg-blue-700 text-white text-center'><Link target='_blank' href={each.paymentFileLink}>View Document</Link></p>
                            </div>
                        </Card>
                    )) }
                
               </div>)
            }
        
        </Paper>
    </div>
  )
}

export default PaymentFile