import React from 'react'

function MenuItem({ menuItem }) {
  const { image, price, name } = menuItem

  return (
    <div className='menuItem'>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>Rs.{price}</p>
    </div>
  )
}

export default MenuItem