import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ContentTable from './ContentTable';
import '../style/show.css';


function Show(props) {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.curr}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(res => {
        setCoins(res.data);
      }).catch(error => console.log(error))
  }, [props.curr])

  useEffect(() => {
    setSearch(props.searchContent);
  }, [props.searchContent])

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      {
        (!filteredCoins[0]) ? <div className="message"><h1>Data not found</h1></div> : <ContentTable currency={props.curr} filteredCoins={filteredCoins}/>
      }
    </div>
  );
}

export default Show;