import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Notifications from '../components/Notifications'
import Security from '../components/Security'
import ConnectedAccounts from '../components/ConnectedAccounts'
import DangerZone from '../components/DangerZone'

const Setting = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
      <Header title="Setting" />
      <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
        <Profile  />
        <div className='mt-6'>
        <Notifications />
        </div>
        <div className='mt-6'>
        <Security />
        </div>
        <div className='mt-6'>
        <ConnectedAccounts />
        </div>
        <div className='mt-6'>
        <DangerZone />
        </div>
      </main>
    </div>
  )
}

export default Setting
