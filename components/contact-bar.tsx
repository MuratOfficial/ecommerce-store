import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineBehanceSquare, AiOutlineInstagram } from "react-icons/ai";
import { SlSocialVkontakte } from "react-icons/sl";
import { BsTelegram } from "react-icons/bs";

function ContactBar() {
  const routes = [
    {
      href: "/",
      label: "Store",
    },
    {
      href: "/billboard",
      label: "Billboard",
    },
    {
      href: "/cabinet",
      label: "Cabinet",
    },
    {
      href: "/discounts",
      label: "Discounts",
    },
    {
      href: "/shops",
      label: "Shops",
    },
    {
      href: "/address",
      label: "Address",
    },
  ];

  const social = [
    {
      href: "/facebook.com",
      icon: <CiFacebook size="30px" />,
    },
    {
      href: "/behance.com",
      icon: <AiOutlineBehanceSquare size="30px" />,
    },
    {
      href: "/instagram.com",
      icon: <AiOutlineInstagram size="30px" />,
    },
    {
      href: "/vk.com",
      icon: <SlSocialVkontakte size="30px" />,
    },
    {
      href: "/t.me",
      icon: <BsTelegram size="30px" />,
    },
  ];

  return (
    <div className="flex flex-col pt-8 gap-y-2 px-8 justify-center items-center">
      <div className="flex gap-x-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            className="text-md font-bold ring-offset-2 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 p-1 hover:text-white rounded-md"
            href={route.href}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-x-4 pt-4">
        {social.map((item) => (
          <Link
            href={item.href}
            className="transition ease-in-out delay-150 hover:scale-125 duration-200"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ContactBar;
