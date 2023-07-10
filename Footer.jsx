import React from 'react'

export default function Footer() {
  return (
    <div className="container-fluid g-0  position: fixed">
      <footer className="text-center text-light" style={{ backgroundColor: "#178EBE" }}>
        <div className="container pt-4 position: fixed">
          <section className="mb-4 position: fixed">

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.facebook.com/venmo/" target={"_blank"}
              role="button"
              // data-mdb-ripple-color="light"
              style={{ backgroundColor: "#FFFFFF" }}
            ><i class="fa-brands fa-facebook"></i
            ></a>


            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://twitter.com/venmo?lang=en" target={"_blank"}
              role="button"
              // data-mdb-ripple-color="dark"
              style={{ backgroundColor: "#FFFFFF" }}
            ><i className="fab fa-twitter"></i
            ></a>


            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.google.com/search?q=venmo&rlz=1C1CHBF_enIN1025IN1025&oq=&aqs=chrome.0.69i59i450l8.209039j0j7&sourceid=chrome&ie=UTF-8" target={"_blank"}
              role="button"
              style={{ backgroundColor: "#FFFFFF" }}
            ><i className="fab fa-google"></i
            ></a>


            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.instagram.com/venmo/?hl=en" target={"_blank"}
              role="button"
              style={{ backgroundColor: "#FFFFFF" }}
            // style={{backgroundColor: "#F542CB"}}
            ><i className="fab fa-instagram"></i
            ></a>



          </section>
        </div>
        <div className="text-center text-white p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          All money transmission is provided by PayPal, Inc. pursuant to  © 2021 PayPal, Inc.
          <a className="text-white" href="https://venmo.com/legal/us-licenses/">PayPal, Inc.’s licenses.</a>
        </div>
      </footer>
    </div>
  )
}
