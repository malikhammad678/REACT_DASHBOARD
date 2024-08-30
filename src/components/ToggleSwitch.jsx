import React from 'react'

const ToggleSwitch = ({Label,isOn,onToggle}) => {


  return (
    <div className='flex items-center justify-between mt-8'>
      <span className='text-gray-300'>{Label}</span>
      <button onClick={onToggle} className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${isOn ? "bg-indigo-600" : "bg-gray-600"}`}>
       <span className={`inline-block size-4 transform transition-transform bg-white rounded-full ${isOn ? "translate-x-6" : "translate-x-1"}`}/>
      </button>
    </div>
  )
}

export default ToggleSwitch
