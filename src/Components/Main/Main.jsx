import React, { useEffect, useState } from 'react'
import Header from './Header'

const Main = ({ accessToken }) => {
  const [showSearchBar, setShowSearchBar] = useState(false)

  useEffect(() => {
    if (document.URL === "http://localhost:3000/") {
      setShowSearchBar(true)
    }
  })

  return (
    <>
      <Header accessToken={accessToken} showSearchBar={showSearchBar} />
    </>
  )
}

export default Main
