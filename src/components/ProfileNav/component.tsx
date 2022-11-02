import React from "react";

import { faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

import { ProfileRoutes } from "../../types/types";

const ProfileNav: React.FC = () => {
  const liStyles =
    "hover:bg-neutral-700 select-none p-2 rounded cursor-pointer m-1";

  const selectedStyles = "border-b-2 border-rose-500";

  const { pathname } = useRouter();

  return (
    <ul className="flex">
      <li className={pathname === ProfileRoutes.Profile ? selectedStyles : ""}>
        <Link href={ProfileRoutes.Profile}>
          <a>
            <div className={liStyles}>
              <FontAwesomeIcon icon={faUser} /> Overview
            </div>
          </a>
        </Link>
      </li>
      <li
        className={pathname === ProfileRoutes.Following ? selectedStyles : ""}
      >
        <Link href={ProfileRoutes.Following}>
          <a>
            <div className={liStyles}>
              <FontAwesomeIcon icon={faUserGroup} /> Following
            </div>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default ProfileNav;
