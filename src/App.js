import logo from './logo.svg';
import './App.css';

import styled from "styled-components"
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';


function App() {
  return (
    <div className="App">
      <SideBar/>
      <TopBar/>
      {/* Routing is required here */}
      <MainContent/>
    </div>
  );
}

export default App;
