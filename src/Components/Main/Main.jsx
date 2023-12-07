import React from 'react'
import Header from './Header'

const Main = ({ accessToken, setSearchParams, showSearchBar }) => {

  return (
    <>
      <Header
        accessToken={accessToken}
        showSearchBar={showSearchBar}
        setSearchParams={setSearchParams}
      />
    </>
  )
}

export default Main
