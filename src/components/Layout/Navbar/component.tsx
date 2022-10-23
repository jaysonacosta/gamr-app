import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";

const Navbar: React.FC = () => {
  const { data: session } = useSession();

  const buttonStyles = "rounded-sm border border-inherit p-2";

  return (
    <nav className="bg-gray-700 p-2 text-neutral-100">
      <div className="container mx-auto flex items-center justify-between">
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
      </div>
    </nav>
  );
};

export default Navbar;
