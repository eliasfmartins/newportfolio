import styled from 'styled-components'

import Link from 'next/link'
export const LinkCotaniner = styled(Link)`
  display: flex;
  div.hidden {
    visibility: hidden;
  }
`
export const NavContainer = styled.nav`
  position: fixed;
  background: red;
  top: 50%;
  right: 2%;
  transform: translate(0%, -50%);
  border-radius: 20px;
  width: 50px;
  span {
    display: none;
  }
  .icon:hover {
    span {
      display: flex;
    }
  }
  .nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 10px;
    height: 80vh;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 700px) {
    height: 50px;
    display: flex;
    width: 90%;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 450%);
    background: red;
    border-radius: 20px;
    .nav {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      justify-content: space-around;
      height: auto;
      align-items: center;
    }
  }
`
