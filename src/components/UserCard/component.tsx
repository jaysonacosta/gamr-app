import React from "react";

import { User } from "@prisma/client";
import Image from "next/image";

type Props = {
  user: User;
};

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="flex flex-col items-center rounded bg-gray-700 p-2">
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
    </div>
  );
};

export default UserCard;
