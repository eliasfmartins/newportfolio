import styled from "styled-components";

import Link from "next/link";
export const LinkCotaniner = styled(Link)`
display: flex;
div.hidden{
  visibility: hidden;
}
`
export const NavContainer = styled.nav`
display: flex;
position: absolute;
.nav{
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
}
a{
  text-decoration: none;

}
`