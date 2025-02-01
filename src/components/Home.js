import React, { useState } from 'react';
import Show from './Show';
import '../style/Home.css';
import NavbarComponent from './Navbar';
function Home() {
    const [currency, setCurrency] = useState('inr');
    const [searching, setSearching] = useState('');

    function searchCoin(info) {
        setSearching(info);
    }
    function ChnageCurrency(data) {
        setCurrency(data);
    }
    return (
        <React.Fragment>
            <NavbarComponent func={ChnageCurrency} searchFun={searchCoin} />
            <Show curr={currency} searchContent={searching} />
        </React.Fragment>
    )

}
export default Home;