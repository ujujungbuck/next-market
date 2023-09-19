"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav>
      <div>
        <div className="flex items-center text-2xl h-14">
          <Link href="/">Logo</Link>
        </div>

        <div className="text-2kl sm:hidden">
          {menu === false ? (
            <button onClick={handleMenu}>+</button>
          ) : (
            <button onClick={handleMenu}>-</button>
          )}
        </div>

        <div className="hidden sm:block">
          <NavItem />
        </div>
      </div>

      <div className="black sm:hidden">
        {menu === false ? null : <NavItem mobile />}
      </div>
    </nav>
  );
};

export default Navbar;
