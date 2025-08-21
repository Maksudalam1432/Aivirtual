import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Singup from './page/Singup'
import Login from './page/Login'
import Logout from './page/logout'
function App() {
  return (
    <>
    
    <Routes>

 <Route path='/singup' element={<Singup/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='logout' element ={<Logout/>}/>

    </Routes>

    </>
  )
}

export default App