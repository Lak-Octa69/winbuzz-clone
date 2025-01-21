import React from 'react';
import img1 from "../assests/Image/logo.png";


function Signin() {
  return (
    <>
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <form>
                    <br></br>
                    <br></br>
                    <br></br>

                    <img src={img1}></img>
                    <div className="mb-3">
                    <br></br>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address/Username'/>
                    </div>
                    <div className="mb-3">
                    <br></br>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
                    </div>
                    <button type="submit" className="btn btn-primary lb">Login</button>
                    <button type="submit" className="btn btn-primary lb">Login with Demo ID</button>
                    <button type="submit" className="btn btn-primary lb"><a>Download APK</a></button>

                    <button type="submit" className="btn btn-primary lb">Forget Password</button>
                    
                    <p className='pe'>win4betofficial@gmail.com</p>
                    </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signin