import React from 'react';
import styled, { keyframes } from "styled-components";

function Header(props) {

    return (
			<>
				<NoticeHeader>데스크탑 환경 (1280* 800 해상도) 에 최적화 되어 있습니다. 최종 업데이트 24년 5월 13일</NoticeHeader>
			</>
    );
}

export const NoticeHeader = styled.header`
		background-color: #242424;
		color: #BCBCBC;
		width: 100%;
		height: 30px;
		top: 0px;
`
export const MainHeader = styled.header`
    background: transparent;
    color: #FFFFFF;
    width : 100%;
    height: 79px;
    position: ${(props) => {
        return props.pos ? 'absolute' : 'static';
    }};
`
export default Header;