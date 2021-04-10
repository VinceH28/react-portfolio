import React from "react";
import { projects } from "../../Information.js";
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';

function PortfolioCard() {

  return projects.map((project) => {
    return (
      <section className="container">
      <section className="row">
      <div className="card mb-3 wholeCard">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="image-fluid mx-auto d-block imageStyling"
              src={project.image}
              alt={project.alt}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text text-left">{project.description}</p>
              <p className="card-text cardCenter">
              <small className="text-muted">{project.languages}</small>
              </p>
              <a href={project.deployed} target="_blank" rel="noreferrer">
                <button type="button" className="btn btn-dark marginRight">
                  <i className="fas fa-sun"></i> Deployed
                </button>
              </a>
              <a href={project.gitHub} target="_blank" rel="noreferrer">
                <button type="button" className="btn btn-dark marginLeft">
                  <i className="fab fa-github"></i> Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>
      </section>
    );
  });
}
export default PortfolioCard