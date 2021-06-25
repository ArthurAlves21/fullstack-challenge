import React, {useState} from 'react'
import { AuthContext } from '../Context/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState("Mehmed Al Fatih")
  return (<>
  <AuthContext.Provider value={{user, setUser}}>
  <Component {...pageProps} />
  </AuthContext.Provider>

  </>)
}

export default MyApp
