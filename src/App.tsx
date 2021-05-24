import React from 'react';
import './App.css';
import { useEffect, useState, useRef } from "react";
import Introduction from "./component/Introduction/Introduction"
import {Members} from "./component/Members/Members"
import {Prices}  from "./component/Prices/Prices"
import Header from "./component/Navbar/Header"
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
