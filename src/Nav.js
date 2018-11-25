import React, { Component } from 'react';
import './App.css';
import m1 from './m1.jpg';
import m2 from './m2.jpg';

class Nav extends Component {
    constructor(){
        super();
        this.state={
            text: "m2"
        };
    }

    clicked(text)
    {
        //this.setState({ text: text});
        this.forceUpdate();
    }
  render() {
    return (
    	<div class="nav">
		<h2>Explore more of .. </h2>
         <a href="https://guidetoiceland.is/travel-iceland/drive/seljalandsfoss"><li> <h5>Seljalandsfoss, Iceland</h5></li></a>
         <a href="https://www.welcomeargentina.com/puertoiguazu/iguazu-falls.html"><li> Iguazu Falls, Argentina</li></a>
         <a href="https://visitgreenland.com/destinations/nuuk/"> <li> Nuuk, Greenland</li></a>
         
         
        {this.state.text}
        

	    </div>
    );
  }
}

export default Nav;
