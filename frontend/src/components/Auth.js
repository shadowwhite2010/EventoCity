import React from 'react'

function Auth() {
    return (
        <div className='container auth-container'>
            <div className="box">
                <div className="signin-box">
                    <h3>Sign In</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="signinemail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="signinemail" placeholder="Enter email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="signinpassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="signinpassword" placeholder="Enter password" required />
                        </div>
                        <button type="button" className="btn btn-secondary form-control logbtn">Submit</button>
                    </form>
                </div>

                <div className="signup-box">
                    <h3>Sign Up</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="fullname" className="form-label">Full name</label>
                            <input type="text" className="form-control" id="fullname" placeholder="Enter fullname" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">New Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" required />
                        </div>
                        <button type="button" className="btn btn-secondary form-control logbtn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth
