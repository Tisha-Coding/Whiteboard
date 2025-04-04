import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router';
import Test from "./pages/Test";
import RealTime from "./pages/RealTime";
import Collab from "./pages/Collab";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Test />} />
        <Route path='/realtime' element={<RealTime />} />
        <Route path='/collab' element={<Collab />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
