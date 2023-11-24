import { FC, PropsWithChildren } from "react";

const Accordion: FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export { Accordion };
