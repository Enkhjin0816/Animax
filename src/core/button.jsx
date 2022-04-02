import styled from "styled-components";

const Button = styled.button`
	height: ${props => props.secondary ? 'fit-content' : '46px'};
	width: ${props => props.secondary ? 'fit-content' : '100%'};
	border: none;
	border-radius: 50px;
	background: ${props => props.secondary ? 'none' : '#E24C5B'};
	font-size: 15px;
	color: ${props => props.secondary ? '#999999' : 'white'};
`

export default Button;