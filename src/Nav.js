import React, { Component } from 'react';
import './App.css';
import m1 from './m1.jpg';
import m2 from './m2.jpg';

class Nav extends Component {
      render() {
    return (
    	<div class="nav">
        <center>
		<h2>Explore more of .. </h2>
         <a href="https://guidetoiceland.is/travel-iceland/drive/seljalandsfoss"><li>Seljalandsfoss, Iceland</li></a><br></br>
         <a href="https://www.welcomeargentina.com/puertoiguazu/iguazu-falls.html"><li> Iguazu Falls, Argentina</li></a><br/>
         <a href="https://visitgreenland.com/destinations/nuuk/"> <li>Nuuk, Greenland</li></a>
         </center>
         </div>
    );
  }
}

export default Nav;
