import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function NavigationBarForAccessInfopanel() {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid position-relative">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
            <Link class="nav-link" to="/main/infopanelaccess/organization">Организации</Link>
        </li>

        <li class="nav-item">
            <Link class="nav-link" to="/main/infopanelaccess/individuals">Физические лица</Link>
        </li>

      </ul>
    </div>
</nav>
  );
}



export default NavigationBarForAccessInfopanel;