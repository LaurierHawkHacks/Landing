import { FC, PropsWithChildren } from "react";

const Accordion: FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-auto grid max-w-[68.75rem]">{children}</div>;
};

export { Accordion };
