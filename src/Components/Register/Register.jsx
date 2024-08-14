import React, { useState } from 'react'
import styles from './Register.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Loader from '../Helpers/Loader';


const Register = () => {
  const[loading,setIsLoading] = useState(false)
  const[errorMessage,setErrorMessage] = useState(false)
  let navigate = useNavigate()
  async function callRegister(callBody){
    setErrorMessage("");
    setIsLoading(true);
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,callBody)
    .catch(err =>{
      setIsLoading(false);    
     setErrorMessage(err.response.data.message);
   })
    console.log(data);
    if(data.message === "success"){
     navigate('/login')
    }
   }
  const validationSchema = Yup.object({  
    name: Yup.string().min(5,"Name is short").max(50,"Name is long").required("Name is required"),
    email:Yup.string().email("Email Not Valid").required("Email is Required"),
    password:Yup.string().required('Password Rquired').min(8,"Password is short"),
    rePassword:Yup.string().required("Is required").oneOf([Yup.ref('password')]," should match Password"),
    phone:Yup.string().required("Phone Required").matches(/^01[0125][0-9]{8}/,"Phone Number should start with 01 and contain 9 numbers")
  })
 const registerForm = useFormik({
  initialValues:{
    name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:""
  },
  validationSchema,
  onSubmit:callRegister
  
})
  return <>
  <div className="register py-5 min-vh-100 bg-gray" id='register'>
    <div className="container pt-5 w-100  d-flex justify-content-center align-items-center">
    <div className=" row mx-auto w-100 justify-content-center ">
      <div className="register-form col-8 col-md-6 col-lg-4 bg-white rounded-3 p-3">
        <h3 className='h5 text-sec mb-3'>Create An Account</h3>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div> }
        
        <form onSubmit={registerForm.handleSubmit}>
            <div className="form-group mb-2">
            <label htmlFor="FullName" className={`mb-1 ${styles.textsm} `}>Full Name</label>
            <input type="text" id='FullName' name='name' placeholder='Name' className='form-control bg-gray' value={registerForm.values.name} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur}/>
            {registerForm.errors.name && registerForm.touched.name ? <div className={`text-danger ms-1 ${styles.signInText}`}> {registerForm.errors.name} </div> :null}
            </div>

            <div className="form-group mb-2">
            <label htmlFor="FullName" className={`mb-1 ${styles.textsm} `}>Email</label>
            <input type="email" id='Email' name='email' placeholder='Email' className='form-control bg-gray' value={registerForm.values.email} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur}/>
            {registerForm.errors.email && registerForm.touched.email ? <div className={`text-danger ms-1 ${styles.signInText}`}> {registerForm.errors.email} </div> :null}
            </div>

            <div className="form-group mb-2">
            <label htmlFor="password" className={`mb-1 ${styles.textsm} `}>Password</label>
            <input type="password" id='password' name='password' placeholder='Password' className='form-control bg-gray' value={registerForm.values.password} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur}/>
            {registerForm.errors.password && registerForm.touched.password ? <div className={`text-danger ms-1 ${styles.signInText}`}> {registerForm.errors.password} </div> :null}
            </div>

            <div className="form-group mb-2">
            <label htmlFor="rePassword" className={`mb-1 ${styles.textsm} `}>Confirm Password</label>
            <input type="password" id='rePassword' name='rePassword' placeholder='Confirm Password' className='form-control bg-gray' value={registerForm.values.rePassword} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur}/>
            {registerForm.errors.rePassword && registerForm.touched.rePassword ? <div className={`text-danger ms-1 ${styles.signInText}`}> {registerForm.errors.rePassword} </div> :null}
            </div>

            <div className="form-group mb-2">
            <label htmlFor="phone" className={`mb-1 ${styles.textsm} `}>Phone</label>
            <input type="tel" id='phone' name='phone' placeholder='Phone' className='form-control bg-gray' value={registerForm.values.phone} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur}/>
            {registerForm.errors.phone && registerForm.touched.phone ? <div className={`text-danger ms-1 ${styles.signInText}`}> {registerForm.errors.phone} </div> :null}
            </div>

            <p className={`text-secondary text-center my-3 ${styles.registerP}`}>By signing up, you confirm that you’ve read and accepted our User Notice and Privacy Polic</p>
            <button  disabled={!(registerForm.isValid && registerForm.dirty)} className='btn btn-main w-100'>{loading ? <Loader/> : "Register"}</button>
        </form>
        <p className={`${styles.registerP} text-secondary text-center my-4 text-uppercase`}>or sign up with</p>
        <div className="btns mb-3 d-flex gap-2">
          <button className={`btn border rounded-1 py-2 w-50 ${styles.registerBtns}`}>
            <i className='fab fa-google accordion me-1 ' style={{color : '#DB4437'}}></i>
            Google
          </button>
          <button className={`btn border rounded-1 py-2 w-50 ${styles.registerBtns}`}>
            <i className='fab fa-facebook-square me-1 ' style={{color : '#4267B2'}}></i>
            Facebook
          </button>
        </div>
          <p className={`text-center text-sec ${styles.signInText} `}>
          Already have an account? <Link className='text-main text-decoration-none ' to={'/login'}>Sign in now</Link>
          </p>
        
      </div>
    </div>
    </div>
  </div>
  </>
}

export default Register
