import styled from 'styled-components';

export const HeaderContainer = styled.header`
	`;
export const HeaderContent = styled.div`
@media (max-width:700px){
	flex-direction: column;
	align-items: center;
	gap: 2rem;
}
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
		transition: 0.6s;
		padding: 5px;
		font-size: 1.5rem;
		color: white;
	}
	a:hover{
		color: #FF8C00;

	}
	i{
		color: #FF8C00;
	}
`;
