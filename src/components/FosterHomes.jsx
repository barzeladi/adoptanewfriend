import React from "react";
// import Img from "../images/fosterdog.jpg";

function FosterHomes() {
  return (
    <div className="FosterHomes">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="/images/fosterdog.jpg"  style={{height:"400px" ,width:"400px"}}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Foster Homes - hosting animals at home can save lives</h1>
            <p>
              Interested in raising a dog\cat but can not commit? Want to save a life with a short-term investment? Have you never raised a dog\cat and want to experiment and find out what it entails? Being a foster home is the ultimate solution for you.
              A foster home is temporary accommodation of a dog\cat in your home, for a short period and without obligation.
              The number of cages in kennels is limited. Also, many dogs do not survive in a kennel. Puppies, kittens, adult dogs\cats and weak dogs\cats must have a home in order to survive. In addition, only a dog from a foster home can participate in adoption days.
              Hosting a dog\cat in your home even for a short period of two weeks, is his springboard to life at home. For life in general.
              Did you fall in love with the dog? Have you found out that you are able to commit to the dog you have for the next 20 years ?! Adopt the dog you already know, no surprises and no disappointments.
              Fill in details and contact the kennel closest to your place of residence today, save a life and you will win a new friend who will remember you forever.
            </p>
          </div>
        </div>
        <br/>
        <form>
          <div class="row">
            <div class="col">
              <h4>Tell us about you</h4>
              <div class="form-group">
                <label for="text1">Where will the dog live?</label>
                <input id="text1" name="text1" type="text" required="required" class="form-control" />
              </div>
              <div class="form-group">
                <label for="text">Who lives at home?</label>
                <input id="text" name="text" type="text" required="required" class="form-control" />
              </div>
              <div class="form-group">
                <label for="text2">Additional pets:</label>
                <input id="text2" name="text2" type="text" required="required" class="form-control" />
              </div>
              <div class="form-group">
                <label for="text3">Experience in raising dogs in the past</label>
                <input id="text3" name="text3" type="text" required="required" class="form-control" />
              </div>
              <div class="form-group">
                <label for="text4">Additional comments:</label>
                <input id="text4" name="text4" type="text" required="required" class="form-control" />
              </div>
            </div>
            <div class="col">
              <h4>Contact info</h4>
              <div class="form-group">
                <label for="text5">Full name:</label>
                <input id="text5" name="text5" type="text" class="form-control" required="required" />
              </div>
              <div class="form-group">
                <label for="text6">Telephone number:</label>
                <input id="text6" name="text6" type="text" class="form-control" required="required" />
              </div>
              <div class="form-group">
                <label for="text7">Email address:</label>
                <input id="text7" name="text7" type="text" class="form-control" required="required" />
              </div>
              <div class="form-group">
                <label for="text8">Residential address:</label>
                <input id="text8" name="text8" type="text" class="form-control" required="required" />
              </div>
              <div class="form-group">
                <button name="submit" type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>



  );
}

export default FosterHomes;
