import styled from 'styled-components'

import Link from 'next/link'
export const LinkCotaniner = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: purple;
  text-align: center;
  
  div.hidden {
    display: flex;
    visibility: hidden;
  }
  &:hover{
    color: red;
    transition: 0.3s;
  }
  .namecontainer{
    background: white;
    position: relative;
    display:flex;
    align-items: center;
    padding: 6px;
  }
  .namecontainerall{
    position: absolute;
    padding-right: 14px;
    right: 0;
    visibility: hidden;
  }
  .name{
    font-size: 12px;

  }
`
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  background: lightgreen;
  align-items: center;
  padding: 4rem;
  row-gap: 1rem;
  position: fixed;
  max-height: max-content;
  bottom: 0;
  margin-top: auto;
  right: 2%;
  z-index: 50;
  top: 0;
  width: 100%;

  .navcontent {
    z-index: 55;
    background: red;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    row-gap: 2.5rem;
    padding: 2rem 1rem;
    height: 400px;
    background: red;
    font-size: 1.875rem;
    line-height: 2.25rem;
    color: white;
  }
  @media (min-width: 768px) {
    .navcontent {
      padding-left: 10rem;
      padding-right: 10rem;
    }
  }
  @media (min-width: 1280px) {
    padding: 5rem;
    height: 100vh;
    max-width: 28rem;
    width: 4rem;
    justify-content: center;
    .navcontent {
      max-height: max-content;
      padding: 0;
      flex-direction: column;
      justify-content: center;
      font-size: 1.25rem;
      line-height: 1.75rem;
      border-radius: 9999px;
    }
    .namecontainerall{

    }
  }
`
