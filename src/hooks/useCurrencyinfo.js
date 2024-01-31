import { useEffect, useState } from "react";



function useCurrencyInfo(currency){


    const [data, setData] = useState({});
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    ).then(async (res)=> {
      const currencies = await res.json()
      setData(currencies[currency])
     
    })
  
     return data;
  
  

};






export default useCurrencyInfo;