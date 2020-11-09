import React from 'react';

const RegistrationForm = () => {
  return (
    <section className="form">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-5">
            <img src="" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="font-weight-bold">Logo</h1>
            <h4>Register your account</h4>
            <form>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="email"
                    placeholder="Email-Address"
                    className="form-control my-3 p-4"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control my-3 p-4"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    id="file"
                    className="form-control my-3 p-4"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="col-lg-7">
                  <button type="button" className="btn1 btn1 mt-3 mb-5">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
