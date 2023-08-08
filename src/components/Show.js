import React, { useEffect, useState } from 'react';
import '../style/Show.css';
import axios from 'axios'
import Coin from './Coin';

function Show(props) {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.curr}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(res => {
          //for sorting purpose
        //   if(props.Demo11=='A-Z'){
        //     console.log(props.Demo11);
        //     setCoins(res.data.sort((a,b)=>{
        //         let x=a.name.toLowerCase();
        //     let y=b.name.toLowerCase();
        //     if(x<y)return -1;
        //     if(x>y)return 1;
        //     return 0;
        //   }))
        // }
        //   if(props.Demo11=='Z-A'){
        //     console.log(props.Demo11);
        //     setCoins(res.data.sort((a,b)=>{
        //         let x=a.name.toLowerCase();
        //     let y=b.name.toLowerCase();
        //     if(x<y)return 1;
        //     if(x>y)return -1;
        //     return 0;
        //   }))
        // }
        //   if(props.Demo11=='PRICE'){
        //     console.log(props.Demo11);
        //     setCoins(res.data.sort((a,b)=>{
        //         let x=a.current_price
        //     let y=b.name.current_price
        //     if(x<y)return -1;
        //     if(x>y)return 1;
        //     return 0;
        //   }))
        // }
        //   if(props.Demo11=='MARKET-CAP'){
        //     console.log(props.Demo11);
        //     setCoins(res.data.sort((a,b)=>{
        //         let x=a.name.toLowerCase();
        //     let y=b.name.toLowerCase();
        //     if(x<y)return -1;
        //     if(x>y)return 1;
        //     return 0;
        //   }))
        // }
          setCoins(res.data);
      }).catch(error => console.log(error))
  }, [props.curr])

  useEffect(() => {
    setSearch(props.searchContent);
  }, [props.searchContent])

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='main-div'>

    {
      (!filteredCoins[0]) ? <div className="message"><h1>Data not found</h1></div> :
      
      <table className="table table-hover table-dark">
      <thead>
                <tr>
                  <th scope="col" style={{paddingLeft:"3vw"}}>Coin</th>
                  <th scope="col" className='mkt-cap'>Price({props.curr.toUpperCase()})</th>
                  <th scope="col" className='mkt-cap'>Price Change(%)</th>
                  <th scope="col" className='mkt-cap'>Marketcap({props.curr.toUpperCase()})</th>
                </tr>
              </thead>
              <tbody>
        {
                filteredCoins.map(coin => {
                  let count=1;
                  return (
                <Coin

                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  marketcap={coin.market_cap}
                  price={coin.current_price}
                  pricechange={coin.price_change_percentage_24h}
                />
                );
              })
            }
              </tbody>
            </table>
          }
      </div>
  );
}

export default Show;