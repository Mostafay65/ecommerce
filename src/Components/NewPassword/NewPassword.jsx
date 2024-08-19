import React, { useContext, useState } from 'react'
import style from './NewPassword.module.css'
import Loader from '../Helpers/Loader'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import axios from 'axios';
import styles from '../Register/Register.module.css'
import { toast } from 'react-toastify';
import { TokenContext } from '../Context/Token';

const NewPassword = () => {
  const[loading,setIsLoading] = useState(false)
  const[errorMessage,setErrorMessage] = useState(false)
  let {setToken,token} = useContext(TokenContext)
  let navigate = useNavigate()
  async function callNewPassword(callData){
    setIsLoading(true)
    setErrorMessage(false)
    try {
      let {data} = await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', callData)
      console.log(data);
      toast.success(`Password Changed Successfuly`, {
        theme: "light",
        autoClose: 2500,
      });
      if(token){
        setToken(data.token);
        localStorage.setItem("userToken",data.token)
        navigate('/home')
      }else{
        navigate('/login')
      }
      // navigate('/reset-password')
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message)
    }
    setIsLoading(false)
  }

  const validationSchema = Yup.object({  
    email:Yup.string().required("Email Code is Required"),
    newPassword:Yup.string().required("Reset Code is Required")
  })

  let newPasswordForm = useFormik({
    initialValues:{
      email:"",
      newPassword:""
    },
    validationSchema,
    onSubmit:callNewPassword
  })
  return <>
  <div className="new-pass min-vh-100 bg-gray" id='login'>
    <div className="container min-vh-100 pt-5 w-100  d-flex justify-content-center align-items-center">
    <div className=" row mx-auto w-100 justify-content-center ">
      <div className="register-form col-8 col-md-6 col-lg-4 bg-white rounded-3 p-3 py-5">
        <h3 className='h5 text-sec mb-3'>Reset Your Password</h3>
        {errorMessage && <div className="text-danger">{errorMessage}</div> }

        <form onSubmit={newPasswordForm.handleSubmit}>

            <div className="form-group mb-4">
            <label htmlFor="email" className={`mb-1 ms-1 ${styles.textsm} `}>Email</label>
            <input type="email" id='email' name='email' placeholder='Email' className='form-control bg-gray' value={newPasswordForm.values.email} onChange={newPasswordForm.handleChange} onBlur={newPasswordForm.handleBlur}/>
            {newPasswordForm.errors.email && newPasswordForm.touched.email ? <div className={`text-danger ms-1 ${styles.signInText}`}> {newPasswordForm.errors.email} </div> :null}
            </div>

            <div className="form-group mb-4">
            <label htmlFor="newPassword" className={`mb-1 ms-1 ${styles.textsm} `}>New Password</label>
            <input type="password" id='newPassword' name='newPassword' placeholder='New Password' className='form-control bg-gray' value={newPasswordForm.values.newPassword} onChange={newPasswordForm.handleChange} onBlur={newPasswordForm.handleBlur}/>
            {newPasswordForm.errors.newPassword && newPasswordForm.touched.newPassword ? <div className={`text-danger ms-1 ${styles.signInText}`}> {newPasswordForm.errors.newPassword} </div> :null}
            </div>

            <button  disabled={!(newPasswordForm.isValid && newPasswordForm.dirty)} className='btn btn-main w-100'>{loading ? <Loader/> : "Submit"}</button>
        </form>

          
      </div>
    </div>
    </div>
  </div>
  </>
}

export default NewPassword
