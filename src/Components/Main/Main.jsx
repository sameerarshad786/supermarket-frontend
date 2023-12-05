import React from 'react'
import Header from './Header'

const Main = ({ accessToken, showSearchBar, setQueryParams }) => {

  return (
    <>
      <Header
        accessToken={accessToken}
        showSearchBar={showSearchBar}
        setQueryParams={setQueryParams}
      />
    </>
  )
}

export default Main
