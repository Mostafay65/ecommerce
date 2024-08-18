import React, { useContext, useState } from 'react'
import styles from '../Register/Register.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TokenContext } from '../Context/Token';
import Loader from '../Helpers/Loader';


const Login = () => {
  const[loading,setIsLoading] = useState(false)
  const[errorMessage,setErrorMessage] = useState(false)

  let {setToken} = useContext(TokenContext)

  let navigate = useNavigate()
  let admin = {
    name:"admin",
    email:"admin@gmail.com",
    password:"12345678",
  }
  async function callLogin(callBody){
    console.log(admin.email == callBody.email);
    
    if(admin.email == callBody.email && admin.password == callBody.password){
      navigate('/allusers')
      localStorage.setItem("userName",admin.name)
      setToken(admin.name)
      return
    }
    setErrorMessage("");
    setIsLoading(true);
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,callBody)
    .catch(err =>{
      setIsLoading(false);    
     setErrorMessage(err.response.data.message);
   })
    console.log(data);
    if(data.message === "success"){  
      localStorage.setItem("userToken",data.token)
      localStorage.setItem("userName",data.user.name)
      setToken(data.token)
      navigate('/home')
    }
   }
  const validationSchema = Yup.object({  
    email:Yup.string().required("Email is Required"),
    password:Yup.string().required('Password Rquired')
  })
 const registerForm = useFormik({
  initialValues:{
    email:"",
    password:"",
  },
  validationSchema,
  onSubmit:callLogin
  
})
  return <>
  <div className="register min-vh-100 bg-gray" id='register'>
    <div className="container  min-vh-100 pt-5 w-100  d-flex justify-content-center align-items-center">
    <div className=" row mx-auto w-100 justify-content-center ">
      <div className="register-form col-8 col-md-6 col-lg-4 bg-white rounded-3 p-3">
        <h3 className='h5 text-sec mb-3'>Sign in</h3>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div> }
        
        <form onSubmit={registerForm.handleSubmit}>
            <div className="form-group mb-2">
            <label htmlFor="Email" className={`mb-1 ${styles.textsm} `}>Email</label>
            <input type="email" id='Email' name='email' placeholder='Email' className='form-control bg-gray' value={registerForm.values.email} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur}/>
            {registerForm.errors.email && registerForm.touched.email ? <div className={`text-danger ms-1 ${styles.signInText}`}> {registerForm.errors.email} </div> :null}
            </div>

            <div className="form-group mb-2">
            <label htmlFor="password" className={`mb-1 ${styles.textsm} `}>Password</label>
            <input type="password" id='password' name='password' placeholder='Password' className='form-control bg-gray' value={registerForm.values.password} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur}/>
            {registerForm.errors.password && registerForm.touched.password ? <div className={`text-danger ms-1 ${styles.signInText}`}> {registerForm.errors.password} </div> :null}
            </div>

            <p className={`text-secondary ms-auto d-block my-3 px-1  ${styles.registerP}`}>Forget Password?</p>
            <button  disabled={!(registerForm.isValid && registerForm.dirty)} className='btn btn-main w-100'>{loading ? <Loader/> : "Login"}</button>
        </form>
        <p className={`${styles.registerP} text-secondary text-center my-4 text-uppercase`}>or sign up with</p>
        <div className="btns mb-3 lex gap-2">
          <button className={`btn border rounded-1 py-2 w-100 mb-3 ${styles.registerBtns}`}>
            <i className='fab fa-google accordion me-1 ' style={{color : '#DB4437'}}></i>
            Google
          </button>
          <button className={`btn border rounded-1 py-2  w-100 ${styles.registerBtns}`}>
            <i className='fab fa-facebook-square me-1 ' style={{color : '#4267B2'}}></i>
            Facebook
          </button>
        </div>
          <p className={`text-center text-sec ${styles.signInText} `}>
            Don't have account? <Link className='text-main text-decoration-none ' to={'/register'}>Sign up</Link>
          </p>
          
      </div>
    </div>
    </div>
  </div>
  </>
}

export default Login
