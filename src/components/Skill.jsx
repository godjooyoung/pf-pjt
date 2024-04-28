import { styled } from 'styled-components'
import * as comm from '../style/commStyle'

function Skill() {
	const skillsData = [
		{
			'field': '마크업',
			'skills': ['HTML5', 'CSS'],
			'descs': ['시맨틱한 문서작성을 위해 노력합니다.', '인터렉션, 크로스브라우징에 관심이 많습니다.', '기본적인 마크업 및 퍼블리싱이 가능합니다.']
		},
		{
			'field': '개발언어',
			'skills': ['JavaScript', 'TypeScript'],
			'descs': ['ES6 문법에 능숙하며 엔진 동작원리에관심이 많습니다.', 'Array, Object, Promise등을 이해하고 코드에 활용합니다.']
		},
		{
			'field': '라이브러리',
			'skills': ['React', 'Redux'],
			'descs': ['React를 활용한 UI 구현이 가능하며 SPA 개발 경험이 있습니다.', '컴포넌트 재사용, 랜더링 최적화에 대해 고민하며 코드를 작성합니다.', '', 'Redux를 비롯한 Redux-toolkit, Recoil, Zustand 등', '다양한 상태 관리 라이브러리를 프로젝트에 적용하였습니다.', '', '클라이어드 상태와 서버 상태에 대해 이해하며', 'React-Query(TenStack-Query) 등의', '서버 네트워크 라이브러리를 사용했습니다.']
		},
		{
			'field': '프레임워크',
			'skills': ['Next.js'],
			'descs': ['Next.js를 활용한 CSR 페이지를 구현했습니다.', 'APP방식 라우터 방식을 사용했으며', 'Page 방식 라우터에 대한 기본적인 이해도하고 있습니다.']
		},
		{
			'field': '스타일',
			'skills': ['CSS-in-JS'],
			'descs': ['컴포넌트 스타일링을 위해 Styled-component,', 'tailwindCSS를 사용해왔습니다.', '동적 스타일링에 대한 관심이 많습니다.']
		},
		{
			'field': '협업',
			'skills': ['Git', 'Figma', 'Jira'],
			'descs': ['Git을 통한 형상 관리,', 'Figma를 통한 디자이너와 협업 경험,', 'Jira 등 업무 관리 툴을 사용해', 'Task, Issue 추적 및 협업 경험이 있습니다.']
		},
	]
	return (
		<comm.SectionWrap>
			<comm.PageHeading>
				TE<comm.HChar>C</comm.HChar>HNI<comm.HChar>CA</comm.HChar>L <comm.HChar>S</comm.HChar>KILL<comm.HChar>S</comm.HChar>
			</comm.PageHeading>
			<SkillCardsWrap>
			{
				skillsData.map((skillItem, idx) => {
					return (
						<SkillCard idx={idx}>
							<SkillNameWrap>
								{skillItem.skills.map((skill) => {
									return <SkillName>{skill}</SkillName>
								})}
							</SkillNameWrap>
							<div>
								<SkillDesc>
									{skillItem.descs.map((desc) => {
										return desc === '' ? <br /> : <>{desc}<br /></>
									})}
								</SkillDesc>
							</div>
						</SkillCard>
					)
				})
			}
			</SkillCardsWrap>
		</comm.SectionWrap>
	);
}

export const SkillCardsWrap = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	align-items: center;
`

export const SkillCard = styled.div`
	display: flex;
	flex-direction: column;
	width: fit-content;
	padding: 30px 24px 30px 36px;
	position: relative;
	${(props) => {
		return props.idx%2 === 0 ? 'transform: translateX(50%);' : 'transform: translateX(-50%);'
	}};
	&::before {
		content: '';
    width: 100%;
    height: 100%;
    background-color: pink;
    position: absolute;
		${(props) => {
		return props.idx%2 === 0 ? 'left: -100%;' : 'right: -100%;'
		}};
    top: 0px;
	}
	
`
export const SkillNameWrap = styled.div`
	display: flex;
	column-gap: 15px;
`

export const SkillName = styled.p`
	padding: 5px;
	background-color: var(--gr-05);
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 15px;
	color: var(--gr-01);
	position: relative;
	&::before {
		content: '';
		display: inline-block;
		width: 6px;
		height: 100%;
		background-color: var(--main-color-blue);
		position: absolute;
    left: -6px;
    top: 0px;
	}
`

export const SkillDesc = styled.p`
	width: fit-content;
	margin-top: 15px;
	margin-left: -6px;
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 13px;
	color: var(--gr-03);
`
export default Skill;