import React from 'react'
import Button from './Button'

const Filters = () => {
  const list = ["All","Mobile Phones","Motivation","Editing","Live","Rubiks Cube","React","Java","Spring"];
  return (
    <div className='flex'>
      {
        list.map( n => <Button name={n} key={n}/>)
      }

    </div>
  )
}

export default Filters