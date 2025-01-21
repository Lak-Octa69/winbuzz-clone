import React from 'react'
import img1 from "../assests/Image/logo.png";

function Signup() {
  return (
    <>
       

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                    <form>
                    <br></br>
                        <img src={img1}></img>
                    <div className="mb-3">
                        <br></br>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Fullname'/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Username'/>
                    </div>
                    <div className="mb-3">
                        <input type="tel" className="form-control" id="exampleInputPassword1" maxLength={10} placeholder='Phone no.'/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address'/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1"   minLength={8} maxLength={16} placeholder='Password'/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1"   minLength={8} maxLength={16} placeholder='Re-Enter'/>
                    </div>
                    <button type="submit" className="btn btn-primary lb">Signup</button>
                    <button type="submit" className="btn btn-primary lb"><a>Download APK</a></button>
                    <p className='pe'>win4betofficial@gmail.com</p>
                    </form>
          </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Signup