import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

function Main() {
	return (
		<MainWrap>
			<TestH1>메인</TestH1>
		</MainWrap>

	);
}



export const TestH1 = styled.h1`
	width: 100%;
	background-color: aqua;
	height: 1500px;
`
export const MainWrap = styled.div`
    position: relative;
		top: 104px;
`

export default Main;