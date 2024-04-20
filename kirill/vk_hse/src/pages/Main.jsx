import React from 'react'
import NavigationBar from '../components/NavigationBar';
import { Outlet } from 'react-router';
import './Main.css';

function Main() {

  const style = {paddingLeft: "100px"}
  return (
    <div class="main">
        <NavigationBar/>
        <Outlet class='outlet'/>
    </div>
    
  );
}

export default Main;