import React from "react";

import {
  faUser,
  faUserGroup,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";
import Link from "next/link";

import { ProfileRoutes } from "../utils/types";

type Props = {
  isActive: boolean;
  handleMenuState: () => void;
};

const ProfileDropdown: React.FC<Props> = ({ isActive }) => {
  const liStyles = "p-1 hover:bg-gray-600 rounded cursor-pointer";
  const aStyles = "flex items-center gap-x-2";

  if (isActive) {
    return (
      <div className="absolute -bottom-36 -left-20 w-max rounded border border-neutral-300 bg-gray-700 p-1">
        <ul className="flex flex-col gap-y-2">
          <li className={liStyles}>
            <Link href={ProfileRoutes.Profile}>
              <a className={aStyles}>
                <FontAwesomeIcon icon={faUser} />
                Your Profile
              </a>
            </Link>
          </li>
          <li className={liStyles}>
            <Link href={ProfileRoutes.Following}>
              <a className={aStyles}>
                <FontAwesomeIcon icon={faUserGroup} />
                Following
              </a>
            </Link>
          </li>
          <hr />
          <li
            className={liStyles}
            onClick={() => {
              signOut();
            }}
          >
            <a className={aStyles}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign out
            </a>
          </li>
        </ul>
      </div>
    );
  }

  return null;
};

export default ProfileDropdown;
