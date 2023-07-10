import React from 'react'

export default function Movies() {
  return (
    <div className='container-fluid g-0 mt-5 mb-5'>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="https://in.bookmyshow.com/explore/movies-national-capital-region-ncr" target={"blank"} rel="noreferrer"><img src="./assets/carousel/car12.PNG" class="d-block w-100" alt="..." /></a>


          </div>
          <div class="carousel-item">
            <a href="https://in.bookmyshow.com/explore/movies-national-capital-region-ncr" target={"blank"} rel="noreferrer"><img src="./assets/carousel/car13.PNG" class="d-block w-100" alt="..." /></a>
          </div>
          <div class="carousel-item">
            <a href="https://in.bookmyshow.com/explore/movies-national-capital-region-ncr" target={"blank"} rel="noreferrer"><img src="./assets/carousel/car14.PNG" class="d-block w-100" alt="..." /></a>
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
