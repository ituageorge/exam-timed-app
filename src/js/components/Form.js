import React, { Component } from "react";
import ReactDOM from "react-dom";

// class Form extends Component {
//   constructor() {
//     super();

//     this.state = {
//       value: ""
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     const { value } = event.target;
//     this.setState(() => {
//       return {
//         value
//       };
//     });
//   }

//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           value={this.state.value}
//           onChange={this.handleChange}
//         />

// <input type="file"  accept="image/*" name="image" id="file"/>
//       </form>
//     );
//   }
// }

// export default Form;


const LoginForm = () => {
  return (
    <section className="form">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-5">
            <img src="" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="font-weight-bold">Timed Exam Application</h1>
            <h4>Sign into your account</h4>
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
                  <button type="button" className="btn1 btn1 mt-3 mb-5">
                    Login
                  </button>
                </div>
              </div>
              <a href="#">Forgot password</a>
              <p>
                Don't have an account? <a href="">Register here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;


// const wrapper = document.getElementById("container");
// wrapper ? ReactDOM.render(<LoginForm />, wrapper) : false;