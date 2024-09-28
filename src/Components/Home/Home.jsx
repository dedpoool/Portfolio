import React from 'react'
import Options from './Options'


function Home({questions}) {
    // Data
const questionsData = {
    1:{question:'How do you remove all white spaces from a string in Java?',
      number:'1',
      tooltip:'No description about this question',
    },
    2:{question:'How do you find duplicate characters in a string?',
      number:'2',
      tooltip:'Write a Java program to find duplicate characters and their count in a given string. For example, in a string “Better Butter”, duplicate characters and their count is t : 4, e : 3, r : 2 and B : 2.',
    },
  };

  return (
    <div className='h-screen flex flex-col items-center'>
        <div className='p-8 w-1/4 rounded-2xl m-4 flex justify-center text-pink-400 font-bold text-lg'>QUESTIONS</div>
        <div className='w-full flex-wrap'>
            <Options questions={questionsData[1]}/>
            <Options questions={questionsData[2]}/>
        </div>
    </div>
  )
}

export default Home