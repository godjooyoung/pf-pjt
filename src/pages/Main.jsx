import { styled } from 'styled-components';
import About from '../components/About';
import Skill from '../components/Skill';
import Project from '../components/Project';

function Main() {
	return (
		<MainWrap>
			<About/>
			<Skill/>
			<Project/>
		</MainWrap>

	);
}
export const MainWrap = styled.div`
	position: relative;
	top: 104px;
	display: flex;
	flex-direction: column;
`

export default Main;