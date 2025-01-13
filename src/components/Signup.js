import React from 'react'

function Signup() {
  return (
    <>
       

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Register</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                    <form>
                    <div className="mb-3">
                        <label className="form-label">FullName</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">UserName</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone No.</label>
                        <input type="tel" className="form-control" id="exampleInputPassword1" maxLength={10}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"   minLength={8} maxLength={16}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Confirm-Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"   minLength={8} maxLength={16}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Signup</button>
                    </form>
          </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Signup