import React from 'react'

function Error({message}) {
  return (
    <div className='text-4xl'>{message === 'Not Found'? "Could not fetch data.": message}</div>
  )
}

export default Error