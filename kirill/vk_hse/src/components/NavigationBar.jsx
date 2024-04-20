import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './NavigationBar.css'
import profileImg from '../images/icons/profile.svg';
import scheduleImg from '../images/icons/schedule.svg';
import logoImg from '../images/icons/logo.svg';
import { useNavigate } from "react-router-dom";

import { useState } from 'react';

function NavigationBar() {

const navigate = useNavigate();
const [item, setItem] = useState(1)

const [navItems, setNavItems] = useState([
  {id: 1, name: 'Профиль', img: profileImg, to: '/main/profile', active: true},
  {id: 2, name: 'Расписание', img: scheduleImg, to: '/main/schedule', active: false},
  {id: 3, name: 'Расписание', img: scheduleImg, to: '/main/generate_news', active: false},
  {id: 4, name: 'Расписание', img: scheduleImg, to: '/main/schedule', active: false},
  {id: 5, name: 'Расписание', img: scheduleImg, to: '/main/schedule', active: false},
])

function onClick(to, id){

  let newArr = navItems.map(navItem => {
    if (navItem.id == id){
      navItem.active = true
      return navItem
    }else{
      navItem.active = false
      return navItem
    }
  }
  )

  setNavItems(newArr)

  navigate(to);
}

const activeStyle={
  backgroundColor: '#0080FF',
}

const imgActiveStyle={
  filter: "invert(100%)"
}

return (
<nav class="navigationbar">

<img class="navbar_logo" src={logoImg}></img>
<div class="separator"/>
      <ul>
        {
          navItems.map(navItem => 
            <li class="navbar-item" style={ navItem.active ? activeStyle : {}} onClick={() => onClick(navItem.to, navItem.id)}>
                <img class="navbar_icon" style={ navItem.active ? imgActiveStyle : {}} src={navItem.img}></img>
            </li>
          )
        }
      </ul>
</nav>
);

}



export default NavigationBar;