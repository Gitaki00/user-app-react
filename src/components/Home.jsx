import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/1200x/18/29/f3/1829f36fef34f7195f49649872f04b21.jpg" class="d-block w-100" alt="..." height={500}></img>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/e0/13/e4/e013e4c50252ce5c5948f9063864ce54.jpg" class="d-block w-100" alt="..." height={500}></img>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/1200x/23/41/b6/2341b63412b12df8983a35316e48205b.jpg" class="d-block w-100" alt="..." height={500}></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home