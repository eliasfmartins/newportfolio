"use client";
import Link from "next/link";

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { usePathname, useRouter } from "next/navigation";
import { LinkCotaniner, NavContainer } from "./style";
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];
export const Nav = () => {
  const pathname = usePathname();
  return (
    <NavContainer>
      <div className="nav">
        {navData.map((link, index) => {
          return (
            <LinkCotaniner
              href={link.path}
              key={index}
              className={link.path === pathname ? "" : ""}
            >
              <div>
                {/* posiiton absolute rigth 0  hiden  so e pra ver isso no hover */}
                {/* <div className="hidden">{link.name}</div> */}
              </div>
              <div>{/* fazer um triangulo pra fica com efeito foda  */}</div>
              <div className="icon">
                <span>{link.name}</span>
                {link.icon}
              </div>
            </LinkCotaniner>
          );
        })}
      </div>
    </NavContainer>
  );
};
