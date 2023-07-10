import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from "react-router-dom";
// import './Login.css'


// login function crated //
export default function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        // below function  when clicked on login page (onsubmit) created to validate the user details with server

        onSubmit: values => {
            // console.log("submit");
            fetch("http://localhost:9000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // console.log(data.access_token);



                    if (data.status === 200) {
                        localStorage.setItem("jwt_token", data.access_token)
                        localStorage.setItem("user_info", JSON.stringify(data.userData))
                        alert("Welcome! Logged in succcessfully !")
                        navigate("/")
                    } else {
                        alert("Invalid details entered!")
                        // when status =200 and user details verified with server it will navigate to logged in home page
                    }


                })

        },
        // yup used for login vaidation 

        validationSchema: yup.object().shape({
            email: yup.string()
                .email("Invalid email address")
                .required("Email cannot be left blank"),
            password: yup.string()
                .required("Password cannot be left blank"),


        })
    })
    return (

        // // Below is formik functionality used and careted a form
        <section class="vh-100" style={{ backgroundColor: "#D7E2ED" }}>
            <div class="container  h-100 mt-4">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10">
                        <div class="card" style={{ borderRadius: "1rem" }}>
                            <div class="row g-0">
                                <div class="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://images.unsplash.com/photo-1556742521-9713bf272865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                        alt="login form" class="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                </div>
                                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5 text-black">

                                        <form onSubmit={formik.handleSubmit}>

                                            <div class="d-flex align-items-center mb-3 pb-1">

                                                <i class="fa-solid fa-wallet fa-5x" style={{ color: "#178EBE", marginLeft: "2em" }}></i>

                                            </div>

                                            <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px;", textAlign: "center", fontFamily: "fantasy", color: "#14789A" }}>Sign into your account</h5>

                                            <div className="mt-2">
                                                <input id="email" autocomplete="off" name='email' type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control  form-control-sm" value={formik.values.email} placeholder="Email" />
                                                {formik.errors.email && formik.touched.email ? <span className='text-danger'>{formik.errors.email}</span> : null}
                                            </div>

                                            <div className="mt-2">
                                                <input id="password" autocomplete="off" name='password' type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.password} placeholder="Password" />
                                                {formik.errors.password && formik.touched.password ? <span className='text-danger'>{formik.errors.password}</span> : null}
                                            </div>
                                            <br />
                                            <div class="pt-1 mb-4">
                                                <button class="btn btn-dark btn-lg btn-rounded" type="submit" style={{ backgroundColor: "#178EBE" }}>Login</button>
                                            </div>


                                            <p class="mb-5 pb-lg-2 sm-4" style={{ color: "#F51207", }}>Don't have an account? <Link to="/register"
                                                style={{ color: "#393f81" }}>Register here</Link></p>
                                            <a href="https://venmo.com/legal/us-privacy-policy/" target={"_blank"} class="small text-muted">Terms of use.</a>
                                            <a href="https://venmo.com/legal/us-privacy-policy/" target={"_blank"} class="small text-muted">Privacy policy</a>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
