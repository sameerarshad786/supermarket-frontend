import React from 'react'
import Header from './Header'

const Main = ({ accessToken, searchParams, setSearchParams, showSearchBar }) => {

  return (
    <>
      <Header
        accessToken={accessToken}
        showSearchBar={showSearchBar}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </>
  )
}

export default Main
