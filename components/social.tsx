import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const socialLinks = [
  {
    icons: <FaGithub />,
    path: "https://github.com/ManasaPeram",
  },
  {
    icons: <FaLinkedin />,
    path: "https://www.linkedin.com/in/peram-manasa-771a58220/",
  },
  {
    icons: <FaStackOverflow />,
    path: "https://github.com/ManasaPeram",
  },
];

const Social = () => {
  return (
    <div className="flex gap-6 ">
      {socialLinks.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className="flex size-10 items-center justify-center rounded-full border-2 border-blue text-blue duration-3000 hover:transition-all hover:bg-blue/20  "
        >
          {item.icons}
        </Link>
      ))}
    </div>
  );
};

export default Social;
