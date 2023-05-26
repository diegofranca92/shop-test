import React from 'react'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  )
}
