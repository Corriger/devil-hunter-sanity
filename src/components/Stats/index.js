import React, { Component } from 'react'
import {
    Tab,
    Tabs,
    TabList,
    TabPanel
  } from 'react-tabs'
import style from './style.sass'

class Stats extends Component {
    render() {
      return (
        <div className="stats-container">
            <Tabs>
                <TabList className="tabs">
                  <Tab>Stats</Tab>
                  <Tab>Abilities</Tab>
                  <Tab>Firearms</Tab>
                  <Tab>Devil Arms</Tab>
                </TabList>
                <TabPanel>
                  <Stats />
                </TabPanel>
                <TabPanel>
                  <Abilities />
                </TabPanel>
                <TabPanel>
                  <Firearms />
                </TabPanel>
                <TabPanel>
                  <DevilArms />
                </TabPanel>
              </Tabs>
        </div>
      );
    }
  }
  
  export default App;