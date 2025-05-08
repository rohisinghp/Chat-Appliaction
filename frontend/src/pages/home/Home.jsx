import React from 'react'
import Siderbar from '../../components/Sidebar/Siderbar'
import MessageContainer from '../../components/Message/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[600px] rounded-lg overflow-hidden bg-gray-500/20 backdrop-filter backdrop-blur-lg'>
    
      <Siderbar/>
      <MessageContainer/>
    </div>
  )
}


export default Home