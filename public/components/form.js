import React from "react";
import { createGlobalStyle } from 'styled-components';

function Form() {
  return (
      <div class="col-md-6">
        <form action="">
          <aside class="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input
              id="contactName"
              type="email"
              class="form-control"
              // id= "exampleFormControlInput1"
              placeholder="John Doe"
            />
          </aside>

          <aside class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              id="contactEmail"
              type="email"
              class="form-control"
              placeholder="johndoe@example.com"
            />
          </aside>

          <aside class="form-group">
            <label for="exampleFormControlTextarea1">Message/Inquiry</label>
            <textarea
              id="contactMessage"
              class="form-control"
              // id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </aside>

          <br />
          <br />
          <br />
          {/* <a href=""> */}
            <button type="button" id="SubmitButton" class="btn btn-dark">
              Send <i class="far fa-paper-plane"></i>
            </button>
          {/* </a> */}
        </form>
      </div>
  );
}

export default Form;