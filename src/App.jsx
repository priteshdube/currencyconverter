import { useState, useEffect } from 'react'
import Inputbox from './components/Inputbox'
// import useCurrencyInfo from './hooks/useCurrencyinfo'


import './App.css'








function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [data, setData] = useState({})

  

  function useCurrencyInfo(currency){

   
      fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(async (res)=> {
        const currencies = await res.json()
        setData(currencies[currency])
       
      }) 
    

};


useEffect(() => {
  useCurrencyInfo(from)
  // setConvertedAmount(amount * data[to]);

},[from])





// useCurrencyInfo(from)


const options= Object.keys(data)




function swapfunction(){
  setFrom(to)
  setTo(from)
  setConvertedAmount(0);
}






  
  return (
    <>
     <h1 className='text-4xl rounded-lg p-3 bg-orange-400 font-bold'>Currency Converter</h1>
  

       <Inputbox currencyoptions={options} getvalue={(e)=> setAmount(e.target.value)} selectedfromCurrency={(e)=> setFrom(e.target.value)}  selectedtoCurrency={(e)=> setTo(e.target.value)} /> 
       <button onClick={swapfunction} className='rounded-md p-4 mt-7 bg-blue-600 text-white text-2xl '>Swap</button><br />
       <h1 className="text-xl m-7 font-bold subpixel-antialiased">{from.toUpperCase()} to {to.toUpperCase()}</h1>
       <button className='mt-5 border-2 p-3 border-inherit rounded-md' onClick={()=> {setConvertedAmount(amount*data[to])}}> Convert</button>

       <h1 className='text-4xl mt-4'>{convertedAmount}</h1>
       {/* <input type="text" value={convertedAmount} /> */}

   
    </>
  )
}




export default App
