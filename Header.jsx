import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./Header.css"


export default function Header() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user_info'))
    console.log(user)

    function logout() {
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('user_info');
        // localStorage.clear()
        navigate("/login")
    }


    return (
        <div className='container'>
            {/* //     <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: "#178EBE" }} aria-label="Fourth navbar example">
        //         <div className="container-fluid" >
        //             <img id="logo" src="./assets/pic2.PNG" alt="" />
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarsExample04" >
        //                 <ul className="navbar-nav me-auto mb-2 mb-md-0 clo-12"> */}
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: "#178EBE" }} >
                {/* <div className='mx-auto d-sm-flex d-block flex-sm-nowrap'> */}
                <div className="container-fluid">
                    <img id="natwest" src="./assets/pic2.PNG" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            {
                                localStorage.getItem('user_info') ?
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" to="/send">Send & Receive </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" to="/movies" >Movies</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" to="/food" >Food & Beverages</Link>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link fw-bold" href="https://www.apollopharmacy.in/?utm_source=google&utm_medium=srnb&campaignid=13445601726&adgroupid=122960386683&keyword=medicine%20online&device=c&adtype=&product_id=&utm_campaign=Apollo_Pharmacy_Non-Brand_Delhi_NCR_New&utm_content=Meds%20Online%20EM&gclid=CjwKCAiA7IGcBhA8EiwAFfUDsYPO0dy4ETak4iwrObJkyWHtQSgkT27CrcyoFRmdkdnKAb17JyAJIBoC5jEQAvD_BwE" target={"blank"} rel="noreferrer">Medicines</a>
                                        </li>



                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" to="/payment" >Payment Options</Link>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link fw-bold" href="https://help.venmo.com/hc/en-us/requests/new?ticket_form_id=624807" target={"blank"} rel="noreferrer">
                                                Contact Us
                                            </a>
                                        </li>
                                    </>
                                    :

                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" to="/login"> Login</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" to="/register">Register</Link>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link fw-bold" href="https://help.venmo.com/hc/en-us/requests/new?ticket_form_id=624807" target={"blank"} rel="noreferrer">
                                                Contact Us
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" to="/getApp">
                                                <button style={{ size: "small", cursor: "pointer", display: "inline-block", background: "#e7e7e7", marginLeft: "35em", fontSize: "15px", borderRadius: "12px", boxShadow: " 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)", border: "none" }}> Download our App</button>
                                            </Link>
                                        </li>

                                    </>
                            }
                        </ul>


                        {localStorage.getItem('user_info') ?
                            <div className='d-flex me-2'>
                                <button style={{ cursor: "pointer", borderRadius: "12px", boxShadow: " 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }} className='btn btn-light me-2 text-dark'> Welcome {user.firstname} </button>
                                <button className='btn btn-light text-dark' type='submit' onClick={logout} style={{ cursor: "pointer", display: "inline-block", background: "#e7e7e7", borderRadius: "12px", boxShadow: " 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)", border: "none", backGround: "#ECD3A8" }}>Logout</button>
                            </div>
                            : null
                            /* {localStorage.getItem('user_info') ?
                            <div className='d-flex me-2'>
                                <button className='btn btn-light me-2 text-dark'> {user.email} </button>
                                <button className='btn btn-light text-dark' type='submit' onClick={logout}>Logout</button>
                            </div>
                            : null */
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

