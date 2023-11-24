import React from 'react'
import Header from './Header'

const Main = ({ accessToken }) => {
  return (
    <>
      <Header accessToken={accessToken} />
    </>
  )
}

export default Main
