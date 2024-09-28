import React from 'react'

function About() {
  return (
    <div className='flex justify-start h-screen'>
        {/* image */}
        <div className='h-1/2 w-1/3 flex justify-start content-start items-start'>
            <img className='h-full rotate-180' src="https://lh3.google.com/u/0/d/1xjBoI5n7XSneZUKKZ8IH4MCte5WDn51j=w1920-h945-iv1" alt="about me image" />
        </div>
        {/* about content */}
        <div className='h-1/2 w-1/2 p-8 '>
            <h1 className='text-6xl pb-8 font-black text-pink-900'>VISHAL YADAV</h1>
            <p className='text-2xl font-mono text-gray-700 leading-10 tracking-widest'>This is about me my name is vishal yadav and I am tring to be a great developer who can make websites webapplications like peice of cake for that in am going to practice and learn new coding concepts every day and hond my skills to perfection and after that in will use those skills to make a product or to run my own business with my team with Sahil Ninder or someone else willing to help to company grow and after that we will just manage that company and earn enough to do something for poors and animals 🕊️.</p>
        </div>
    </div>
  )
}

export default About