import React, { useState } from 'react';

import { Formik, Field, Form ,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LuEyeClosed } from "react-icons/lu";
import "../style/login.css"

export default function Login() {

let [showHidePassword ,changeShowHidePassword]=useState(false)



const validationSchema = Yup.object({
   email: Yup.string().email("Not valid Email").required("Email is required"),
   password:Yup.string().min(8, 'Password at least 8 charachters')
   .max(50, 'Password not more than 50 charachter').required("Password must be at least 8 charachters")

})


   const initialValues = {
    email: "",
    password:""
 }

 const onSubmit = (values)=>{
     console.log(values);
     
 }




    return(
        <div className='form'>
         <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
           {(formik)=>(
                 <Form>
                   { console.log(formik)}
                 <label htmlFor="email">Email</label> 
                 <Field name={"email"} className={"email"}/>
                 <ErrorMessage name="email" component="div" className='error' />
                 <label htmlFor="password">Password</label> 
                 <div className={"password_wrapper"}>
                     <Field name = {"password"}  type={showHidePassword ? "text" : "password"} className='password'/>
                     <LuEyeClosed className='icon' onClick={()=>
                        changeShowHidePassword(!showHidePassword)}/>
                                         <ErrorMessage name="password" component="div" className='error' />

                     </div>
                 <button type='submit'>Login</button>
             </Form>
    )}
         </Formik>
        
        </div>
    )
}