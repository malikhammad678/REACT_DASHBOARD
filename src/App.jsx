import { Route, Routes } from "react-router-dom"
import OverView from "./pages/OverView"
import Product from "./pages/Product"
import Sidebar from "./components/Sidebar/Sidebar"
import Users from "./pages/Users"
import Sales from "./pages/Sales"
import Orders from "./pages/Orders"
import Analytics from "./pages/Analytics"
import Setting from "./pages/Setting"


function App() {

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">

      <div className="fixed inset-0 z-0">
        <div className="absolute bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

    <Sidebar />

      <Routes>
        <Route path="/" element={<OverView />} />
        <Route path="/products" element = {<Product />} />
        <Route path="/user" element = {<Users />} />
        <Route path="/sales" element = {<Sales />} />
        <Route path="/orders" element = {<Orders />} />
        <Route path="/analytics" element = {<Analytics />} />
        <Route path="/settings" element = {<Setting />} />
      </Routes>
    </div>
  )
}

export default App
