import styled from 'styled-components';

import Link from 'next/link';
export const LinkCotaniner = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  transition: all 3s;
 
  &:hover {
  
    visibility: visible;
    .group {
      visibility: visible;
    }
    .namecontainer {
    }
  }
  .name {
    font-size: 12px;
    line-height: 1;
  }
  .namecontainer {
    visibility: hidden;
    border-radius: 5px;
    background: gray;
    position: relative;
    display: flex;
    align-items: center;
    padding: 6px;
  }
  .triangle {
    visibility: hidden;
    transform: rotate(45deg);
    width: 10px;
    height: 10px;
    position: absolute;
    right: -5px;
    background: gray;
  }
  .group {
    position: absolute;
    padding-right: 14px;
    right: 40px;
    visibility: hidden;
    border-radius: 6px;
    &:hover {
      visibility: visible;
    }
  }
  @media (min-width: 1180px) {
    &:hover {
  
      visibility: visible;
      .group {
        visibility: visible;
      }
      .namecontainer {
        visibility: visible;
      }
      .triangle {
        visibility: visible;
      }
    }
    .group {
      position: absolute;
      padding-right: 14px;
      right: 40px;
      visibility: hidden;
      border-radius: 6px;
      &:hover {
        visibility: visible;
      }
    }
    .triangle {
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
      position: absolute;
      right: -5px;
      background: gray;
    }
    .name {
      font-size: 12px;
      line-height: 1;
    }
    .namecontainer {
      border-radius: 5px;
      background: gray;
      position: relative;
      display: flex;
      align-items: center;
      padding: 6px;
      &:hover {
        visibility: visible;
      }
    }
  }
`;
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  margin-top: auto;
  align-items: center;
  height: max-content;
  z-index: 50;
  top: 0;
  width: 100%;
  row-gap: 1rem;
   .actived {
    color: #FF8C00;
  }
	color:white;

  .navcontent {
		background-color: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(5px); 
    height: auto;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 2rem 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
		color: #fff;
  }
  @media (min-width: 768px) {
    .navcontent {
      padding-left: 10rem;
      padding-right: 10rem;
    }
  }
	a{
		color:#fff;
	}

  @media (min-width: 1300px) {
    justify-content: center;
    row-gap: 1rem;
    right: 2%;
    height: 100vh;
    max-width: 28rem;
    width: 4rem;

    .navcontent {
      flex-direction: column;
      justify-content: center;
      padding: 2rem;
      row-gap: 2.5rem;

      font-size: 1.5rem;
      line-height: 2rem;
      height: max-content;
      border-radius: 9999px;
    }
  }
`;
