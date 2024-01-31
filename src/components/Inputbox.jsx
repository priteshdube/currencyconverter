import React from 'react'

import { useState } from 'react'

const Inputbox = ({
    currencyoptions = [],
    selectedfromCurrency,
    selectedtoCurrency,
    getvalue,

}) => {

   

   

    return (
        <>
            <div className=' flex justify-center items-center w-full  '>

                <div className="flex flex-col justify-center w-[40%] h-[10rem] border-4 border-black  ">


                    <div className="">
                        <input type="Number" placeholder='amount' onChange={getvalue} className='border-4 border-black p-4 h-8 rounded-md ' />
                    </div>
                    <div>

                        <select name="currency" id="currency" className='m-6' onChange={selectedfromCurrency}>
                            <option value={'usd'}>usd</option>
                            {currencyoptions.map((option, index) => {
                                return (
                                    <option key={index} value={option} >
                                        {option.toUpperCase()}
                                    </option>
                                )
                            })}
                        </select>
                        <select name="currency" id="currency" onChange={selectedtoCurrency}>
                            <option value={'inr'}>inr</option>
                            {currencyoptions.map((option, index) => {
                                return (
                                    <option key={index} value={option} >
                                        {option.toUpperCase()}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    
                </div>


            </div>
           

        </>
    )
}

export default Inputbox;