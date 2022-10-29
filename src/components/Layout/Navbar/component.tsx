import React, { useState } from "react";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

import useOutsideClick from "../../../hooks/useOutsideClick";
import ProfileDropdown from "../../ProfileDropdown";

const Navbar: React.FC = () => {
  const { data: session } = useSession();
  const [isMenuActive, setMenuState] = useState(false);

  const buttonStyles = "cursor-pointer";

  const handleMenuState = () => {
    setMenuState(!isMenuActive);
  };

  const ref = useOutsideClick(() => {
    setMenuState(false);
  });

  return (
    <nav className="bg-gray-700 p-2 text-neutral-100">
      <div className="container mx-auto flex items-center justify-between">
        <span className="font-extrabold">Gamr.app</span>
        {session && (
          <div
            className="relative flex cursor-pointer items-center gap-x-2"
            onClick={handleMenuState}
            ref={ref}
          >
            <Image
              src={session.user?.image ? session.user.image : ""}
              alt="Profile dropdown menu."
              height={24}
              width={24}
              className="rounded-full"
            />
            <FontAwesomeIcon icon={faCaretDown} />
            <ProfileDropdown
              isActive={isMenuActive}
              handleMenuState={handleMenuState}
            />
          </div>
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
