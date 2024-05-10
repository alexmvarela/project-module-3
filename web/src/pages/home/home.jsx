import React, { useContext } from 'react'
import AuthContext from '../../contexts/auth.context'

function Home() {
    const context = useContext(AuthContext)
  return (
    <div>{context.user?.name}asdasd</div>
  )
}

export default Home