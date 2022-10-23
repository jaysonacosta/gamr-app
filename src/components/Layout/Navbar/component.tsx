import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";

const Navbar: React.FC = () => {
  const { data: session } = useSession();

  const buttonStyles = "rounded-sm border border-inherit p-2";

  return (
    <nav className="flex items-center justify-between bg-slate-800 p-4 text-white">
      <span className="font-extrabold">Gamr.app</span>

      {session && (
        <button className={buttonStyles} onClick={() => signOut()}>
          Sign Out
        </button>
      )}

      {!session && (
        <button className={buttonStyles} onClick={() => signIn("discord")}>
          Sign In
        </button>
      )}
    </nav>
  );
};

export default Navbar;
