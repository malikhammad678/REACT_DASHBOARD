import React from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import StateCard from '../components/StateCard'
import { BarChart2, Box, User, Zap } from 'lucide-react'
import SalesOverviewCharts from '../components/SalesOverviewCharts'
import CategoryDistributionChart from '../components/CategoryDistributionChart'
import SalesChannelChart from '../components/SalesChannelChart'
const OverView = () => {
  return (
    <div className='flex-1 overflow-auto z-10'>
        <Header title= "Dashboard" />

        <main className='max-w-7x1 mx-auto py-6 px-4 lg:px-8'>
             <motion.div
             className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
             initial= {{opacity:0,y:20}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.5}}
             >
                <StateCard name="Total Sales" Icon = {Zap} value = "$13,432" color="#6366F1" />
                <StateCard name="New Users" Icon = {User} value = "1,367" color="#885CF6" />
                <StateCard name="Total Products" Icon = {Box} value = "567" color="#EC4899" />
                <StateCard name="Conversion rate" Icon = {BarChart2} value = "12.5%" color="#108981" />
             </motion.div>

             <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
               <SalesOverviewCharts />
               <CategoryDistributionChart />
               <SalesChannelChart />
             </div>

        </main>
    </div>
    
  )
}

export default OverView
