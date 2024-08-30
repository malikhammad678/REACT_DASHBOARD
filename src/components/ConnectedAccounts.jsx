import React, { useState } from 'react'
import SettingSection from './SettingSection'
import { HelpCircle, Plus } from 'lucide-react'

const ConnectedAccounts = () => {
    const [connectedAccounts, setConnectedAccounts] = useState([
        {
            id:1,
            name:"Google",
            connected:true,
            icon:"/google.png"
        },
        {
            id:2,
            name:"Facebook",
            connected:true,
            icon: "/facebook.svg"
        },
        {
            id:3,
            name:"Twitter",
            connected:false,
            icon:"/x.png" 
        },
    ])
  return <SettingSection icon={HelpCircle} title={"Connected Accounts"}> 
       {
        connectedAccounts.map((acount) => {
            return (
                <div key={acount.id} className='flex items-center justify-between py-3'>
        <div className='flex gap-1'>
        
            <img src={acount.icon} alt="" className='size-6 object-cover rounded-full mr-2 ' />
        
         <span className='text-gray-300'>{acount.name}</span>
        </div>
        <button className={`px-3 py-1 rounded ${acount.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"} transition duration-200`}
        
        onClick={() => {
            setConnectedAccounts(
                connectedAccounts.map((acc) => {
                  if(acc.id === acount.id){
                    return {
                        ...acc, connected : !acc.connected
                    }
                  }
                return acc
                })
            )
        }}
        
        >
            {acount.connected ? "Connected" : "Connect"}
        </button>
       </div>
            )
        })
       }

       <button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200 '>
        <Plus size={18} className='mr-2' />Add Account
       </button>
  </SettingSection>
}

export default ConnectedAccounts
