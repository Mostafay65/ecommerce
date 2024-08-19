import React, { useState } from 'react'
import style from './ResetPassword.module.css'
import Loader from '../Helpers/Loader'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import axios from 'axios';
import styles from '../Register/Register.module.css'
import { toast } from 'react-toastify';


const ResetPassword = () => {
  const[loading,setIsLoading] = useState(false)
  const[errorMessage,setErrorMessage] = useState(false)
  let navigate = useNavigate()
  async function callForgetPassword(callData){
    setIsLoading(true)
    setErrorMessage(false)
    try {
      let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', callData)
      console.log(data);
      toast.success(`Enter Your New Password`, {
        theme: "light",
        autoClose: 2500,
      });
      navigate('/new-password')
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message)
    }
    setIsLoading(false)
  }

  const validationSchema = Yup.object({  
    resetCode:Yup.string().required("Reset Code is Required")
  })

  let resetCodeForm = useFormik({
    initialValues:{
      resetCode:""
    },
    validationSchema,
    onSubmit:callForgetPassword
  })
  return <>
  <div className="forgerpass min-vh-100 bg-gray" id='login'>
    <div className="container min-vh-100 pt-5 w-100  d-flex justify-content-center align-items-center">
    <div className=" row mx-auto w-100 justify-content-center ">
      <div className="register-form col-8 col-md-6 col-lg-4 bg-white rounded-3 p-3 py-5">
        <h3 className='h5 text-sec mb-3'>Enter Reset Code</h3>
        {errorMessage && <div className="text-danger">{errorMessage}</div> }

        <form onSubmit={resetCodeForm.handleSubmit}>
            <div className="form-group mb-4">
            <label htmlFor="resetCode" className={`mb-1 ms-1 ${styles.textsm} `}>Reset Code</label>
            <input type="text" id='resetCode' name='resetCode' placeholder='Reset Code' className='form-control bg-gray' value={resetCodeForm.values.resetCode} onChange={resetCodeForm.handleChange} onBlur={resetCodeForm.handleBlur}/>
            {resetCodeForm.errors.resetCode && resetCodeForm.touched.resetCode ? <div className={`text-danger ms-1 ${styles.signInText}`}> {resetCodeForm.errors.resetCode} </div> :null}
            </div>
            <button  disabled={!(resetCodeForm.isValid && resetCodeForm.dirty)} className='btn btn-main w-100'>{loading ? <Loader/> : "Submit"}</button>
        </form>

          
      </div>
    </div>
    </div>
  </div>
  </>
}

export default ResetPassword
