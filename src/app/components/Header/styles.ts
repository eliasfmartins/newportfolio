import styled from 'styled-components';

export const HeaderContainer = styled.header`
	`;
export const HeaderContent = styled.div`
	padding: 0 2rem;
	gap: 2rem;
	height: 60px;
@media (max-width:700px){
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
	gap: 0rem;
	height: auto;


}
	margin: 0 auto;
  width: 100%;
  max-width: 1200px;
	font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
		align-items: center;
		justify-content: center;
		height: 4rem;
    gap: 1.5rem;
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
