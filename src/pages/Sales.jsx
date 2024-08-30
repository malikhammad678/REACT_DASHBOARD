import React from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import StateCard from '../components/StateCard'
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'
import SalesOverviewChart from '../components/SalesOverviewChart'
import SalesByCategoryChart from '../components/SalesByCategoryChart'
import DailySalesTrend from '../components/DailySalesTrend'

const salesState = {
    totalRevenue:"$12,345,678",
    averageOrderValue:"$67.80",
    conversionRate:"3.45%",
    salesGrowth:"12.3%"
}

const Sales = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Sales" />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial = {{opacity:0, y:20}}
        animate = {{opacity:1, y:0}}
        transition={{duration:1}}
        >

            <StateCard name="Total Revenue" Icon={DollarSign} value={salesState.totalRevenue} color="#6366F1"/>
            <StateCard name="Average Order Value" Icon={ShoppingCart} value={salesState.averageOrderValue} color="#10B981"/>
            <StateCard name="Conversion Rate" Icon={TrendingUp} value={salesState.conversionRate} color="#F95B0B"/>
            <StateCard name="Sales Growth" Icon={CreditCard} value={salesState.salesGrowth} color="#EF4444"/>

        </motion.div>
        <SalesOverviewChart />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <SalesByCategoryChart />
          <DailySalesTrend />
        </div>
      </main> 
    </div>
  )
}

export default Sales
