import { useEffect, useState } from 'react';
import * as comm from "../../style/commStyle"
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
			<comm.NoticeHeader didScroll={didScroll}>데스크탑 환경 (1280* 800 해상도) 에 최적화 되어 있습니다. 최종 업데이트 24년 4월 26일</comm.NoticeHeader>
			<comm.MainHeader didScroll={didScroll}>
				<div>
					<img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`} alt="프론트앤드 개발자 신주영 포트폴리오 웹사이트 로고 이미지" />
				</div>
				<comm.HeaderButtonWrap>
					<comm.HeaderButton>About</comm.HeaderButton>
					<comm.HeaderButton>Skill</comm.HeaderButton>
					<comm.HeaderButton>Project</comm.HeaderButton>
					<comm.HeaderButton>Experience</comm.HeaderButton>
					<comm.HeaderButton>Career</comm.HeaderButton>
					<comm.HeaderButton>Contact</comm.HeaderButton>
				</comm.HeaderButtonWrap>
			</comm.MainHeader>
		</>
	);
}

export default Header;