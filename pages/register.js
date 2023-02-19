/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Layout from './Layout'
import reg from '../public/registration.jpg'
import { Reg } from '../sections'
import { Form } from '../components'


const Register = () => { 
  return (
    <Layout>
        <Reg />
        <Form />
    </Layout>
  )
}

export default Register