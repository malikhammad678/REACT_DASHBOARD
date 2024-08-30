import React from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import StateCard from '../components/StateCard'
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react'
import DailyOrders from '../components/DailyOrders'
import DailyOrderDestribution from '../components/DailyOrderDestribution'
import OrdersTable from '../components/OrdersTable'
const Orders = () => {
  return (
    <div className='flex-1 relative z-10 overflow-auto'>
      <Header title="Orders" />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
             className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
             initial= {{opacity:0,y:20}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.5}}
             >
                <StateCard name="Total Orders" Icon = {ShoppingBag} value = "1,256" color="#6366F1" />
                <StateCard name="Pending Orders" Icon = {Clock} value = "56" color="#F59E0B" />
                <StateCard name="Completed Orders" Icon = {CheckCircle} value = "1,345" color="#10B981" />
                <StateCard name="Total Revenue" Icon = {DollarSign} value = "$70,478" color="#EF4444" />
             </motion.div>
             <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <DailyOrders />
                <DailyOrderDestribution />
             </div>
             <OrdersTable />
      </main>
    </div>
  )
}

export default Orders
