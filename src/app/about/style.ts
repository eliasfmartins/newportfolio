import styled from "styled-components";

export const AboutContainer = styled.main`
display: flex;
align-items: center;
justify-content: center;
`
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
  height: 200px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.on{
  color: red;
}
.defalt{
  color: blue;
}

`;