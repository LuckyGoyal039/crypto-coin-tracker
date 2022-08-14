import React, { useState } from 'react';
import Show from './Show';
import '../style/Home.css';
// import Navbar from './Navbar';
import NavbarComponent from './Navbar';
function Home() {
    const [currency,setCurrency]=useState('inr');
    const [searching,setSearching]=useState('');

    // const [temp,setTemp]=useState('');  
    // useEffect(()=>{
    //     console.log("Currenct Currency is: ", currency);
        
    //         <Show curr={currency}/>
        
    // },currency)
    function searchCoin(info){
        setSearching(info);
    }

    function ChnageCurrency(data){
        setCurrency(data);
    }

    //sorting function
    // function Demo10(sortData){
    //     setTemp(sortData);
    //     console.log("HOME ", sortData);
    // }
    return (
        <React.Fragment>
            <NavbarComponent func={ChnageCurrency} searchFun={searchCoin}/>
            <Show curr={currency}  searchContent={searching}/>
        </React.Fragment>
    )
    
}
export default Home;