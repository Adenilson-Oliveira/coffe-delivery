import { Routes, Route } from 'react-router-dom'
import { Checkout } from './pages/checkout'
import { Home } from './pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}
