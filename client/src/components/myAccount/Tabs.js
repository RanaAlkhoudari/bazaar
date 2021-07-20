import React from 'react';
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Tabs = ({ tabsData }) => (
  <TabsComponent>
    <TabList>
      {tabsData.map(({ heading }, i) => (
        <Tab key={i}>{heading}</Tab>
      ))}
    </TabList>
    {tabsData.map(({ body }, i) => (
      <TabPanel key={i}>{body}</TabPanel>
    ))}
  </TabsComponent>
);

export default Tabs;
