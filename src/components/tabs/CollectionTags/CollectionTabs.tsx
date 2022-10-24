import React, { FC, PropsWithChildren } from "react";
import { Tab, Tabs, TabList } from 'react-tabs';
import { CollectionTabsProps } from "./types";

const CollectionTabs: FC<PropsWithChildren<CollectionTabsProps>> = ({ children }) => {
  return (
    <Tabs selectedTabClassName="active">
      <div className="collection__tabs tabs__block js_tabs__block">
        <div className="container">
          <TabList className={'collection__tabs__inner'}>
            <Tab>NFTs</Tab>
            <Tab>Activity</Tab>
          </TabList>
        </div>
      </div>

      {children}
    </Tabs>
  )
}

export default CollectionTabs