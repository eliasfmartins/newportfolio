import styled from 'styled-components';

export const DivContainer = styled.div`
display: flex;


flex-direction: column;
.first{
	position: fixed;
	top: 0;
	bottom: 0;
	right: 100%;
	height: 100vh;
	z-index: 30;
	background: #005567;
	width: 100vw;
}
.second{
	background: #004366;
	position: fixed;
	top: 0;
	bottom: 0;
	right: 100%;
	height: 100vh;
	z-index: 20;
	width: 100vw;
}
.terceira{
	background: #003366;
	position: fixed;
	top: 0;
	bottom: 0;
	right: 100%;
	height: 100vh;
	z-index: 10;
	width: 100vw;
}
`;