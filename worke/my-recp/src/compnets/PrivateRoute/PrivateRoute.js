import React from 'react'
import { useAute } from '../../contex/aute'
import { Navigate } from 'react-router-dom'
import Home from '../../pages/home/Home'

const PrivateRoute = ({childern}) => {
  const {currentUser}=useAute()
  return currentUser?childern:<Navigate to="login"/>
}

export default PrivateRoute