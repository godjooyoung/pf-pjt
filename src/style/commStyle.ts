import { styled } from 'styled-components';

/** common-header */
export const NoticeHeader = styled.header<{ didScroll: string }>`
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
export const MainHeader = styled.header<{ didScroll: string }>`
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

/** components */
export const SectionWrap = styled.div`
	margin: 110px 0px;
`
export const PageHeading = styled.h1`
	font-family: "Pretendard";
	font-weight: 700;
	font-size: 60px;
	color: var(--gr-01);
	text-align: center;
	margin: 50px 0px 50px 0px;
`
export const HChar = styled.span`
	font-family: "Galmuri9";
	font-weight: 400;
	font-size: 50px;
	color: var(--gr-01);
`
	