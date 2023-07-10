import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from "react-router-dom";
import "./Register.css"

export default function Register() {

    // in this register function used formik for registeration forms , navigate for naviation in the login page
    //onsubmit button for interaction with 9000 server to register user details with token code
    //validaionschema part of yup for validation in the form
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            address: "",
            phone: "",
            account: "",
            password: "",
            confirmpassword: ""
        },
        onSubmit: values => {
            // console.log(values);
            fetch("http://localhost:9000/auth/register", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)

                    //Result code 200- success, if found 401 - it's  failed
                    if (data.status === 200) {
                        localStorage.setItem("jwt_token", data.access_token)
                        // localStorage.setItem("user_info", JSON.stringify(data.userData))
                        alert("You have registered successfully!")
                        navigate("/login")
                    }
                })
                .catch((e) => console.log("Catch block executed"))
                .finally(console.log("Finally executed"))
        },
        validationSchema: yup.object().shape({
            firstname: yup.string()
                .min(3, "First name is too short")
                .max(10, "First name is too long")
                .required("Firstname cannot be left blank"),
            lastname: yup.string()
                .min(3, "Last name is too short")
                .max(10, "Last name is too long")
                .required("lastname cannot be left blank"),
            email: yup.string()
                .email("Invalid email address")
                .max(20, "Email is too Long")
                .required("Email cannot be left blank"),

            account: yup.string()
                .max(8, "Please enter 8 digits only")
                .required("Account number cannot be left blank"),
            address: yup.string()
                
                .required("Address cannot be left blank"),
            phone: yup.string()
                .max(10, "Please enter 10 digits only")
                .required("Phone cannot be left blank"),

            dob: yup.date()
                .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
                .required("Date of Birth Required"),

            password: yup.string()
                .required('Please Enter your password')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                ),



            confirmpassword: yup.string()
                .required()
                .oneOf([yup.ref("password"), null], "Passwords must match")
        })
    })
    return (
        <section>
            <div class="container mt-1">
                <div class="row">
                    <div class="col-sm-6 text-black" style={{ marginBottom: "5em" }}>
                        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 pt-xl-0 mt-xl-n5">
                            <form onSubmit={formik.handleSubmit}>
                                <div class="d-flex align-items-center mb-3 pb-1">

                                    <i class="fa-solid fa-wallet fa-5x" style={{ color: "#178EBE", marginLeft: "1em" }}></i>

                                </div>
                                <h2 class="fw-normal mb-3 pb-5" style={{ letterSpacing: "1px;", textAlign: "center", fontFamily: "fantasy", color: "#14789A" }}>Create your account</h2>
                                <div className="mt-2">
                                    <input id="firstname" autocomplete="off" name='firstname' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} className="form-control form-control-sm" placeholder="First Name" />
                                    {formik.errors.firstname && formik.touched.firstname ? <span className='text-danger'>{formik.errors.firstname}</span> : null}
                                </div>
                                <div className="mt-2">
                                    <input id="lastname" autocomplete="off" name='lastname' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} className="form-control form-control-sm" placeholder="Last Name" />
                                    {formik.errors.lastname && formik.touched.lastname ? <span className='text-danger'>{formik.errors.lastname}</span> : null}
                                </div>
                                <div className="mt-2">
                                    <input id="email" autocomplete="off" name='email' type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control  form-control-sm" value={formik.values.email} placeholder="Email" />
                                    {formik.errors.email && formik.touched.email ? <span className='text-danger'>{formik.errors.email}</span> : null}
                                </div>
                                <div className="mt-2">
                                    <input id="account" autocomplete="off" name='account' type="account" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control  form-control-sm" value={formik.values.account} placeholder="Account" />
                                    {formik.errors.account && formik.touched.account ? <span className='text-danger'>{formik.errors.account}</span> : null}
                                </div>
                                <div className="mt-2">
                                    <input id="address" autocomplete="off" name='address' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.address} placeholder="Address" />
                                    {formik.errors.address && formik.touched.address ? <span className='text-danger'>{formik.errors.address}</span> : null}
                                </div>
                                <div className="mt-2">
                                    <input id="phone" autocomplete="off" name='phone' type="number" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.phone} placeholder="Phone" />
                                    {formik.errors.phone && formik.touched.phone ? <span className='text-danger'>{formik.errors.phone}</span> : null}
                                </div>
                                <div className="mt-2">
                                    <input id="dob" autocomplete="off" name='dob' type="date" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.dob} placeholder="Date of Birth" />
                                    {formik.errors.dob && formik.touched.dob ? <span className='text-danger'>{formik.errors.dob}</span> : null}
                                </div>
                                <div className="mt-2">
                                    <input id="password" name='password' type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.password} placeholder="Password" />
                                    {formik.errors.password && formik.touched.password ? <span className='text-danger'>{formik.errors.password}</span> : null}
                                </div>
                                <div className="mt-2">
                                    <input id="confirmpassword"  name='confirmpassword' type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.confirmpassword} placeholder="Confirm Password" />
                                    {formik.errors.confirmpassword && formik.touched.confirmpassword ? <span className='text-danger'>{formik.errors.confirmpassword}</span> : null}
                                </div>
                                <div className="mt-2 ">
                                    <button type="submit" className='btn text-light' style={{ backgroundColor: "#178EBE" }}>Submit</button><br />
                                </div><br />
                                <p>Already Registered? <Link to="/login" class="link-info">Login here</Link></p>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-6 px-0 d-none d-sm-block">
                        <img src="https://images.unsplash.com/photo-1616077168034-ffd2b406bc08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Login image" class="w-100 vh-95" style={{ marginTop: "2em", objectFit: "cover;", objectPosition: "left;" }} />
                        <img src="https://images.unsplash.com/photo-1616077168311-a46b5d961e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Login image" class="w-100 vh-95" style={{ marginTop: "1em", marginBottom: "2em", objectFit: "cover;", objectPosition: "left;" }} />
                    </div>

                </div>
            </div>
        </section>
    )
}
