import React, { ReactNode } from "react";

type Props = {
  // eslint-disable-next-line react/no-unused-prop-types
  title: string;
  children: ReactNode;
};

const Tab: React.FC<Props> = ({ children }) => <div>{children}</div>;

export default Tab;
