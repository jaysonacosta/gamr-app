import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const ProfileNav: React.FC = () => {
  const liStyles =
    "hover:bg-neutral-700 select-none p-2 rounded cursor-pointer";

  return (
    <ul className="flex">
      <li className={liStyles}>
        <FontAwesomeIcon icon={faUser} /> Overview
      </li>
      <li className={liStyles}>
        <FontAwesomeIcon icon={faUserGroup} /> Friends
      </li>
    </ul>
  );
};

export default ProfileNav;
