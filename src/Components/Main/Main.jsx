import React from 'react'
import Header from './Header'

const Main = ({ accessToken, setSearch, showSearchBar, queryParams }) => {

  return (
    <>
      <Header
        accessToken={accessToken}
        setSearch={setSearch}
        showSearchBar={showSearchBar}
        queryParams={queryParams}
      />
    </>
  )
}

export default Main
