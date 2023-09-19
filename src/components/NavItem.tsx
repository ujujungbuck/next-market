import React from "react";
import Link from "next/link";

const NavItem = ({ mobile }: { mobile?: boolean }) => {
  return (
    <ul>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/admin">Admin</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/admin">User</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <button>market</button>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <button>Sign in</button>
      </li>
    </ul>
  );
};

export default NavItem;
