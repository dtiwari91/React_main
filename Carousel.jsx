import React from 'react'

export default function Carousel() {

  return (

    <div className='container-fluid g-0 mt-4'>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="https://venmo.com/send-receive/tips-tricks/" target={"blank"} rel="noreferrer"><img src="./assets/carousel/car16.PNG" class="d-block w-100" alt="..." /></a>

          </div>
          <div className="carousel-item active">
            <a href="https://venmo.com/send-receive/tips-tricks/" target={"blank"} rel="noreferrer"><img src="./assets/carousel/car7.PNG" class="d-block w-100" alt="..." /></a>
          </div>
          <div className="carousel-item active">
            <a href="https://venmo.com/send-receive/tips-tricks/" target={"blank"} rel="noreferrer"><img src="./assets/carousel/car4.PNG" class="d-block w-100" alt="..." /></a>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>



  )
}

