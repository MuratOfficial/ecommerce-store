import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto py-8">
        <p className="text-center text-xs text-black">
          &copy; 2023 De Col'e. All rights reserved. Powered by
          <span className="font-semibold bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 p-1 rounded-md hover:text-white">
            <Link href="https://toimet.tech">ToimetTech</Link>
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
