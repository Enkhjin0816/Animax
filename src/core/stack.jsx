import styled from "styled-components";

const Stack = styled.div`
	display: flex;
	flex-direction: ${props => props.row ? 'row' : 'column'};
	width: ${width => width ? '100%' : 'fit-content'};
	width: ${height => height ? '100%' : 'fit-content'};
	justify-content: ${props => props.sBetween ? 'space-between' : props.sEvenly ? 'space-evenly' : props.sEvenly ? 'space-around' : 'none'};
`

export default Stack;