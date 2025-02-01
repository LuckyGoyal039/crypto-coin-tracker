
import Coin from "./Coin";
import '../style/contentTable.css'
const ContentTable = ({currency, filteredCoins}) => {
    return (
        <table className= 'custom-table'>
            {/* <thead className='table-heading'> */}
                <tr className='heading-row'>
                    <th>Coin</th>
                    <th>Price({currency.toUpperCase()})</th>
                    <th>Price Change(%)</th>
                    <th>Marketcap({currency.toUpperCase()})</th>
                </tr>
            {/* </thead> */}
            <tbody>
                {
                    filteredCoins.map(coin => {
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
    )
}

export default ContentTable;