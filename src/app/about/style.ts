import styled from 'styled-components';

export const AboutContainer = styled.main`
display: flex;
align-items: center;
justify-content: center;
background-image: url('/public/site-bg.svg');
`;
export const AboutContent = styled.div`
@media (max-width:900px){
	display: flex;
	flex-direction: column;
}
 min-height: calc(100vh - 60px);
 height: 100%;
 gap: 2rem;
 width: 100%;
 max-width: 1200px;
 padding: 0 2rem;
 display: flex;
 align-items: center;
 justify-content: center;
 .about{
height: 100%;
min-height: 400px;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
}

.container{
height: 100%;
gap: 2rem;
min-height: 400px;
width: 40%;
padding: 20px;
display: flex;
align-items: center;
flex-direction: column;
}

.skills{
  display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
  gap: 1rem;
}
.aboutskill{
  display: flex;
  align-items: center;
	/* font-weight: 700; */
	color: lightgray;
  justify-content: space-between;

	gap: 1rem;
	width: 100%;
  position: relative;
}
.icon{
	display: flex;
	font-size: 1.5rem;
	justify-content: space-between;
}
.aboutData{
  padding: 5px;
  border-bottom: 2px solid black;
  
}

.icons{
  display: flex;
	color: white;
	font-size: 1rem;
}

.on{
	color: #FF8C00;
  position: relative;
  padding: 5px;
}
.on::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
	background: #FF8C00;
  transition: 0.5s;
  border-radius: 12px;

}
.defalt{
  padding: 5px;
  transition: 0.5s;
  color: #fff;
  cursor: pointer;
  position: relative;
  
}
.defalt::after{ 
  content: ' ';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 2px;
  background: #fff;
  transition: 0.5s;
  }
	h2{
		font-size: 3rem;
	}
	span{
		color: #FF8C00;

	}
	.counts{
	display: flex;
	width: 100%;
	justify-content: space-around;

	align-items: center;
}
	.count{
		flex-direction: column;
		gap: 0.5rem;
		padding: 10px 25px 10px 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		h2{
			color:#FF8C00;
		}
		 border-right: 1px solid lightgray ;
	}
  


`;