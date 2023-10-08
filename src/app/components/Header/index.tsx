import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HeaderContainer, HeaderContent } from "./styles";
export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>
          <span>elias </span> martins <i>.</i>
        </h2>
        <nav>
          <h3>Socials</h3>
          <Link
            target="_blank"
            href={`https://www.instagram.com/eliasf.martins/`}
          >
            <BsInstagram />
          </Link>
          <Link
            target="_blank"
            href={`https://www.instagram.com/eliasf.martins/`}
          >
            <FaLinkedin />
          </Link>
          <Link
          //facebook sla  e github
            target="_blank"
            href={`https://www.instagram.com/eliasf.martins/`}
          >
            <FaLinkedin />
          </Link>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
};
