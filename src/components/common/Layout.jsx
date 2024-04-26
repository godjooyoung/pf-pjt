import React from 'react'
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from './Header';
function Layout() {
  return (
    <>
		<Header/>
    <MaxWidth>
      <Outlet />
    </MaxWidth>
    </>
  )
}

const MaxWidth = styled.div`
  max-width: 1280px;
  min-height: 937px;
  margin: 0 auto;
	position: relative;

`
export default Layout