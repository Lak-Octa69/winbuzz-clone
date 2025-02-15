import React from 'react'
import g2 from "../assests/Image/exchange.png"
import BlinkDots from '../assests/Image/BlinkDots'


function Page2() {
  return (
            <div className='game'>
                <h5> <img className='imglogoin' src={g2}></img>Exchange Games</h5>
                <div className='he'>Cricket
                <button type="button" className="btn btn-outline-success pt p2" ><p>+ LIVE</p></button>
                <button type="button" className="btn btn-outline-success pt p2" ><p>+ VIRTUAL</p></button>
                </div>
                <table class="table">
                        <tbody>
                            <tr>
                            <th scope="row">Twenty20 big bash</th>
                            <td ><BlinkDots/></td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            </tr>
                            <tr>
                            <th scope="row">Asutralia women vs England Women</th>
                            <td ><BlinkDots/></td>
                            <td className='td1'>-</td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            <td className='td'>-</td>
                            </tr>
                            <tr>
                            <th scope="row">Pakistan vs West Indies</th>
                            <td ><BlinkDots/></td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            </tr>
                            <tr>
                            <th scope="row">Newzealand T10</th>
                            <td ><BlinkDots/></td>
                            <td className='td1'>-</td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            <td className='td'>-</td>
                            
                            </tr>
                            <tr>
                            <th scope="row">Sharjan Warriours</th>
                            <td ><BlinkDots/></td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            </tr>
                            <tr>
                            <th scope="row">Durban Super Giants</th>
                            <td ><BlinkDots/></td>
                            <td className='td1'>-</td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            <td className='td'>-</td>
                            <td className='td1'>-</td>
                            <td className='td1'>-</td>
                            </tr>
                        </tbody>
                </table>
                </div>
  )
}

export default Page2