import React from 'react'
import Herosection from './Components/Herosection/hero'
import Features from './Components/Features/features'
import Restaurants from './Components/Restaurants/restaurants'
import Footer from './Components/Footer/footer'

import './App.css';
import './Components/FontAwesome'

// This is a trial comment
// Local changes
function App() {
  return (
    <div className="body">
      <Herosection />
      <Features />
      <Restaurants />
      <Footer />
    </div>
  )
}

export default App;
