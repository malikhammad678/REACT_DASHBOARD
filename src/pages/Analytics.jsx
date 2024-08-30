import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import OverviewCards from '../components/OverviewCards'
import RevenueChart from '../components/RevenueChart'
import ChannelPerformance from '../components/ChannelPerformance'
import ProductPerformance from '../components/ProductPerformance'
import UserRetention from '../components/UserRetention'
import CustomerSegmentation from '../components/CustomerSegmentation'
import AiPoweredInsight from '../components/AiPoweredInsight'

const Analytics = () => {
  return (
    <div className='flex-1 relative z-10 overflow-auto'>
      <Header title="Analytics" />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <OverviewCards />
        <RevenueChart />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8'>
            <ChannelPerformance />
            <ProductPerformance />
            <UserRetention />
            <CustomerSegmentation />
        </div>
        <AiPoweredInsight />
      </main>
    </div>

  )
}

export default Analytics
