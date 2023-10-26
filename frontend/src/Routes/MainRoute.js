import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/SignIn'
import Home from '../Pages/Home'
import Menu from '../Pages/Menu'
import { PrivateRoute } from '../components/PrivateRoute'

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          // <PrivateRoute>

          <Home />
          // </PrivateRoute>
        } />
        <Route path='/Signin' element={

          <SignIn />

        } />
        <Route path='/Menu' element={
          <PrivateRoute>
            <Menu />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  )
}

export default MainRoute