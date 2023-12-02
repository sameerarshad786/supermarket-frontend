import React from 'react'
import Header from './Header'

const Main = ({ accessToken, setSearch, showSearchBar }) => {

  return (
    <>
      <Header accessToken={accessToken} showSearchBar={showSearchBar} setSearch={setSearch} />
    </>
  )
}

export default Main
