import React, { useEffect, useState } from 'react';
import styled from "styled-components";

function Header(props) {
	// 스크롤 여부
	const [didScroll, setDidScroll] = useState(false)

	// useEffect Hooks - 스크롤 이벤트 바인딩 & 클린
	useEffect(() => {
		// header element scroll handler
		const scrollHandler = () => {
			if (window.scrollY > 0) {
				setDidScroll(true)
			} else {
				setDidScroll(false)
			}
		}
		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		}
	}, [])

	return (
		<>
			<NoticeHeader didScroll={didScroll}>데스크탑 환경 (1280* 800 해상도) 에 최적화 되어 있습니다. 최종 업데이트 24년 4월 26일</NoticeHeader>
			<MainHeader didScroll={didScroll}>
				<div>
					<img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`} alt="프론트앤드 개발자 신주영 포트폴리오 웹사이트 로고 이미지" />
				</div>
				<HeaderButtonWrap>
					<HeaderButton>About</HeaderButton>
					<HeaderButton>Skill</HeaderButton>
					<HeaderButton>Project</HeaderButton>
					<HeaderButton>Experience</HeaderButton>
					<HeaderButton>Career</HeaderButton>
					<HeaderButton>Contact</HeaderButton>
				</HeaderButtonWrap>
			</MainHeader>
		</>
	);
}

export const NoticeHeader = styled.header`
	background-color: var(--gr-02);
	color: var(--gr-04);
	width: 100%;
	height: 30px;
	position: fixed;
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 12px;
	padding-top: 8px;
	padding-bottom: 8px;
	text-align: center;
	z-index: 2;
	top : ${(props) => {
		return props.didScroll ? '-30px' : '0px'
	}};
	transition: top 0.3s ease-in-out;
`
export const MainHeader = styled.header`
  background-color: rgba(255, 255, 255, .5);
	width: 100%;
	height: 74px;
	position: fixed;
	top: 30px;
	z-index: 2;
	top : ${(props) => {
		return props.didScroll ? '0px' : '30px'
	}};
	backdrop-filter: blur(3px);
	transition: top 0.3s ease-in-out;
	display: flex;
	justify-content: space-between;
	padding: 20px 50px 20px 50px;
	align-items: center;
`

export const HeaderButtonWrap = styled.div`
	display: flex;
	column-gap: 8px;
	align-items: center;
`
export const HeaderButton = styled.button`
	padding: 10px;
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 12px;
	color: var(--gr-01);
	border: 0px;
	border-style: none;
	background-color: transparent;
	border-radius: 5px;
	&:hover {
		background-color: var(--gr-06);
	}
	&:active {
		background-color: var(--gr-05);
	}
	transition: background-color 0.3s ease-in-out;
`
export default Header;