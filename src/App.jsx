import React from 'react'
import {motion} from 'motion/react'

const App = () => {
  return (
    <div className='w-full h-screen bg-red-500 '>
      <div className='grid grid-cols-12 grid-rows-12 w-full h-full'>
        {
          Array.from({length:12*12}).map((_,index)=>(

            <motion.div
            initial={{
              backgroundColor:"rgb(41,41,41)"
            }}
            whileHover={{
              backgroundColor:"rgb(0,0,255)"
            }} 
            animate={{
              backgroundColor:"rgb(41,41,41)",
              transition:{
                duration:1,
                // delay:index
              }
            }}
            className="w-full h-full border border-t border-r"></motion.div>
          ))
        }

      </div>

    </div>
  )
}

export default App