import React from 'react'
import '../style/Coin.css';

const Coin = ({ image, name, price, volume, pricechange, marketcap }) => {
    return (
                
                    <tr>
                        {/* <th scope="row" className='mkt-cap'>1</th> */}
                        <td><img src={image} alt="crypto" className='crypto-image'/> {name}</td>
                        <td className='mkt-cap'> {price}</td>
                        {pricechange < 0 ? (
                            <td className="red mkt-cap">{pricechange.toFixed(2)}%</td>
                        ) : (
                            <td className="green mkt-cap">{pricechange.toFixed(2)}%</td>
                        )
                        }
                        {/* <td>MKT Csp: </td> */}
                        <td className='mkt-cap'> {marketcap.toLocaleString()}</td> 
                    </tr>
            
    )
}

export default Coin