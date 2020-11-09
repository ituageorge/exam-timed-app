import React from "react";

const Login = () => {

    return(
        <div className="container">
            <form action="">
                <h1>Login Form</h1>
                <div className="form-group">
                    <label htmlFor="">
                        Email id
                    </label>
                    <input type="text" className="form-control" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="">
                        Password
                    </label>
                    <input type="password" className="form-control" required/>
                </div>
                <input type="submit" className="btn" value="Login"/>
            </form>
        </div>

    )
}