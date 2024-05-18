import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {
  // Navbar,
  // Clippeddrawer,
  // CalendarCard,
  // FunctionCard,
  // SearchField,
  MiniDrawer
} from "./components";
// import styled from "styled-components";
// import { ReactComponent as ReportsIcon } from "./assets/Document Landscape Data.svg";


// const StyledContentContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   right:20%;

// `
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
      <MiniDrawer/>
        <Dashboard/>
      </Router>
    </div>
  );
}

export default App;
