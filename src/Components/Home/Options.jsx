import React from 'react'



function Options({options}) {
    console.log('option component: ',options);
return (
    <>
    {/* main */}
    <div className='p-5 flex-col shadow-lg h-fit w-1/2 m-4 h-16 flex items-center rounded-xl border-2 hover:py-12 ease-in duration-300 sticky'>
        {/* question no */}
        <div>
            <img src={options.thumbnail} alt="" />
        </div>
        <div className='text-white bg-black px-4 py-2 m-4 rounded-xl w-fit'>{options.number}</div>
        <h4 className='text-black'>{options.workType}</h4>
        {/* <div className='p-4 bg-slate-500 fixed block hover:hidden ease-in-out duration-1000 rounded-xl'>
            <h5>{questions.tooltip}</h5>
            </div> */}
        
    </div>
    </>
)
}

export default Options