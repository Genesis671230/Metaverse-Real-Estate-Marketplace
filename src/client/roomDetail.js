import React from 'react'
import Head from './components/RoomDetail/Head'
import Review from './components/RoomDetail/Review'
import Header from './components/kit/Header'

function RoomDetail() {
  return (
    <div>
      <div className='mx-36' >
        <Header/>
      </div>
      <Head/>
      <Review/>
    </div>
  )
}

export default RoomDetail