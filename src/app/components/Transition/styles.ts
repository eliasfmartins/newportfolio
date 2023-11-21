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
  background: gray;
	width: 100vw;
}
.second{
  background: pink;
	position: fixed;
	top: 0;
	bottom: 0;
	right: 100%;
	height: 100vh;
	z-index: 20;
	width: 100vw;
}
.terceira{
  background: purple;
	position: fixed;
	top: 0;
	bottom: 0;
	right: 100%;
	height: 100vh;
	z-index: 10;
	width: 100vw;
}
`;