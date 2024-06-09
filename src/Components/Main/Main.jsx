import React from 'react'
import Header from './Header'
import MessageBox from './MessageBox'

const Main = ({ accessToken, searchParams, setSearchParams, showSearchBar }) => {

  return (
    <>
      <Header
        accessToken={accessToken}
        showSearchBar={showSearchBar}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <MessageBox accessToken={accessToken} />
    </>
  )
}

export default Main
