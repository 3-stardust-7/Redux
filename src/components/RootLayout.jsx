import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <div>RootLayout</div>
      <main><Outlet/></main>
    </>
  );
}

export default RootLayout