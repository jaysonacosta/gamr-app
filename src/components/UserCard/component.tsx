import React from "react";

import { faUserPlus, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "@prisma/client";
import Image from "next/image";

type Props = {
  user: User;
  following: boolean;
};

const UserCard: React.FC<Props> = ({ user, following }) => {
  return (
    <div className="flex cursor-pointer flex-col items-center gap-y-2 rounded bg-gray-700 p-2">
      <div>
        <Image
          src={user.image ? user.image : ""}
          alt={`${user.name} profile picture.`}
          height={128}
          width={128}
          className="rounded-full"
        />
      </div>
      <span className="font-medium">{user.name}</span>
      {following && (
        <button className="rounded border border-red-200 bg-red-500 p-1">
          <FontAwesomeIcon icon={faUserMinus} /> Unfollow
        </button>
      )}
      {!following && (
        <button className="rounded border border-green-200 bg-green-500 p-1">
          <FontAwesomeIcon icon={faUserPlus} /> Follow
        </button>
      )}
    </div>
  );
};

export default UserCard;
