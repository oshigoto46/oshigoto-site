import React from 'react';
import './App.css';
import { useEffect, useState, useRef } from "react";
import Introduction from "./Component/Introduction"
import {Members} from "./Component/Members"
import {Prices}  from "./Component/Prices"
import Header from "./Component/Header"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       <Header></Header>
       <Tabs   selectedIndex={tabIndex} onSelect={(tabIndex) => setTabIndex(tabIndex)}>
        <TabList>
          <Tab>Our Company </Tab>
          <Tab>XXX Members</Tab>
          <Tab>Prices</Tab>
        </TabList>
        <TabPanel>  <Introduction> </Introduction> </TabPanel>
        <TabPanel>  <Members></Members>  </TabPanel>
        <TabPanel>  <Prices></Prices>  </TabPanel>
      </Tabs>
      {/* </header> */}
    </div>
  );
}

export default App;
