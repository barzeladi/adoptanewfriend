import React from "react";
import Photo from "../img/adoption.jpg";

import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="jumbotron" style={{ height: "400px", backgroundimage: `url(${Photo})` }}>
          {/* <h1 class="display-4">Hello, world!</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
          {/* <a class="btn btn-info btn-lg" href="#" role="button">Click here to adopt a new friend!</a> */}


          <Link class="btn btn-info btn-lg" to={`/animals`}>Click here to adopt a new friend!</Link>


        </div>
        <br />
        <div class="container">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=MQGvBmuo" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/11_November/11-23/Heart+Disease+in+Cats+_+Learning+the+Symptoms+and+Treatments+_+ASPCA+Pet+Health+Insurance+_+ginger+cat+lying+on+a+couch-min.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/cat-close-to-screen.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Home;
