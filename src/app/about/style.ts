import styled from 'styled-components';

export const AboutContainer = styled.main`
display: flex;
align-items: center;
justify-content: center;
`;
export const AboutContent = styled.div`
 height: calc(100vh - 27px);
  gap: 2rem;
 width: 100%;
 max-width: 1200px;
 padding: 0 2rem;
 display: flex;
 align-items: center;
 justify-content: center;
 .about{
height: 100%;
background: pink;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
}
.container{
  height: 100%;
background: red;
width: 50%;
display: flex;
align-items: center;
flex-direction: column;
}
.skills{
  display: flex;
  gap: 1rem;
}
.aboutData{
  padding: 5px;
  border-bottom: 2px solid black;
  
}
.icons{
  display: flex;
  gap: 1rem;
}
.aboutskill{
  background: lightblue;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  position: relative;
}
.on{
  color: white;
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
  background: black;
  transition: 0.5s;
  border-radius: 12px;

}
.defalt{
  padding: 5px;
  transition: 0.5s;
  color: blue;
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
  background: black;
  transition: 0.5s;
  }
  


`;