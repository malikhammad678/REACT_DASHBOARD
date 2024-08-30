import React from 'react'
import Header from '../components/Header'
import StateCard from '../components/StateCard'
import { motion } from 'framer-motion'
import { AlertTriangle, BarChart2, Box, DollarSign, Package, TrendingUp, User, Zap } from 'lucide-react'
import ProductTable from '../components/ProductTable'
import SalesTrendChart from '../components/SalesTrendChart'
import CategoryDistributionChart from '../components/CategoryDistributionChart'
const Product = () => {
  return (
    <div className='flex-1 overflow-auto z-10'>
        <Header title= "Products" />
        <main className='max-w-7x1 mx-auto py-6 px-4 lg:px-8'>
             <motion.div
             className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
             initial= {{opacity:0,y:20}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.5}}
             >
                <StateCard name="Total Products" Icon = {Package} value = "567" color="#6366F1" />
                <StateCard name="Low Selling" Icon = {TrendingUp} value = "79" color="#885CF6" />
                <StateCard name="Low Stock" Icon = {AlertTriangle} value = "23" color="#EC4899" />
                <StateCard name="Total Revenue" Icon = {DollarSign} value = "$53,488" color="#108981" />
             </motion.div>
             <ProductTable />
             <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <SalesTrendChart />
              <CategoryDistributionChart />
             </div>
             </main>

            
    </div>
  )
}

export default Product
