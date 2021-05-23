import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from "react";
import Introduction from "./Component/Introduction"
import Members from "./Component/Members"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <Tabs   selectedIndex={tabIndex} onSelect={(tabIndex) => setTabIndex(tabIndex)}>
        <TabList>
          <Tab>Our Agency's </Tab>
          <Tab>Women Members</Tab>
        </TabList>
        <TabPanel>  <Introduction> </Introduction> </TabPanel>
        <TabPanel>  <Members></Members>  </TabPanel>
      </Tabs>
      </header>
    </div>
  );
}

export default App;
