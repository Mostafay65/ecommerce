import React, { useContext, useState } from "react";
import styles from "../Register/Register.module.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { TokenContext } from "../Context/Token";
import Loader from "../Helpers/Loader";

const ChangePassword = () => {
  const [loading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let { token, setToken } = useContext(TokenContext);
  let navigate = useNavigate();

  async function callResetPassword(callBody) {
    setErrorMessage("");
    setIsLoading(true);

    try {
      let { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
        callBody,
        {
          headers: {
            token,
          },
        }
      );
      console.log(data);
      if (data.message == "success") {
        setToken(data.token);
        localStorage.setItem("userToken",data.token);
        navigate("/home");
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err,"eror from here");
      
      setErrorMessage(err.response?.data?.errors?.msg || "An error occurred");
    }
  }

  const validationSchema = Yup.object({
    currentPassword: Yup.string().required("Current Password is Required"),
    password: Yup.string().required("Password is Required"),
    rePassword: Yup.string().required("Password is Required"),
  });

  const registerForm = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      callResetPassword(values);
    },
  });

  return (
    <div className="register min-vh-100 bg-gray" id="register">
      <div className="container min-vh-100 pt-5 w-100 d-flex justify-content-center align-items-center">
        <div className="row mx-auto w-100 justify-content-center">
          <div className="register-form col-8 col-md-6 col-lg-4 bg-white rounded-3 p-3 pb-4">
            <h3 className="h5 text-main text-center mb-4">Change Password</h3>
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
            <form onSubmit={registerForm.handleSubmit}>
              <div className="form-group mb-2">
                <label
                  htmlFor="currentPassword"
                  className={`mb-1 ${styles.textsm}`}
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  placeholder="Current Password"
                  className="form-control bg-gray"
                  value={registerForm.values.currentPassword}
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                />
                {registerForm.errors.currentPassword &&
                registerForm.touched.currentPassword ? (
                  <div className={`text-danger ms-1 ${styles.signInText}`}>
                    {registerForm.errors.currentPassword}
                  </div>
                ) : null}
              </div>

              <div className="form-group mb-2">
                <label htmlFor="password" className={`mb-1 ${styles.textsm}`}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="form-control bg-gray"
                  value={registerForm.values.password}
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                />
                {registerForm.errors.password &&
                registerForm.touched.password ? (
                  <div className={`text-danger ms-1 ${styles.signInText}`}>
                    {registerForm.errors.password}
                  </div>
                ) : null}
              </div>

              <div className="form-group mb-2">
                <label htmlFor="rePassword" className={`mb-1 ${styles.textsm}`}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="rePassword"
                  name="rePassword"
                  placeholder="Confirm Password"
                  className="form-control bg-gray"
                  value={registerForm.values.rePassword}
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                />
                {registerForm.errors.rePassword &&
                registerForm.touched.rePassword ? (
                  <div className={`text-danger ms-1 ${styles.signInText}`}>
                    {registerForm.errors.rePassword}
                  </div>
                ) : null}
              </div>

              <p
                className={`text-secondary ms-auto d-block my-3 px-1 ${styles.registerP}`}
              >
                Forgot Password?
              </p>
              <button
                disabled={!(registerForm.isValid && registerForm.dirty)}
                className="btn btn-main w-100"
              >
                {loading ? <Loader /> : "Change Password"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChangePassword;
