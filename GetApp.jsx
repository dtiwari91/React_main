import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from "react-router-dom";
export default function GetApp() {
    // in this register function i used formik for registeration forms , navigate for naviation in the login page
    //onsubmit button for interaction with 9000 server to register user details with toekn code
    //validaionschema part of yup for validation in the form
    // const navigate = useNavigate();
    // const formik = useFormik({
    //     initialValues: {
    //         firstname: "",
    //         lastname: "",
    //         email: "",
    //         phone: "",
    //     },
    //     onSubmit: values => {
    //         // console.log(values);
    //         fetch("http://localhost:9000/auth/register", {
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(values)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 // console.log(data)
    //                 if (data.status === 200) {
    //                     localStorage.setItem("jwt_token", data.access_token)
    //                     // localStorage.setItem("user_info", JSON.stringify(data.userData))
    //                     alert("You have registered successfully!")
    //                     navigate("/login")
    //                 }
    //             })
    //             .catch((e) => console.log("Catch block executed"))
    //             .finally(console.log("Finally executed"))
    //     },
    //     validationSchema: yup.object().shape({
    //         firstname: yup.string()
    //             .min(3, "First name is too short")
    //             .max(10, "First name is too long")
    //             .required("Firstname cannot be left blank"),
    //         lastname: yup.string()
    //             .min(3, "Last name is too short")
    //             .max(10, "Last name is too long")
    //             .required("lastname cannot be left blank"),
    //         email: yup.string()
    //             .email("Invalid email address")
    //             .max(20, "Email is too Long")
    //             .required("Email cannot be left blank"),
    //         phone: yup.string()
    //             .max(10, "Please enter 10 digits only")
    //             .required("Phone cannot be left blank"),
    //     })
    // })
    return (
        <div className="container  mb-1" style={{ paddingBottom: "2em", marginTop: "-2em" }}>
            <div class="d-flex align-items-center mb-3 pb-1">

                <i class="fa-solid fa-wallet fa-5x" style={{ color: "#178EBE", marginLeft: "6.5em", marginTop: "1em", marginBottom: "-0.5em" }}></i>

            </div>

            <div className="row">

                <div className="col-md-4 offset-md-4">
                    <div className="text-light py-3 mt-5 text-center rounded" style={{ backgroundColor: "#178EBE" }}>
                        <h2>Get the App</h2>
                    </div>
                    {/* <form onSubmit={formik.handleSubmit}>
                        <div className="mt-2">
                            <input id="firstname" name='firstname' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} className="form-control form-control-sm" placeholder="First Name" />
                            {formik.errors.firstname && formik.touched.firstname ? <span className='text-danger'>{formik.errors.firstname}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="lastname" name='lastname' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} className="form-control form-control-sm" placeholder="Last Name" />
                            {formik.errors.lastname && formik.touched.lastname ? <span className='text-danger'>{formik.errors.lastname}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="email" name='email' type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control  form-control-sm" value={formik.values.email} placeholder="Email" />
                            {formik.errors.email && formik.touched.email ? <span className='text-danger'>{formik.errors.email}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="phone" name='phone' type="number" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.phone} placeholder="Phone" />
                            {formik.errors.phone && formik.touched.phone ? <span className='text-danger'>{formik.errors.phone}</span> : null}
                        </div>
                        <div className="mt-2 ">
                            <button type="submit" className='btn text-light' style={{ backgroundColor: "#42145F" }}>Submit</button><br />
                        </div> */}
                    {/* </form> */}
                    <form className='mt-2'>

                        <div class="form-group mt-3">
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                        </div>
                        <div class="form-group mt-3">
                            <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Mobile Numer" />
                            <label> You will receive a text shortly containng app link. </label>
                        </div>
                        <button type="submit" class="btn btn-primary mt-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}