import React from 'react'



function Options({questions}) {
    console.log('questions in option component: ',questions);
return (
    <>
    {/* main */}
    <div className='shadow-lg w-1/2 m-4 h-16 flex items-center rounded-xl border-2 hover:py-12 ease-in duration-300 sticky'>
        {/* question no */}
        <div className='text-white bg-black px-4 py-2 m-4 rounded-xl w-fit'>{questions.number}</div>
        <h4 className='text-black'>{questions.question}</h4>
        {/* <div className='p-4 bg-slate-500 fixed block hover:hidden ease-in-out duration-1000 rounded-xl'>
            <h5>{questions.tooltip}</h5>
            </div> */}
        
    </div>
    </>
)
}

export default Options