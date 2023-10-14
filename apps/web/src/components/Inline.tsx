import { ReactNode } from "react";
type props = {
  leftIcon: JSX.Element;
};

export const Inline: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="flex items-center">{children}</div>;
};
