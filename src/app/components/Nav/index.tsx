import Link from "next/link";

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav>
      <div className="">
        {navData.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={link.path === pathname ? "" : ""}
            >
              <div>
                {/* posiiton absolute rigth 0  hiden  so e pra ver isso no hover */}
              <div>{link.name}</div>
              </div>
              <div>
                {/* fazer um triangulo pra fica com efeito foda  */}
              </div>
              <div>{link.name}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
