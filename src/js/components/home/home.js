import React from 'react';

const HomePage = () => {
  return (
    <section className="form">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-5">
            <img src="" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="font-weight-bold">Logo</h1>
            <h4>Please answer correctly</h4>

            <div className="jumbotron">
              <h1 className="display-4">Hello, world!</h1>
              <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-4" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
