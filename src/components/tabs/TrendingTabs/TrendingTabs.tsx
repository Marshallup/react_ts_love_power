import React, { FC, PropsWithChildren } from "react";
import { Tab, Tabs, TabList } from 'react-tabs';

const TrendingTabs: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Tabs selectedTabClassName="active">
      <div className="trending__tabs tabs__block js_tabs__block">
        <div className="container">
          <TabList className={'collection__tabs__inner'}>
            <Tab>All</Tab>
            <Tab>Authored</Tab>
            <Tab>Owned</Tab>
            <Tab>Sale</Tab>
          </TabList>
        </div>
      </div>

      {children}
    </Tabs>
  )
}

export default TrendingTabs