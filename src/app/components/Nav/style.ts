import styled from 'styled-components'

import Link from 'next/link'
export const LinkCotaniner = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;

  div.hidden {
    display: flex;
    visibility: hidden;
  }
  &:hover {
    color: red;
    transition: 0.3s;
  }
  .namecontainer {
    position: relative;
    display: flex;
    align-items: center;
    padding: 6px;
  }
  .group {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .group:hover {
    .name {
      visibility: visible;
    }
  }
  .name {
    position: absolute;
    text-decoration: none;
    /* visibility: hidden; */
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    background: white;
    z-index: 10;
  }
  .triangle {
    position: absolute;
    left: 0;
    margin-left: -10px;
    background: white;
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
  }
  .icon {
    color: white;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: red;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: solid 1px white;
    a {
    }
  }
  text-decoration: none;
`
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  background: lightgreen;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 2%;
  bottom: 8%;
  width: 20px;
  border-radius: 50px;

  .navcontent {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    row-gap: 1.5rem;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    padding: 1rem;
    height: 80vh;
    max-width: 28rem;
    width: 5rem;
    justify-content: center;
    .navcontent {
      height: 80vh;
      flex-direction: column;
      justify-content: center;
      line-height: 1.5rem;
    }
  }
`
