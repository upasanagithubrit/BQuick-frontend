import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Welcome from './pages/welcomepage'
import OrderManagement from './pages/ordermanagement';
import Cart from '../src/pages/cart'

function App() {
  return (
    <div>
  
    {/* ............................routes..................... */}
<Routes>
  {/* ..........doo page hai eisliye dooroute ........... */}
  
  <Route path="/" element={<Welcome/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/welcome" element={<Welcome/>}/>
  <Route path="/order" element={<OrderManagement/>}/>
 
</Routes>
     
    </div>
  );
}

export default App;