import React, { useContext, useState } from 'react'
import style from './ForgetPassword.module.css'
import Loader from '../Helpers/Loader'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import axios from 'axios';
import styles from '../Register/Register.module.css'
import { toast } from 'react-toastify';
import { TokenContext } from '../Context/Token';


const ForgetPassword = () => {
  const[loading,setIsLoading] = useState(false)
  const[errorMessage,setErrorMessage] = useState(false)
  let {token} = useContext(TokenContext)
  let navigate = useNavigate()
  async function callForgetPassword(callData){
    setIsLoading(true)
    setErrorMessage(false)
    try {
      let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', callData)
      console.log(data);
      toast.success(`${data.message}`, {
        theme: "light",
        autoClose: 2500,
      });
      navigate('/reset-password')
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message)
    }
    setIsLoading(false)
  }

  const validationSchema = Yup.object({  
    email:Yup.string().required("Email is Required")
  })

  let forgetPassForm = useFormik({
    initialValues:{
      email:""
    },
    validationSchema,
    onSubmit:callForgetPassword
  })
  return <>
  <div className="forgerpass min-vh-100 bg-gray" id='login'>
    <div className="container  min-vh-100 pt-5 w-100  d-flex justify-content-center align-items-center">
    <div className=" row mx-auto w-100 justify-content-center ">
      <div className="register-form col-8 col-md-6 col-lg-4 bg-white rounded-3 p-3 py-5">
        <h3 className='h5 text-sec mb-3'>Forget Password</h3>
        {errorMessage && <div className="text-danger">{errorMessage}</div> }

        <form onSubmit={forgetPassForm.handleSubmit}>
            <div className="form-group mb-3">
            <label htmlFor="Email" className={`mb-1 ms-1 ${styles.textsm} `}>Email</label>
            <input type="email" id='Email' name='email' placeholder='Email' className='form-control bg-gray' value={forgetPassForm.values.email} onChange={forgetPassForm.handleChange} onBlur={forgetPassForm.handleBlur}/>
            {forgetPassForm.errors.email && forgetPassForm.touched.email ? <div className={`text-danger ms-1 ${styles.signInText}`}> {forgetPassForm.errors.email} </div> :null}
            </div>
            {!token?(
              <Link to='/login' className='text-decoration-none'>
              <p className={`${styles.registerOr} text-secondary text-sm ms-1`}>Back To Login</p>
              </Link>
            ):
            (
            <Link to='/home' className='text-decoration-none'>
            <p className={`${styles.registerOr} text-secondary text-sm ms-1`}>Back To Home</p>
            </Link>
            )}
            <button  disabled={!(forgetPassForm.isValid && forgetPassForm.dirty)} className='btn btn-main w-100'>{loading ? <Loader/> : "Submit"}</button>
        </form>

          
      </div>
    </div>
    </div>
  </div>
  </>
}

export default ForgetPassword
