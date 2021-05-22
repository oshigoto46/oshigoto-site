import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Tabs
        selectedIndex={tabIndex}
        onSelect={(tabIndex) => setTabIndex(tabIndex)}
      >
        <TabList>
          <Tab style={style}>会員紹介</Tab>
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
