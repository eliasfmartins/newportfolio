import styled from 'styled-components';

export const HeaderContainer = styled.header`
	`;
export const HeaderContent = styled.div`
height: 60px;
	margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
	font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
		align-items: center;
		justify-content: center;
		height: 4rem;
    gap: 2rem;
  }
	a{
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
		font-size: 1.5rem;
		color: white;
	}
`;
