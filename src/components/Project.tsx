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

interface StyleProps {
	img?: string;
}

function Project() {
	// 필터
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

	// 프로젝트
	const pjt: Project[] = [
		{
			'img': 'preview_tteokguk.png',
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
			'filter': ['All', 'Service', 'Next.js', 'TypeScript']
		},
		{
			'img': 'preview_mogakkoOn.png',
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
			'filter': ['All', 'Service', 'webRTC']
		},
		{
			'img': 'preview_thumbnailWizard.png',
			'pjtTit': '개인 포트폴리오',
			'pjtSubTit': '프론트앤드 개발자 포르폴리오 사이트',
			'pjtDue': '진행중',
			'keywords': ['React', 'TypeScript', '개인', 'MailJS'],
			'links': [],
			'filter': ['All', 'TypeScript']
		},
		{
			'img': 'preview_thumbnailWizard.png',
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
			'filter': ['All', 'Service']
		},
		{
			'img': 'preview_thumbnailWizard.png',
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
			'filter': ['All', 'Service']
		},
		{
			'img': 'preview_whereBnb.png',
			'pjtTit': '웨어비앤비',
			'pjtSubTit': '에어비앤비 클론 프로젝트',
			'pjtDue': '',
			'keywords': ['React', '카카오 소셜로그인', '필터링', 'SSE', '다중이미지 업로드', '캐러셀'],
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

	// 프로젝트 필터 상태
	const [filterState, setFilterState] = useState({
		'filterId' : 'All',
		'filterDesc' : '참여 프로젝트 전체보기'
	})

	// 프로젝트 목록 상태
	const [pjtState, setPjtState] = useState(pjt)

	// Hooks
	useEffect(()=>{
		if(filterState){
			// 필터상태가 변경되면 프로젝트 상태도 변경된다.
			const filteredPjt = pjt.filter(project => project.filter.includes(filterState.filterId))
			setPjtState(filteredPjt)
		}
	},[filterState])

	// 필터링 핸들러
	const filterClickHandler = (filterId:string, filterDesc:string) => {
		setFilterState(prevState => ({
			...prevState,
			filterId,
			filterDesc
		}));
	}

	return (
		<comm.SectionWrap>
			<comm.PageHeading>
				PR<comm.HChar>OJ</comm.HChar>ET<comm.HChar>S</comm.HChar>
			</comm.PageHeading>
			<FilterBtnWrap>
				{
					filter.map((filterItem, idx) => {
						return (
							<FilterBtn onClick={()=>(filterClickHandler(filterItem.filterId, filterItem.filterDesc))}>
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
			<PjtGridWrap>
				{
					pjtState.map((pjtItem, idx)=>{
						return <div>
							<PjtPreview img={pjtItem.img}></PjtPreview>
							<PjtInfoWrap>
								<PjtInfoText>{pjtItem.pjtTit}</PjtInfoText>
								<PjtSubInfoWrap>
									<PjtSubInfoText>{pjtItem.pjtSubTit}</PjtSubInfoText>
									<PjtSubInfoText>{pjtItem.pjtDue}</PjtSubInfoText>
								</PjtSubInfoWrap>
								<PjtKeywordWrap>
									{
										pjtItem.keywords.map((keyword)=>{
											return <PjtKeywordText>{keyword}</PjtKeywordText>
										})
									}
								</PjtKeywordWrap>
								<PjtLinkWrap>
									{
										pjtItem.links.map((link)=>{
											return <PjtLinkText>{link.name}</PjtLinkText>
										})
									}
								</PjtLinkWrap>
							</PjtInfoWrap>
						</div>
					})
				}
			</PjtGridWrap>
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

export const PjtGridWrap =  styled.div`
	display: grid;
	grid-template-columns: 380px 380px;
	grid-template-rows: 345px 345px;
	gap: 20px 20px;
	width: fit-content;
	margin: 0 auto;
`
export const PjtPreview = styled.div<StyleProps>`
	width: 100%;
	height: 135px;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
	border-top: 1px solid var(--gr-06);
	border-left: 1px solid var(--gr-06);
	border-right: 1px solid var(--gr-06);
	border-bottom: 1px solid var(--gr-06);

	background-image: ${(props) => {
		return `url(${process.env.PUBLIC_URL}/images/components/${props.img})`
	}};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`

export const PjtInfoWrap = styled.div`
	width: 100%;
	height: 210px;
	border-bottom-right-radius: 20px;
	border-bottom-left-radius: 20px;
	border-left: 1px solid var(--gr-06);
	border-right: 1px solid var(--gr-06);
	border-bottom: 1px solid var(--gr-06);
	padding: 20px;
`

export const PjtInfoText = styled.h2`
	font-family: "Pretendard";
	font-weight: 700;
	font-size: 15px;
	color: var(--gr-03);
`

export const PjtSubInfoWrap =styled.div`
	display: flex;
	justify-content: space-between;
`
export const PjtSubInfoText = styled.p`
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 10px;
	color: var(--gr-04);
`

export const PjtKeywordWrap = styled.div`
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		margin: 10px 0px;
		width: 100%;
		height: 96px;
		align-content: flex-start;
`

export const PjtKeywordText = styled.p`
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 12px;
	color: var(--gr-01);
	padding: 5px 10px;
	border: 1px solid var(--gr-05);
	width: fit-content;
	height: fit-content;
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: fit-content;
`

export const PjtLinkWrap = styled.div`
	display: flex;
	column-gap: 6px;
`
export const PjtLinkText = styled.p`
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 10px;
	color: var(--gr-01);
	padding: 6px 16px;
	background-color: var(--main-color-green);
	border: 1px solid var(--main-color-green);
	width: fit-content;
	height: fit-content;
	cursor: pointer;
	&:hover {
		background-color: #98E300;
		color: var(--main-color-blue);
	}
	&:active {
		background-color: #98E300;
		color: var(--main-color-blue);
	}
`

export default Project;