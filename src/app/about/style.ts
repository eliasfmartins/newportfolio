import styled from 'styled-components';

export const AboutContainer = styled.main`



background-image: url('/public/site-bg.svg');
width: 100%;
`;
export const AboutContent = styled.div`
margin: 0 auto;
@media (max-width:1300px){
	display: flex;
	flex-direction: column;
	margin: 80px 0;
	.container{
		width: 95%;
	}
	.about{
		width: 95%;
	}
	.counts{
		width: 90%;
		flex-wrap: wrap;
		h2{
			font-size: 2.5rem;
		}
	}
}
@media (max-width:600px){
	padding: 0;

	.container{
		width: 
		100%;
		font-size: auto;
		transition: 0.3s;
		h3{
			font-size: 1rem;
		}
	}
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
padding: 5px;
height: 100%;
min-height: 400px;
display: flex;
flex-direction: column;
text-align: justify;
/* align-items: center; */
gap: 2rem;
}

.container{
height: 100%;
gap: 2rem;
min-height: 420px;
min-width: 45%;
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
	color: lightgray;
  justify-content: space-between;
  flex-wrap: wrap;
	gap: 1rem;
	width: 100%;
  position: relative;
}
.pao{
	display: flex;
	gap: 2rem;
	color: white;
	height: auto;
	width: 100%;
	justify-content: baseline;
}
.icon{
	display: flex;
	font-size: 1.5rem;
}
.aboutData{
  padding: 5px;
  border-bottom: 2px solid black;
  
}

.icons{
  display: flex;
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
		padding: 10px 20px 10px 10px;
		min-width: 150px;
		/* background: red; */
		display: flex;
		align-items: center;
		justify-content: center;
		h2{
			color:#FF8C00;
		}
		 border-right: 1px solid lightgray ;
	}


`;