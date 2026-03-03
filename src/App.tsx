import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/sections/Navigation'
import Footer from './components/sections/Footer'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import EDPage from './pages/EDPage'
import DiagnosticsPage from './pages/DiagnosticsPage'
import LowTestosteronePage from './pages/LowTestosteronePage'
import PrematureEjaculationPage from './pages/PrematureEjaculationPage'
import SupplementsPage from './pages/SupplementsPage'
import WeightLossPage from './pages/WeightLossPage'
import Treatments from './pages/Treatments'
import ProductDetail from './pages/ProductDetail'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Cart from './pages/Cart'
import HairLossPage from './pages/HairLossPage'
import BundlesPage from './pages/BundlesPage'
import Checkout from './pages/Checkout'
import ThankYou from './pages/ThankYou'

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/erectile-dysfunction" element={<EDPage />} />
      <Route path="/low-testosterone" element={<LowTestosteronePage />} />
      <Route path="/weight-loss" element={<WeightLossPage />} />
      <Route path="/hair-loss" element={<HairLossPage />} />
      <Route path="/premature-ejaculation" element={<PrematureEjaculationPage />} />
      <Route path="/diagnostics" element={<DiagnosticsPage />} />
      <Route path="/supplements" element={<SupplementsPage />} />
      <Route path="/bundles" element={<BundlesPage />} />
      <Route path="/treatments" element={<Treatments />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  </CartProvider>
)

export default App
