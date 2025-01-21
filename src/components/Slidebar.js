import React from 'react'
import { Link } from 'react-router-dom'

function Slidebar() {
  return (
    <>
        <div className="offcanvas offcanvas-start wt" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header tps" data-bs-dismiss="offcanvas" aria-label="Close">
            <h5 className="offcanvas-title mre" id="offcanvasWithBothOptionsLabel"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg> Previous</h5>
            {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
        </div>
        <div className="offcanvas-body">
        <div className='left bt7'>
              
               <Link to="/winbuzz-clone/page2"><button className="btn btn-primary bt7" type="button">Cricket</button></Link>
               <Link to="/winbuzz-clone/page2"><button className="btn btn-primary bt7" type="button">Football</button></Link>
               <Link to="/winbuzz-clone/page2"><button className="btn btn-primary bt7" type="button">Tennis</button></Link>
               <Link to="/winbuzz-clone/page2"><button className="btn btn-primary bt7" type="button">Pobuttontics</button></Link>
               <Link to="/winbuzz-clone/page2"><button className="btn btn-primary bt7" type="button">Casino</button></Link>
               <Link to="/winbuzz-clone/page2"><button className="btn btn-primary bt7" type="button">Int Casino</button></Link>
               <Link to="/winbuzz-clone/page2"><button className="btn btn-primary bt7" type="button">Sports book</button></Link>
               <Link to="/winbuzz-clone/page2"><button className="btn btn-primary bt7" type="button">Horse Racing</button></Link>
               <Link to="/winbuzz-clone/page2"><button className="btn btn-primary bt7" type="button">Binary</button></Link>
               <Link to="/winbuzz-clone/page2"><button className="btn btn-primary bt7" type="button">Volleyball</button></Link>
              
        </div>
        </div>
        </div>
    </>
  )
}

export default Slidebar