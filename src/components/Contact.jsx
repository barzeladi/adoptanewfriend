import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <h1> Contact Us <br/>
  <small>for additional information or questions</small>
            </h1>
            <section class="contact-wrap">
              <form action="" class="contact-form">
                <div class="col-sm-6">
                  <div class="input-block">
                    <label for="">First Name</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block">
                    <label for="">Last Name</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="input-block">
                    <label for="">Email</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="input-block">
                    <label for="">Message Subject</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="input-block textarea">
                    <label for="">Drop your message here</label>
                    <textarea rows="3" type="text" class="form-control"></textarea>
                  </div>
                </div>
                <div class="col-sm-12">
                  <button class="square-button">Send</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
