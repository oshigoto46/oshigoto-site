import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <Tabs
        selectedIndex={tabIndex}
        onSelect={(tabIndex) => setTabIndex(tabIndex)}
      >
        <TabList>
          <Tab>会員紹介</Tab>
          <Tab>Title 2</Tab>
        </TabList>
        <TabPanel>t1t1t1</TabPanel>
        <TabPanel>t2t2t2</TabPanel>
      </Tabs>
      </header>
    </div>
  );
}

export default App;
