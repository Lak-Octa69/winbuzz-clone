import React from 'react'
import g2 from "../assests/Image/exchange.png"
import BlinkDots from '../assests/Image/BlinkDots'

function Pg11() {
  return (
    <div className='game'>
                <h5> <img className='imglogoin' src={g2}></img>Exchange Games</h5>
                <div className='he'>Volleyball
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
                        </tbody>
                </table>
                </div>
  )
}

export default Pg11