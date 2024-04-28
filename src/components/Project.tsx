import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import * as comm from '../style/commStyle'

interface PjtFilter {
	filterId: string;
	filterDesc: string;
	isUsed: boolean;
	icon: string;
}

interface Project {
	img: string;
	pjtTit: string;
	pjtSubTit: string;
	pjtDue: string;
	keywords: string[];
	links: { name: string; link: string }[];
	filter: string[];
}

function Project() {
	// 프로젝트 필터
	const [filterState, setFilterState] = useState({
		'filterId' : 'All',
		'filterDesc' : '참여 프로젝트 전체보기'
	})

	const filter: PjtFilter[] = [
		{
			'filterId': 'All',
			'filterDesc': '참여 프로젝트 전체보기',
			'isUsed': true,
			'icon': 'ic-pjt-all.svg'
		},
		{
			'filterId': 'Service',
			'filterDesc': '실제로 운영된 프로젝트',
			'isUsed': true,
			'icon': 'ic-pjt-service.svg'
		},
		{
			'filterId': 'Next.js',
			'filterDesc': 'Next.js 활용 프로젝트',
			'isUsed': true,
			'icon': 'ic-pjt-next.svg'
		},
		{
			'filterId': 'webRTC',
			'filterDesc': 'WebRTC 활용 프로젝트',
			'isUsed': true,
			'icon': 'ic-pjt-rtc.svg'
		},
		{
			'filterId': 'TypeScript',
			'filterDesc': 'TypeScript 활용 프로젝트',
			'isUsed': true,
			'icon': 'ic-pjt-ts.svg'
		}
	]

	// 프로젝트 내용
	const pjt: Project[] = [
		{
			'img': '',
			'pjtTit': '니떡국 내떡국',
			'pjtSubTit': '온라인 롤링페이퍼 서비스',
			'pjtDue': '2023.12. - 2024.01.',
			'keywords': ['React', 'Next.js', 'TypeScript', '크로스브라우징', '반응형', '카카오 소셜로그인', 'TailwindCSS', 'Sentry'],
			'links': [
				{
					'name': 'GitHub',
					'link': ''
				},
				{
					'name': 'Site',
					'link': ''
				},
				{
					'name': '디스콰이엇 아티클',
					'link': ''
				}
			],
			'filter': ['All', 'Service', 'Next.js']
		},
		{
			'img': '',
			'pjtTit': '모각코 ON:',
			'pjtSubTit': '위치기반 화상채팅 서비스',
			'pjtDue': '2023.05. - 2023.06.',
			'keywords': ['React', 'webRTC', '데이터시각화', 'SSE', 'webSocket', '지도 API', '코드에디터', '튜토리얼', '최적화', 'Geolocation API', 'Styled-Components'],
			'links': [
				{
					'name': 'GitHub',
					'link': ''
				},
				{
					'name': 'Site',
					'link': ''
				},
				{
					'name': '튜토리얼',
					'link': ''
				}
			],
			'filter': ['All', 'Service']
		},
		{
			'img': '',
			'pjtTit': '개인 포트폴리오',
			'pjtSubTit': '프론트앤드 개발자 포르폴리오 사이트',
			'pjtDue': '',
			'keywords': ['React', 'TypeScript', '개인', 'MailJS'],
			'links': [],
			'filter': ['All', 'TypeScript']
		},
		{
			'img': '',
			'pjtTit': '한솔 모두의봄',
			'pjtSubTit': '3D 홈스타일링 서비스',
			'pjtDue': '2023.11 - 2024.01.',
			'keywords': ['JavaScript', 'jQuery', 'Swiper', 'LessCss', 'Youtube API', '크로스브라우징', '반응형', '업무'],
			'links': [
				{
					'name': 'Site',
					'link': ''
				},
			],
			'filter': ['All', 'Service', 'webRTC', 'TypeScript']
		},
		{
			'img': '',
			'pjtTit': 'Thumbnail Wizards',
			'pjtSubTit': '크롬 확장프로그램',
			'pjtDue': '',
			'keywords': ['JavaScript', '개인', '크롬 확장프로그램'],
			'links': [
				{
					'name': 'Store',
					'link': ''
				},
				{
					'name': 'Blog',
					'link': ''
				},
			],
			'filter': ['All']
		},
		{
			'img': '',
			'pjtTit': '웨어비앤비',
			'pjtSubTit': '에어비앤비 클론 프로젝트',
			'pjtDue': '',
			'keywords': ['', '', '', ''],
			'links': [
				{
					'name': 'GitHub',
					'link': ''
				},
				{
					'name': 'Site',
					'link': ''
				}
			],
			'filter': ['All']
		},
	]

	return (
		<comm.SectionWrap>
			<comm.PageHeading>
				PR<comm.HChar>OJ</comm.HChar>ET<comm.HChar>S</comm.HChar>
			</comm.PageHeading>
			<FilterBtnWrap>
				{
					filter.map((filterItem, idx) => {
						return (
							<FilterBtn onClick={()=>(console.log('test'))}>
								<img src={`${process.env.PUBLIC_URL}/images/components/${filterItem.icon}`} />
								<FilterText>{filterItem.filterId}</FilterText>
							</FilterBtn>
						)
					})
				}
			</FilterBtnWrap>
			<div>
				<FilterDescText>{filterState.filterDesc}</FilterDescText>
			</div>
		</comm.SectionWrap>
	);
}

export const FilterBtnWrap = styled.div`
	width: fit-content;
	display: flex;
	border: 1px solid var(--gr-06);
	background-color: #FFFFFF;
	column-gap: 20px;
	border-radius: 20px;
	padding: 50px 100px;
	margin: 0px auto;
	box-shadow : 2px 7px 10px 0px #e4e5e672;
`

export const FilterBtn = styled.div`
	width: 100px;
	height: 70px;
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 10px;
	color: var(--gr-03);
	border-radius: 5px;
	border: 1px solid var(--gr-05);
	background-color: #FFFFFF;
	text-align: center;
  align-content: center;
	cursor: pointer;
	&:hover {
		background-color: var(--gr-05);
	}
	&:active {
		background-color: var(--gr-05);
	}
	transition: background-color 0.18s ease-in-out;
`

export const FilterText = styled.p`
	margin-top: 8px;
`

export const FilterDescText = styled.p`
	margin: 30px 0px;
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 10px;
	color: var(--gr-04);
	text-align: center;
`
export default Project;