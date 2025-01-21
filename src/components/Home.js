import React from 'react'
import i1 from "../assests/Image/i1.gif"
import i2 from "../assests/Image/i2.gif"
import i3 from "../assests/Image/i3.webp"
import i4 from "../assests/Image/i4.webp"
import i5 from "../assests/Image/i5.webp"
import i6 from "../assests/Image/i6.webp"
import i7 from "../assests/Image/i7.webp"
import i8 from "../assests/Image/i8.webp"
import g1 from "../assests/Image/in-play.png"
import Content2 from './Content2'

function Home() {
  return (
    <>
        <div className='imgc'>
                <div className='r1'>
                <img src={i1}></img>
                <img src={i2}></img>
                <img src={i3}></img>
                <img src={i4}></img>
                </div>
                <div className='r2'>
                <img src={i5}></img>
                <img src={i6}></img>
                <img src={i7}></img>
                <img src={i8}></img>
                </div>
            </div>
            <div className='game'>
                <h5> <img className='imglogoin' src={g1}></img> INPLAY</h5>
                <div className='he'>Cricket</div>
                <table class="table">
                        <tbody>
                            <tr>
                            <th scope="row">Twenty20 big bash</th>
                            <td></td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">Asutralia women vs England Women</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">Pakistan vs West Indies</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <th scope="row">Newzealand T10</th>
                            <td></td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">Sharjan Warriours</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">Durban Super Giants</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                </table>
                <div className='he'>Football</div>
                <table class="table">
                        <tbody>
                            <tr>
                            <th scope="row">Twenty20 big bash</th>
                            <td></td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">Asutralia women vs England Women</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">Pakistan vs West Indies</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <th scope="row">Newzealand T10</th>
                            <td></td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">Sharjan Warriours</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">Durban Super Giants</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                </table>
                <div className='he'>Tennis</div>
                <table class="table">
                        <tbody>
                            <tr>
                            <th scope="row">Twenty20 big bash</th>
                            <td></td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">Asutralia women vs England Women</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">Pakistan vs West Indies</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <th scope="row">Newzealand T10</th>
                            <td></td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">Sharjan Warriours</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">Durban Super Giants</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                </table>
                <Content2/>
            </div>
        </>
  )
}

export default Home