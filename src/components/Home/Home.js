import React from 'react'
import './Home.css'

export const Home = () => {

  return (
    <div className='home'>
      <div className='product'>
        <h2>Stuff</h2>
        <p>Lorem impsum</p>
        <button>Bitcoin</button>
        <button>Ethereum</button>
      </div>
      <div className='compare'>
        <h2>Compare</h2>
        <p>Lorem ipsum</p>
        <button>Compare</button>
      </div>
    </div>
  )
}