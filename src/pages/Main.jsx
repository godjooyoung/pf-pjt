import { styled } from 'styled-components';
import About from '../components/About';
import Skill from '../components/Skill';

function Main() {
	return (
		<MainWrap>
			<About/>
			<Skill/>
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