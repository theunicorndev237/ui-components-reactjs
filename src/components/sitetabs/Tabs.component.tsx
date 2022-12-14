/* eslint-disable react/no-array-index-key */

import React, { useState } from "react";
import TabHead from "./TabHead.component";

// styles import
import styles from "./tab.module.css";

type ChildrenProp = {
  children: React.ReactElement[];
};

const Tabs: React.FC<ChildrenProp> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <ul className={styles.tab__head__list}>
        {children.map((item, index) => (
          <TabHead
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  );
};

export default Tabs;
