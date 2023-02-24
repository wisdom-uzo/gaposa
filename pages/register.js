/* eslint-disable @next/next/no-img-element */
import React from 'react'
import reg from '../public/registration.jpg'
import { Reg, Layout} from '../sections'
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