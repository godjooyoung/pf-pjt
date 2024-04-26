import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

function About() {
	return (
		<SectionWrap>
			<PageHeading>
				F<HChar>RO</HChar>NTE<HChar>ND</HChar> DEVEL<HChar>O</HChar>PE<HChar>R,</HChar><br/>
				J<HChar>OO</HChar> Y<HChar>O</HChar>UN<HChar>G</HChar>
			</PageHeading>
			<PageParagraphWrap>
				<MainParagraph>
					안녕하세요. 프론트앤드 개발자 신주영입니다.
				</MainParagraph>
				<MainParagraph>
					상상하던 것들이 시각적으로 구현될 때<br/>
					즐거움을 느껴 프론트앤드 개발을 시작하였습니다.
				</MainParagraph>
				<MainParagraph>
					사람들이 제가 만든 서비스를 사용할 때 뿌듯함을 느낍니다.<br/>
					개발자는 서비스를 만들어내는 생산자 라는 자부심을 바탕으로<br/>
					<span>‘가장 까다로운 QA’인 사용자</span>를 만족시키기 위해<br/>
					마지막까지 고민하며 개발하겠습니다.
				</MainParagraph>
			</PageParagraphWrap>
		</SectionWrap>

	);
}
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

export const PageParagraphWrap = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 24px;
	align-items: center;
`

export const MainParagraph = styled.p`
	font-family: 'SCoreDream';
	font-weight: 300;
	font-size: 16px;
	line-height: 150%;
	text-align: center;
	color: var(--gr-01);
`

export default About;