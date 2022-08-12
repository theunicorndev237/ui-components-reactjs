import React, { useCallback } from "react";

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li>
      <button type="button" style={{ width: "100%" }} onClick={onClick}>
        {title}
      </button>
    </li>
  );
};

export default TabTitle;
