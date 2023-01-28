import Color from "color";
import styled, { keyframes } from "styled-components";
const gradientKeyframes = keyframes`
{
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`;

export const Gradient = styled.div`
	animation: ${gradientKeyframes} 10s ease infinite;
	background: linear-gradient(
		-45deg,
		${(props) => Color(props.startColour).rotate(180).hex() || "#23a6d5"},
		${(props) => Color(props.startColour).rotate(270).hex() || "#e73c7e"},
		${(props) => Color(props.startColour).rotate(0).hex() || "#ee7752"},
		${(props) => Color(props.startColour).rotate(90).hex() || "#23d5ab"}
	);
	background-size: 400% 400%;
`;
