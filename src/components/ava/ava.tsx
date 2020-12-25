import * as React from "react";

interface AvatarProps {
  avatar: string;
}

export const Ava: React.FC<AvatarProps> = ({ avatar }) => {
  return <img src={avatar} alt="" />;
};
