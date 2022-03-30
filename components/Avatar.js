import React from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";

const Avatar = ({ username, logoutOnPress }) => {
  const { user, logout } = useMoralis();

  return (
    <Image
      className='cursor-pointer rounded-full bg-white hover:opacity-75'
      src={`https://avatars.dicebear.com/api/croodles-neutral/${
        username || user.get("username")
      }.svg`}
      layout='fill'
      onClick={() => logoutOnPress && logout()}
    />
  );
};

export default Avatar;
