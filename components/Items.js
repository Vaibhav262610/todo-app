import React from 'react'

const Items = ({todoText}) => {
  return (
    <div >
        <div className="card w-96 bg-gray-900 shadow-xl">
  <div className="card-body">
    <p className='text-gray-400'>{todoText}</p>
    <div className="card-actions justify-end">
      <button className="md:btn btn-sm btn-error">Delete</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Items