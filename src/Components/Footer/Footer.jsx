import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-900 w-full h-1/5 text-white flex justify-around p-8'>
        <div className='w-1/4 flex items-center'>
            <img className='h-1/2' src="https://www.pngall.com/wp-content/uploads/13/Anime-Logo-Transparent.png" alt="" />
        </div>
        {/* about */}
        <div className='w-1/4'>
            This local react project is just for practice purpose and nothing else, because in have to learn the react lib so from now on it will add all the projects of mine in this website
        </div>
        {/* contact */}
        <div className='w-1/4'>Phone: 7696396208<br/>Email: Vishalmark7@gmail.com</div>
        <div></div>

    </div>
  )
}

export default Footer